/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/render', 'N/search', 'N/record', 'N/query', 'N/config', '../lib/scv_lib_pdf.js', '../lib/scv_lib_function.js',
        'N/xml'
        // , '../lib/scv_lib_amount_in_word.js', 'N/file'
    ],

    (render, search, record, query, config, libPdf, lbf,
     xml
     // , libAmt, file
    ) => {

        function onRequest(scriptContext) {
            let request = scriptContext.request;
            let response = scriptContext.response;
            let obParam = request.parameters;
            renderRecordToPdfWithTemplate(obParam.id, obParam.type, obParam.templateid, obParam, scriptContext);
        }

        function renderRecordToPdfWithTemplate(id, type, templateid, _params, scriptContext) {
            let rec = record.load({type: type, id: id, isDynamic: false});
            let renderer = libPdf.initTemplateRender(templateid);
            switch (type) {
                case "purchaseorder":
                    printDonDatHang(rec, renderer, templateid);
                    break;
                default:
            }
            const newFile = renderer.renderAsPdf();
            scriptContext.response.writeFile(newFile, true);
        }

        function printDonDatHang(rec, renderer) {
            let entity = rec.getValue('entity');
            let bu_center = rec.getValue('cseg_scv_bu_center');
            let tranid = rec.getValue('tranid');
            let trandate = rec.getText('trandate');
            let exchangerate = rec.getValue('exchangerate');
            let created_by = rec.getValue('custbody_scv_created_by');
            let today = new Date();
            let timezoneOffset = today.getTimezoneOffset() / 60;
            today.setHours(today.getHours() + timezoneOffset + 7);
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            let hh = String(today.getHours()).padStart(2, '0');
            let minutes = String(today.getMinutes()).padStart(2, '0');
            let vietnamTime = dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + minutes;

            let legal_name, defaultaddress, phone_no, bu_legal_name, bu_logo, emp_legal_name, fullLogoUrl;
            if (created_by) {
                let lkE = search.lookupFields({
                    type: 'employee',
                    id: created_by,
                    columns: ['custentity_scv_legal_name']
                });
                emp_legal_name = lkE.custentity_scv_legal_name;
            }
            if (entity) {
                var rec1 = record.load({
                    type: lbf.getEntityType(entity),
                    id: entity,
                })
                legal_name = xml.escape(rec1.getValue('custentity_scv_legal_name'));
                phone_no = rec1.getValue('custentity_scv_phone_no');
                defaultaddress = xml.escape(rec1.getValue('defaultaddress'));
            }
            if (bu_center) {
                let lkE = search.lookupFields({type: 'customrecord_cseg_scv_bu_center', id: bu_center, columns: ['custrecord_scv_bu_logo', 'custrecord_scv_bu_legal_name']});
                bu_logo = lkE.custrecord_scv_bu_logo[0].text;
                bu_legal_name = lkE.custrecord_scv_bu_legal_name;
                fullLogoUrl = "https://9363397.app.netsuite.com/core/media/media.nl?id=2926&c=9363397&h=hP12cdKsEB27lxA3uIeKuNTXICqouAzmcaK43ATD04iUYtd6&fcts=20240121175801&whence=";
            }
            const listLocId = getListIdLoc(rec, 'item');
            const objInfoLoc = loadInfoLocation(listLocId);
            let lineCnt = rec.getLineCount({sublistId: 'item'});
            let arrLine = [], subistId = 'item';
            let thanhtien = 0, giatri_dv = 0, vat = 0, total = 0, total_thanhtien = 0;
            for (let i = 0; i < lineCnt; i++) {
                let line_no = rec.getSublistValue({sublistId: subistId, fieldId: 'custcol_scv_line_no', line: i});
                let tc_item_code = rec.getSublistValue({sublistId: subistId, fieldId: 'custcol_scv_tc_item_code', line: i});
                let description = rec.getSublistValue({sublistId: subistId, fieldId: 'description', line: i});
                let location = rec.getSublistValue({sublistId: subistId, fieldId: 'location', line: i});
                let units = rec.getSublistText({sublistId: subistId, fieldId: 'units', line: i});
                let quantity = rec.getSublistValue({sublistId: subistId, fieldId: 'quantity', line: i});
                let rate = rec.getSublistValue({sublistId: subistId, fieldId: 'rate', line: i});
                let amount = rec.getSublistValue({sublistId: subistId, fieldId: 'amount', line: i});
                let tax1amt = rec.getSublistValue({sublistId: subistId, fieldId: 'tax1amt', line: i});
                let grossamt = rec.getSublistValue({sublistId: subistId, fieldId: 'grossamt', line: i});
                let loc_addrcode = location ?  objInfoLoc[location].loc_addrcode : '';
                giatri_dv = rate * exchangerate;
                thanhtien = amount * exchangerate;
                total_thanhtien += thanhtien;
                vat += (tax1amt * exchangerate);
                total += (grossamt * exchangerate)
                let result = {
                    line_no: line_no,
                    description: xml.escape(description),
                    units: units,
                    location: location,
                    quantity: changeCurrency(quantity),
                    tc_item_code: tc_item_code,
                    giatri_dv: changeCurrency(giatri_dv),
                    thanhtien: changeCurrency(thanhtien),
                    total_thanhtien: changeCurrency(total_thanhtien),
                    loc_addrcode: loc_addrcode
                };
                arrLine.push(result);
            }
            renderer.addCustomDataSource({
                format: render.DataSource.OBJECT,
                alias: "jsonData",
                data: {
                    bu_logo: bu_logo,
                    bu_legal_name: bu_legal_name,
                    defaultaddress: defaultaddress,
                    phone_no: phone_no,
                    legal_name: legal_name,
                    tranid: tranid,
                    giatri_dv: giatri_dv,
                    thanhtien: thanhtien,
                    vat: changeCurrency(vat),
                    total: changeCurrency(total),
                    total_thanhtien: changeCurrency(total_thanhtien),
                    arrLine: arrLine,
                    trandate: trandate,
                    emp_legal_name: emp_legal_name,
                    vietnam_time: vietnamTime,
                    fullLogoUrl: fullLogoUrl
                }
            });
        }

        function getListIdLoc(rec, sublist) {
            let arrLocId = [];
            let lineCnt = rec.getLineCount({sublistId: sublist});
            for (let i = 0; i < lineCnt; i++) {
                let location = rec.getSublistValue({sublistId: sublist, fieldId: 'location', line: i});
                if (arrLocId.indexOf(location) === -1) arrLocId.push(location);
            }
            return arrLocId;
        }

        function loadInfoLocation(arrLocId) {
            if (arrLocId.length === 0) return;
            let searchObj = search.create({
                type: 'location',
                filters: [
                    ['internalid', 'anyof', arrLocId]
                ],
                columns: ['internalid','custrecord_scv_loc_addrcode']
            });
            let searchData = searchObj.run().getRange({start: 0, end: 1000});
            const lenData = searchData.length;
            let objDataLoc = {};
            for (let i = 0; i < lenData; i++) {
                const loc_addrcode = searchData[i].getValue({name: 'custrecord_scv_loc_addrcode'});
                const internalId = searchData[i].getValue({name: 'internalid'});
                objDataLoc[internalId] = {loc_addrcode : loc_addrcode};
            }
            return objDataLoc;
        }

        function changeCurrency(number) {
            let parts = number.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        }

        return {onRequest}

    });
