/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define([
        'N/render', 'N/search', 'N/record', 'N/query', 'N/config', '../lib/scv_lib_pdf.js', 'N/format', 'N/url', 'N/https',
        '../lib/scv_lib_function.js',
        '../lib/scv_lib_amount_in_word.js', 'N/file',
        "../cons/scv_cons_search_gl_impact.js",
        "../cons/scv_cons_search_gl_thuchi.js",
    ],
    (
        render, search, record, query, config, libPdf, format, url, https, lbf, libAmt, file, cSearchGlImpact,
        cSearchGlThuChi,
    ) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */

        const renderRecordToPdfWithTemplate = (id, type, printfile) => {
            try {
                if(!printfile) throw "Chưa có setup file xml!";
                let renderer = libPdf.renderTemplateWithXml(printfile);
                let rec = addDefaultRecordRender(renderer, type, id);
                log.error('printfile', printfile)
                switch (printfile) {
                    case "scv_phieu_chi":
                        printPhieuChi(rec, renderer);
                        break;
                    case "scv_phieu_thu":
                        printPhieuThu(rec, renderer);
                        break;
                    case "scv_don_dat_hang":
                        printDonDatHang(rec, renderer);
                        break;
                    case 'scv_pnh_di_duong': //phiếu nhập hàng đi đươờng
                        printPhieuNhapHangDiDuong(rec, renderer, printfile);
                        break;
                    case "scv_bbgn":
                    case "scv_bbgn_hnt"://hàng nghiện thuốc
                    case "scv_bbgn_hnnl"://hàng nghiện nguyên liệu
                    case "scv_bbgn_hnnb"://hàng nghiện nội bộ
                    case "scv_bbgn_acr_avo"://ACRIPTEGA+AVONZA
                    case "scv_bbgn_arv"://hàng nghiện nội bộ
                    case "scv_bbgn_hkg"://hàng nghiện nội bộ
                    case "scv_bbgn_nd"://nghị định 54
                    case "scv_bbgn_nthh"://nghiệm thu hàng hóa
                        printBBGN(rec, renderer, printfile);
                        break;
                    case "scv_phieu_hoach_toan":
                        printPhieuHoachToan(rec, renderer, printfile)
                        break
                    case 'scv_ycnk':
                    case 'scv_ycnk_htl':
                        printYCNK(rec, renderer, printfile)
                        break;
                    case 'scv_pnk':
                    case 'scv_pnk_hct'://hàng chường trình
                        printPNK(rec, renderer, printfile)
                        break;
                    case 'scv_pxk_cogia':
                    case 'scv_pxk_kogia':
                    case 'scv_pxk_hgn_nd'://hàng gây nghiện nghị định 54
                        printPXK(rec, renderer, printfile)
                        break;
                }
                let pdfFile = renderer.renderAsPdf();
                return pdfFile;
            } catch (error) {
                log.error('error - renderRecordToPdfWithTemplate', error)
            }
        }
        const printPXK = (rec, renderer, printfile) => {
            const mapDataByCreatedFrom = (params) => {
                let arrSL = [];
                let sl = 'item';
                let crtFromId = params.rec.getValue('createdfrom');
                if(!crtFromId) return;
                let tranRec = record.load({type: lbf.getTranRecordType(crtFromId), id: crtFromId});
                for(let i = 0; i < tranRec.getLineCount(sl); i++){
                    let obj = {};
                    obj.ori_lineid = tranRec.getSublistValue(sl, 'custcol_scv_ori_lineid', i);
                    obj.taxrate1 = tranRec.getSublistValue(sl, 'taxrate1', i) * 1;
                    obj.rate = tranRec.getSublistValue(sl, 'rate', i) * 1;
                    arrSL.push(obj);
                };
                params.result.forEach(obj =>{
                    let objSL = arrSL.find(e => e.ori_lineid == obj.ori_lineid);
                    if(!objSL) return;
                    obj.taxrate1 = objSL.taxrate1;
                    obj.rate = objSL.rate;
                    return obj;
                });
            }
            let configLogo = '';
            let buId = rec.getValue('cseg_scv_bu_center');
            if(buId){
                configLogo = libPdf.createImageByBUCenter(buId, 80);
            }
            let entity = {};
            let entityId = rec.getValue('entity');
            if(entityId){
                let objEntity = getObjTableQuery(lbf.getEntityType(entityId),
                    ['custentity_scv_legal_name', 'companyname', 'custentity_scv_entity_code', 'BUILTIN.DF(defaultbillingaddress) as defaultaddress',
                        'custentity_scv_tax_number'], `id = ${entityId}`)[0];
                entity = libPdf.formatDataXMLWithObject(objEntity);
            }
            let sl = 'item';
            let arrSL = [];
            for(let i = 0; i < rec.getLineCount(sl); i++){
                let obj = {};
                obj.upccode = '';
                obj.displayname = '';
                obj.loc_addrcode = '';
                obj.unitsdisplay = rec.getSublistValue(sl, 'unitsdisplay', i);
                obj.quantity = rec.getSublistValue(sl, 'quantity', i) * 1;
                obj.rate = 0;
                obj.custcol_scv_discount_per = rec.getSublistValue(sl, 'custcol_scv_discount_per', i) * 1;
                obj.amt = 0;
                obj.taxrate1 = 0;
                obj.itemId = rec.getSublistValue(sl, 'item', i);
                obj.locationId = rec.getSublistValue(sl, 'location', i);
                obj.ori_lineid = rec.getSublistValue(sl, 'custcol_scv_ori_lineid', i);
                let objInvDet = {};
                if(printfile == 'scv_pxk_hgn_nd') objInvDet = getDataSubRecInvDet(rec, sl, i, ['issueinventorynumber', 'expirationdate']);
                let objRes = {...objInvDet, ...obj};
                arrSL.push(objRes);
            }
            let location = {};
            let ttl_amt = 0, ttl_amt_vat = 0, ttl = 0;
            if(arrSL.length > 0){
                if(printfile == 'scv_pxk_cogia') mapDataByCreatedFrom({rec, result: arrSL})
                let objIds = arrSL.reduce((acc, obj) => {
                    acc.arrItemId.push(obj.itemId);
                    acc.arrLocationId.push(obj.locationId);
                    return acc;
                }, { arrItemId: [], arrLocationId: [] });
                let arrItemId = objIds.arrItemId;
                let arrItem = getObjTableQuery('item', ['id', 'upccode', 'displayname', 'BUILTIN.DF(custitem_scv_nhasx) as custitem_scv_nhasx',
                    'BUILTIN.DF(custitem_scv_nuoc_sx) as custitem_scv_nuoc_sx'], `id in (${arrItemId.join(',')})`);
                let arrLocationId = objIds.arrLocationId;
                let arrLocation = getObjTableQuery('location', ['id', 'custrecord_scv_loc_addrcode', 'custrecord_scv_loc_addrname'], `id in (${arrLocationId.join(',')})`);
                arrLocation.forEach(obj => libPdf.formatDataXMLWithObject(obj));
                location = arrLocation[0];
                arrSL.forEach((obj, i) => {
                    obj.stt = i + 1;
                    let objItem = arrItem.find(e => e.id == obj.itemId);
                    obj.upccode = objItem.upccode;
                    obj.displayname = objItem.displayname;
                    obj.custitem_scv_nhasx = objItem.custitem_scv_nhasx;
                    obj.custitem_scv_nuoc_sx = objItem.custitem_scv_nuoc_sx;
                    let objLocation = arrLocation.find(e => e.id == obj.locationId);
                    obj.loc_addrcode = objLocation.custrecord_scv_loc_addrcode;
                    let amt = obj.quantity * obj.rate;
                    let taxrate1 = obj.taxrate1 * 1;
                    let amt_vat = amt * taxrate1/100;
                    ttl_amt += amt;
                    ttl_amt_vat += amt_vat;
                    ttl += amt + amt_vat;
                    obj.amt = libPdf.formatNumber(amt);
                    obj.quantity = libPdf.formatNumber(obj.quantity);
                    obj.rate = libPdf.formatNumber(obj.rate);
                    return libPdf.formatDataXMLWithObject(obj);
                })
            }
            let ttl_docTien = libAmt.DocTienBangChu(ttl, 'VND')?.replace(' chẵn./', '');
            let objTtl = libPdf.formatNumberWithObject({ttl_amt, ttl_amt_vat, ttl});
            renderer.addCustomDataSource({
                format: render.DataSource.OBJECT,
                alias: "jsonData",
                data: {
                    configLogo, entity, location, arrSL,
                    ...objTtl, ttl_docTien
                }
            });
        }
        const printPNK = (rec, renderer, printfile) => {
            const mapDataByCreatedFrom = (params) => {
                let arrSL = [];
                let sl = 'item';
                let crtFromId = params.rec.getValue('createdfrom');
                if(!crtFromId) return;
                let tranRec = record.load({type: lbf.getTranRecordType(crtFromId), id: crtFromId});
                for(let i = 0; i < tranRec.getLineCount(sl); i++){
                    let obj = {};
                    obj.ori_lineid = tranRec.getSublistValue(sl, 'custcol_scv_ori_lineid', i);
                    obj.rate = tranRec.getSublistValue(sl, 'rate', i);
                    obj.tax1amt = tranRec.getSublistValue(sl, 'tax1amt', i);
                    obj.taxrate1 = tranRec.getSublistText(sl, 'taxrate1', i)?.replace(',0', '');
                    arrSL.push(obj);
                }
                params.result.forEach(obj =>{
                    let objSL = arrSL.find(e => e.ori_lineid == obj.ori_lineid);
                    if(!objSL) return;
                    obj.rate = objSL.rate;
                    obj.taxrate1 = objSL.taxrate1;
                    obj.tax1amt = objSL.tax1amt;
                    return obj;
                })
            }
            let configLogo = '';
            let buId = rec.getValue('cseg_scv_bu_center');
            if(buId){
                configLogo = libPdf.createImageByBUCenter(buId, 80);
            }
            let sl = 'item';
            let ttl_amt = 0, ttl_tax1amt = 0, ttl_impTax = 0, ttl = 0;
            let exchangerate = rec.getValue('exchangerate') * 1;
            let arrSL = [];
            for(let i = 0; i < rec.getLineCount(sl); i++){
                let obj = {};
                obj.itemId = rec.getSublistValue(sl, 'item', i);
                obj.ori_lineid = rec.getSublistValue(sl, 'custcol_scv_ori_lineid', i);
                obj.description = rec.getSublistValue(sl, 'description', i);
                obj.units = rec.getSublistText(sl, 'unitsdisplay', i);
                obj.quantity = rec.getSublistValue(sl, 'quantity', i) * 1;
                obj.rate = 0;
                obj.amt = 0;
                obj.tax1amt = 0;
                obj.taxrate1 = 0;
                obj.imp_tax = 0;
                obj.rate_vnd = 0;
                let objInvDet = getDataSubRecInvDet(rec, sl, i, ['expirationdate', 'binnumber', 'receiptinventorynumber']);
                let objRes = {...objInvDet, ...obj};
                arrSL.push(objRes);
            }
            if(arrSL.length > 0){
                mapDataByCreatedFrom({rec, result: arrSL});
                let arrSS_impTax = [];
                if(printfile == 'scv_pnk'){
                    arrSS_impTax = getDataSS_impTax();
                }
                let arrItemId = arrSL.reduce((arr, obj) => [...arr, obj.itemId], []);
                let arrItem = getObjTableQuery('item', ['id', 'upccode'], `id in (${arrItemId.join(',')})`);
                arrSL.forEach((obj, i) => {
                    let objItem = arrItem.find(e => e.id == obj.itemId);
                    obj.upccode = objItem.upccode;
                    let objSS = arrSS_impTax.find(e => e.ori_lineid == obj.ori_lineid);
                    let imp_tax = objSS?.imp_tax;
                    if(imp_tax){
                        obj.imp_tax = imp_tax;
                        ttl_impTax += imp_tax;
                    }
                    obj.stt = i + 1;
                    obj.amt = obj.quantity * obj.rate;
                    obj.rate_vnd = exchangerate * obj.rate;
                    ttl_amt += obj.amt;
                    ttl_tax1amt += obj.tax1amt;
                    obj = libPdf.formatDataXMLWithObject(obj);
                    return obj;
                })
            }
            ttl = ttl_amt + ttl_tax1amt + ttl_impTax;
            let ttl_docTien = libAmt.DocTienBangChu(ttl, 'VND')?.replace(" chẵn./", "");
            let tongThanhToan = exchangerate * ttl_amt;
            let tongThanhToan_docTien = libAmt.DocTienBangChu(tongThanhToan, 'VND')?.replace(" chẵn./", "");
            let entity = {};
            let entityId = rec.getValue('entity');
            if(entityId){
                let objEntity = getObjTableQuery(lbf.getEntityType(entityId), ['custentity_scv_legal_name'], `id = ${entityId}`)[0];
                entity = libPdf.formatDataXMLWithObject(objEntity);
            }
            let createdfrom = {};
            let crtFromId = rec.getValue('createdfrom');
            if(crtFromId){
                let objTran = getObjTableQuery('transaction', ['custbody_scv_login_emp'], `id = ${crtFromId}`)[0];
                let entityId = objTran.custbody_scv_login_emp;
                if(entityId){
                    let objEntity = getObjTableQuery(lbf.getEntityType(entityId), ['custentity_scv_legal_name'], `id = ${entityId}`)[0];
                    custbody_scv_login_emp = libPdf.formatDataXMLWithObject(objEntity);
                    createdfrom.custbody_scv_login_emp = custbody_scv_login_emp;
                }
            }
            renderer.addCustomDataSource({
                format: render.DataSource.OBJECT,
                alias: "jsonData",
                data: {
                    configLogo, arrSL, ttl_amt, ttl_tax1amt, ttl_impTax, ttl,
                    ttl_docTien, exchangerate, tongThanhToan, tongThanhToan_docTien,
                    entity, createdfrom
                }
            });
        }
        const getDataSubRecInvDet = (rec, sl, line, fields) => {
            let objRes = {};
            let slInvDetail = 'inventoryassignment';
            fields.forEach(field => objRes[field] = '');
            let invDetAvailable = rec.getSublistValue({ sublistId: sl, fieldId: 'inventorydetailavail', line: line});
            if(invDetAvailable != 'F'){
                let invDetailRec = rec.getSublistSubrecord({ sublistId: sl, fieldId: 'inventorydetail', line: line});
                for(let j = 0; j < invDetailRec.getLineCount({sublistId: slInvDetail}); j++){
                    fields.forEach(field => {
                        let vla = invDetailRec.getSublistText({sublistId: slInvDetail, fieldId: field, line: j}) || invDetailRec.getSublistValue({sublistId: slInvDetail, fieldId: field, line: j});
                        if(vla){
                            if(objRes[field]) objRes[field] += '; <br/>';
                            objRes[field] += vla;
                        }
                    });
                }
            }
            return objRes
        }
        const printYCNK = (rec, renderer, printfile) => {
            const mapDataByCreatedFrom = (result) => {
                if(!['scv_ycnk'].includes(printfile)) return;
                let arrSL = [];
                let sl = 'item';
                let createdfrom = rec.getValue('custbody_scv_created_transaction');
                if(!createdfrom) return;
                let tranRec = record.load({type: lbf.getTranRecordType(createdfrom), id: createdfrom});
                for(let i = 0; i < tranRec.getLineCount(sl); i++){
                    let obj = {};
                    obj.ori_lineid = tranRec.getSublistValue(sl, 'custcol_scv_ori_lineid', i);
                    obj.expectedreceiptdate = tranRec.getSublistText(sl, 'expectedreceiptdate', i);
                    obj.rate = tranRec.getSublistValue(sl, 'rate', i);
                    obj.tax1amt = tranRec.getSublistValue(sl, 'tax1amt', i);
                    arrSL.push(obj);
                };
                result.forEach((obj, index) => {
                    let objSL = arrSL.find(e => e.ori_lineid == obj.ori_lineid);
                    if(!objSL) return;
                    result[index] = { ...obj, ...objSL };
                });
            }
            const mapDataByIvtDtl = (arrInput) => {//tách theo inventorydetail
                if(!['scv_ycnk_htl'].includes(printfile)) return arrInput;
                let arrSL = [];
                let sl = 'item', slInvDetail = 'inventoryassignment';
                let createdfrom = rec.getValue('custbody_scv_created_transaction');
                if(!createdfrom) return arrInput;
                let tranRec = record.load({type: lbf.getTranRecordType(createdfrom), id: createdfrom});
                for(let i = 0; i < tranRec.getLineCount(sl); i++){
                    let ori_lineid = tranRec.getSublistValue(sl, 'custcol_scv_ori_lineid', i);
                    let invDetAvailable = tranRec.getSublistValue({ sublistId: sl, fieldId: 'inventorydetailavail', line: i});
                    if(invDetAvailable != 'F'){
                        let invDetailRec = tranRec.getSublistSubrecord({ sublistId: sl, fieldId: 'inventorydetail', line: i});
                        for(let j = 0; j < invDetailRec.getLineCount({sublistId: slInvDetail}); j++){
                            let obj = {};
                            obj.ori_lineid = ori_lineid;
                            obj.receiptinventorynumber = invDetailRec.getSublistText({sublistId: slInvDetail, fieldId: 'receiptinventorynumber', line: j});
                            obj.expirationdate = invDetailRec.getSublistText({sublistId: slInvDetail, fieldId: 'expirationdate', line: j});
                            obj.quantity = invDetailRec.getSublistValue({sublistId: slInvDetail, fieldId: 'quantity', line: j}) * 1;
                            arrSL.push(obj);
                        }
                    }
                };
                arrSL.forEach((obj, index) => {
                    let objRes = arrInput.find(e => e.ori_lineid == obj.ori_lineid);
                    if(!objRes) return;
                    arrSL[index] = { ...obj, ...objRes };
                });
                return arrSL;
            }
            let configLogo = '';
            let buId = rec.getValue('cseg_scv_bu_center');
            if(buId){
                let logoSize = printfile == 'scv_ycnk' ? 80 : 40;
                configLogo = libPdf.createImageByBUCenter(buId, logoSize);
            }
            let crtTranId = rec.getValue('custbody_scv_created_transaction');
            let crtFr_entity_lgName = '';
            if(crtTranId){
                let objTran = getObjTableQuery('transaction', ['entity'], `id = ${crtTranId}`)[0];
                let entityId = objTran.entity;
                if(entityId){
                    let objEntity = getObjTableQuery(lbf.getEntityType(entityId), ['custentity_scv_legal_name'], `id = ${entityId}`)[0];
                    crtFr_entity_lgName = objEntity.custentity_scv_legal_name;
                }
            }
            let sl = 'item';
            let ttl_amt = 0, ttl_tax1amt = 0, ttl = 0
            let arrSL = [];
            for(let i = 0; i < rec.getLineCount(sl); i++){
                let obj = {};
                obj.description = rec.getSublistValue(sl, 'description', i);
                obj.itemId = rec.getSublistValue(sl, 'item', i);
                obj.units = rec.getSublistText(sl, 'units', i);
                obj.custcol_scv_custom_qty_l = rec.getSublistValue(sl, 'custcol_scv_custom_qty_l', i) * 1;
                obj.ori_lineid = rec.getSublistValue(sl, 'custcol_scv_ori_lineid', i);
                obj.memo = rec.getSublistValue(sl, 'custcol_scv_custom_memo_l', i);
                obj.rate = 0;
                obj.tax1amt = 0;
                obj.amt = 0;
                arrSL.push(obj);
            }
            if(arrSL.length > 0){
                mapDataByCreatedFrom(arrSL);
                arrSL = mapDataByIvtDtl(arrSL);
                let arrItemId = arrSL.reduce((arr, obj) => [...arr, obj.itemId], []);
                let arrItem = getObjTableQuery('item', ['id', 'upccode'], `id in (${arrItemId.join(',')})`);
                arrSL.forEach((obj, i) => {
                    let objItem = arrItem.find(e => e.id == obj.itemId);
                    obj.upccode = objItem.upccode;
                    obj.stt = i + 1;
                    obj.amt = obj.custcol_scv_custom_qty_l * obj.rate;
                    ttl_amt += obj.amt;
                    ttl_tax1amt += obj.tax1amt;
                    obj = libPdf.formatDataXMLWithObject(obj);
                    return obj;
                })
            }
            ttl = ttl_tax1amt + ttl_amt;
            let objData = libPdf.formatDataXMLWithObject({
                crtFr_entity_lgName
            })
            renderer.addCustomDataSource({
                format: render.DataSource.OBJECT,
                alias: "jsonData",
                data: {
                    configLogo,
                    ...objData, arrSL,
                    ttl, ttl_tax1amt, ttl_amt
                }
            });
        }
        const printPhieuHoachToan = (rec, renderer, templateId) => {
            let slURL = url.resolveScript({
                scriptId: 'customscript_scv_sl_call_data',
                deploymentId: 'customdeploy_scv_sl_call_data',
                returnExternalUrl: true
            });
            let objRes = https.post({
                url: slURL,
                body: {templateId, recId: rec.id, recType: rec.type}
            });
            let objData = JSON.parse(objRes.body).data;
            let configLogo = '';
            let locationId = rec.getValue('location') || rec.getValue('adjlocation') || rec.getValue('custbody_scv_for_location');
            if(locationId){
                configLogo = libPdf.createImageByLocation(locationId, 40);
            }
            renderer.addCustomDataSource({
                format: render.DataSource.OBJECT,
                alias: "jsonData",
                data: {
                    configLogo,
                    ...objData
                }
            });
        }
        const printBBGN = (rec, renderer, printfile) => {
            const mapDataByCreatedFrom = (params) => {
                if(!['scv_bbgn_nthh', 'scv_bbgn_arv'].includes(params.printfile)) return;
                let arrSL = [];
                let sl = 'item';
                let createdfrom = params.rec.getValue('createdfrom');
                if(!createdfrom) return;
                let tranRec = record.load({type: lbf.getTranRecordType(createdfrom), id: createdfrom});
                for(let i = 0; i < tranRec.getLineCount(sl); i++){
                    let obj = {};
                    obj.ori_lineid = tranRec.getSublistValue(sl, 'custcol_scv_ori_lineid', i);
                    obj.ratevat_sau_dc = tranRec.getSublistValue(sl, 'custcol_scv_ratevat_sau_dc', i) * 1;
                    arrSL.push(obj)
                }
                params.result.forEach(obj =>{
                    ratevat_sau_dc = arrSL.find(e => e.ori_lineid == obj.ori_lineid)?.ratevat_sau_dc || 0;
                    obj.ratevat_sau_dc = ratevat_sau_dc;
                    obj.amt = ratevat_sau_dc * obj.quantity;
                    return obj;
                })
            }
            const getTongSoKien = (params) => {
                if(!params.ycvcId) return;
                if(!['scv_bbgn_hnt', 'scv_bbgn_hnnl', 'scv_bbgn_hnnb'].includes(params.printfile)) return;
                let ttlSoKien = 0;
                let sl = 'item';
                let arrOriLineId = params.arrSL.reduce((arr, obj) => [...arr, obj.ori_lineid], []);
                let srRec = record.load({type: 'customsale_scv_shipment_request', id: params.ycvcId});
                for(let i = 0; i < srRec.getLineCount(sl); i++){
                    let ori_lineid = srRec.getSublistValue(sl, 'custcol_scv_ori_lineid', i);
                    if(arrOriLineId.includes(ori_lineid)){
                        ttlSoKien += srRec.getSublistValue(sl, 'custcol_scv_qty_vc_qd', i) * 1;
                    }
                }
                return ttlSoKien;
            }
            const mapDataBySS_bbgnLegalFile = (params) => {
                if(['scv_bbgn_nthh', 'scv_bbgn'].includes(params.printfile)) return;
                let arrSS_bbgnLegalFile = getDataSS_bbgnLegalFile(params.arrItemId);
                if(arrSS_bbgnLegalFile.length == 0) return;
                params.result.forEach(obj => {
                    let legalfile_code = '';
                    let arrSS_ft = arrSS_bbgnLegalFile.filter(objSS => {
                        if(objSS.itemId !== obj.itemId) return;
                        if(!objSS.endDate) return objSS;
                        else{
                            let startDate = 0;
                            if(objSS.startDate) startDate = format.parse({value: objSS.startDate, type: 'date'}).getTime();
                            let curDate = new Date().getTime();
                            let endDate = format.parse({value: objSS.endDate, type: 'date'}).getTime();
                            if(endDate > curDate && curDate > startDate) return objSS;
                        }
                    });
                    arrSS_ft.forEach(obj => {
                        if(obj.legalfile_code){
                            if(legalfile_code) legalfile_code += '; <br/>';
                            legalfile_code += obj.legalfile_code;
                        }
                    });
                    obj.legalfile_code = legalfile_code;
                    return obj;
                })
            }
            let biz_center_id = rec.getValue('cseg_scv_bu_center');
            let configLogo = libPdf.createImageByBUCenter(biz_center_id, 80);
            let sl = 'item';
            let arrSL = [], arrDetail = [], arrLocation = [];
            let ttlSoKien = 0, ttlAmt = 0, ttl_qty = 0;
            for(let i = 0; i < rec.getLineCount(sl); i++){
                let obj = {};
                obj.itemId = rec.getSublistValue(sl, 'item', i);
                obj.units = rec.getSublistValue(sl, 'unitsdisplay', i);
                obj.quantity = rec.getSublistValue(sl, 'quantity', i) * 1;
                obj.location = rec.getSublistValue(sl, 'location', i);
                obj.description = rec.getSublistValue(sl, 'description', i);
                obj.ori_lineid = rec.getSublistValue(sl, 'custcol_scv_ori_lineid', i);
                obj.legalfile_code = '';
                let objInvDet = getDataSubRecInvDet(rec, sl, i, ['issueinventorynumber', 'expirationdate', 'binnumber']);
                let objRes = {...objInvDet, ...obj};
                arrSL.push(objRes);
            }
            let ycvcId = rec.getValue('custbody_scv_ycvc');
            let lgNameEmp = '';
            if(ycvcId){
                let objEmp = getObjTableQuery(`transaction t, employee e`, ['e.custentity_scv_legal_name'], `t.id = ${ycvcId} and t.custbody_scv_pic_of_charge = e.id`)[0] || {};
                objEmp = libPdf.formatDataXMLWithObject(objEmp);
                lgNameEmp = objEmp?.custentity_scv_legal_name;
            }
            let scId = rec.getValue('custbody_scv_salescontract');
            let custbody_scv_salescontract = {};
            let so_ngay_phuLuc = '';
            if(scId){
                custbody_scv_salescontract = getObjTableQuery('transaction', ['entity as entity_id', 'cseg_scv_bu_center as bu_id'], `id = ${scId}`)[0];
                if(custbody_scv_salescontract.entity_id){
                    let objEntity = getObjTableQuery(lbf.getEntityType(custbody_scv_salescontract.entity_id),
                        ['custentity_scv_legal_name'], `id = ${custbody_scv_salescontract.entity_id}`)[0];
                    custbody_scv_salescontract.entity = libPdf.formatDataXMLWithObject(objEntity);
                }
                if(custbody_scv_salescontract.bu_id){
                    let objBU = getObjTableQuery('customrecord_cseg_scv_bu_center', ['custrecord_scv_bu_legal_name'], `id = ${custbody_scv_salescontract.bu_id}`)[0];
                    custbody_scv_salescontract.cseg_scv_bu_center = libPdf.formatDataXMLWithObject(objBU);
                }
                if(printfile == "scv_bbgn_acr_avo"){
                    let arrSS_bbgnPhuLuc = getDataSS_bbgnPhuLuc(scId);
                    arrSS_bbgnPhuLuc.forEach(obj => {
                        so_ngay_phuLuc += `Phụ lục hợp đồng số ${obj.plhd} ngày ${obj.ngay_plhd}; `;
                    })
                };
            }
            let entityId = rec.getValue('entity');
            let entity = {};
            if(entityId){
                entity = getObjTableQuery(lbf.getEntityType(entityId),
                    ['custentity_scv_legal_name', 'BUILTIN.DF(defaultbillingaddress) as defaultaddress'],
                    `id = ${entityId}`)[0];
                entity = libPdf.formatDataXMLWithObject(entity);
            }
            let so_buyer_id = rec.getValue('custbody_scv_so_buyer');
            let custbody_scv_so_buyer = {}
            if(so_buyer_id){
                custbody_scv_so_buyer = getObjTableQuery(lbf.getEntityType(so_buyer_id),
                    ['custentity_scv_legal_name', 'BUILTIN.DF(defaultbillingaddress) as defaultaddress'],
                    `id = ${so_buyer_id}`)[0];
                custbody_scv_so_buyer = libPdf.formatDataXMLWithObject(custbody_scv_so_buyer);
            }
            if(arrSL.length > 0){
                mapDataByCreatedFrom({rec, printfile, result: arrSL});
                ttlSoKien = getTongSoKien({ycvcId, printfile, arrSL});
                let arrLocationId = arrSL.reduce((arr, obj) => [...arr, obj.location], []);
                let arrItemId = arrSL.reduce((arr, obj) => [...arr, obj.itemId], []);
                mapDataBySS_bbgnLegalFile({rec, printfile, arrItemId, result: arrSL});
                let arrItem = getObjTableQuery('item', [
                    'id', 'upccode', 'BUILTIN.DF(custitem_scv_nhasx) as custitem_scv_nhasx', 'BUILTIN.DF(custitem_scv_nuoc_sx) as custitem_scv_nuoc_sx',
                    'custitem_scv_tuoi_tho','custitem_scv_quy_cach_dong_goi'], `id in (${arrItemId.join(',')})`);
                arrLocation = getObjTableQuery('location', ['custrecord_scv_loc_ten_kho', 'custrecord_scv_loc_addrname'], `id in (${arrLocationId.join(',')})`);
                arrLocation.forEach(obj => libPdf.formatDataXMLWithObject(obj));
                arrSL.forEach((obj, index) => {
                    if(obj.amt) ttlAmt += obj.amt;
                    if(obj.quantity) ttl_qty += obj.quantity;
                    let objItem = arrItem.find(e => e.id == obj.itemId);
                    let objData = {
                        stt: index + 1,
                        ...obj, ...objItem
                    }
                    objData = libPdf.formatDataXMLWithObject(objData);
                    arrDetail.push(objData);
                })
            }
            let ttlAmt_docTien = libAmt.DocTienBangChu(ttlAmt, 'VND')?.replace(" chẵn./", "");
            renderer.addCustomDataSource({
                format: render.DataSource.OBJECT,
                alias: "jsonData",
                data: {
                    configLogo, custbody_scv_salescontract,
                    custbody_scv_so_buyer, entity,
                    arrLocation, arrDetail,
                    lgNameEmp, so_ngay_phuLuc,
                    ttlSoKien, ttlAmt, ttl_qty,
                    ttlAmt_docTien
                }
            });
        }
        const getDataSS_impTax = () => {
            let result = [];
            let resultSearch = search.load('customsearch_scv_p2p_print_imp_tax');
            let myColumns = resultSearch.columns;
            let myFilters = resultSearch.filters;
            resultSearch = resultSearch.runPaged({pageSize:1000});
            for(let i = 0; i < resultSearch.pageRanges.length; i++){
                let currentPage = resultSearch.fetch({index : i}).data;
                for(let j = 0; j < currentPage.length; j++){
                    let obj = {};
                    obj.ori_lineid = currentPage[j].getValue(myColumns[3]);
                    obj.imp_tax = currentPage[j].getValue(myColumns[5]) * 1;
                    result.push(obj);
                }
            }
            return result;
        }
        const getDataSS_bbgnLegalFile = (arrItemId) => {
            let result = [];
            let resultSearch = search.load('customsearch_scv_bbgn_legal_file');
            let myColumns = resultSearch.columns;
            let myFilters = resultSearch.filters;
            myFilters.push(search.createFilter({
                name: 'custrecord_scv_legalfile_item',
                operator: 'anyof',
                values: arrItemId
            }));
            resultSearch = resultSearch.runPaged({pageSize:1000});
            for(let i = 0; i < resultSearch.pageRanges.length; i++){
                let currentPage = resultSearch.fetch({index : i}).data;
                for(let j = 0; j < currentPage.length; j++){
                    let obj = {};
                    obj.startDate = currentPage[j].getValue(myColumns[0]);
                    obj.endDate = currentPage[j].getValue(myColumns[1]);
                    obj.itemId = currentPage[j].getValue(myColumns[3]);
                    obj.legalfile_code = currentPage[j].getValue(myColumns[4]);
                    result.push(obj);
                }
            }
            return result;
        }
        const getDataSS_bbgnPhuLuc = (scId) => {
            if(!scId) return [];
            let result = [];
            let resultSearch = search.load('customsearch_scv_bbgn_phuluc');
            let myColumns = resultSearch.columns;
            let myFilters = resultSearch.filters;
            myFilters.push(search.createFilter({
                name: 'custrecord_scv_adj_sc_doc_num',
                operator: 'anyof',
                values: scId
            }));
            resultSearch = resultSearch.runPaged({pageSize:1000});
            for(let i = 0; i < resultSearch.pageRanges.length; i++){
                let currentPage = resultSearch.fetch({index : i}).data;
                for(let j = 0; j < currentPage.length; j++){
                    let obj = {};
                    obj.scId = currentPage[j].getValue(myColumns[1]);
                    obj.plhd = currentPage[j].getValue(myColumns[5]);
                    obj.ngay_plhd = currentPage[j].getValue(myColumns[6]);
                    result.push(obj);
                }
            }
            return result;
        }
        const printPhieuThu = (rec, renderer) => {
            let biz_center_id = rec.getValue('cseg_scv_bu_center');
            let subsidiary_id = rec.getValue('cseg_scv_subsidiary');
            let entity_id = rec.getValue('entity');
            let objEntity = {}, entity_type = '';
            if(entity_id) {
                entity_type = lbf.getEntityType(entity_id);
            }

            let objBizCenter = getObjBusinessCenter(biz_center_id);
            let objSubsidiary = getObjTableQueryByID('customrecord_cseg_scv_subsidiary', ['custrecord_scv_sub_legal_name'], subsidiary_id);
            let optImage = { clientWidth: objBizCenter.clientWidth, clientHeight: objBizCenter.clientHeight, expectedWidth: 35 };

            let objGlThuChi = search.createFilter({
                name: "internalid",
                operator: "anyof",
                values: rec.id
            });
            let arrGlThuChi = cSearchGlThuChi.getDataSource(objGlThuChi);
            let total = arrGlThuChi.reduce((a, b) => a + b.amount, 0);
            let account_main = arrGlThuChi[0]?.account_main || '';
            if(entity_type == 'vendor') {
                objEntity = getObjTableQueryByID(entity_type, ['custentity_scv_legal_name'], entity_id);
            }
            let objResult = {
                arrGlThuChi: formatNumberWithArray(arrGlThuChi),
                total: libPdf.formatNumber(total),
                amtInWords: libAmt.DocTienBangChu(total, 'VND'),
                objBizCenter: objBizCenter,
                objSubsidiary: libPdf.formatDataXMLWithObject(objSubsidiary),
                objEntity: objEntity,
                urlLogo: libPdf.createImageByFileId(objBizCenter.logoId, optImage),
                account_main: account_main
            };
            renderer.addCustomDataSource({
                format: render.DataSource.OBJECT,
                alias: "jsonData",
                data: objResult
            });
        }

        const printPhieuChi = (rec, renderer) => {
            let biz_center_id = rec.getValue('cseg_scv_bu_center');
            let subsidiary_id = rec.getValue('cseg_scv_subsidiary');
            let entity_id = rec.getValue('entity');
            let objEntity = {}, entity_type = '';
            if(entity_id) {
                entity_type = lbf.getEntityType(entity_id);
            }

            let objBizCenter = getObjBusinessCenter(biz_center_id);
            let objSubsidiary = getObjTableQueryByID('customrecord_cseg_scv_subsidiary', ['custrecord_scv_sub_legal_name'], subsidiary_id);
            let optImage = { clientWidth: objBizCenter.clientWidth, clientHeight: objBizCenter.clientHeight, expectedWidth: 35 };

            let objGlThuChi = search.createFilter({
                name: "internalid",
                operator: "anyof",
                values: rec.id
            });
            let arrGlThuChi = cSearchGlThuChi.getDataSource(objGlThuChi);
            let total = arrGlThuChi.reduce((a, b) => a + b.amount, 0);
            let account_main = arrGlThuChi[0]?.account_main || '';
            if(entity_type == 'vendor') {
                objEntity = getObjTableQueryByID(entity_type, ['custentity_scv_legal_name'], entity_id);
            }
            let objResult = {
                arrGlThuChi: formatNumberWithArray(arrGlThuChi),
                total: libPdf.formatNumber(total),
                amtInWords: libAmt.DocTienBangChu(total, 'VND'),
                objBizCenter: objBizCenter,
                objSubsidiary: libPdf.formatDataXMLWithObject(objSubsidiary),
                objEntity: objEntity,
                urlLogo: libPdf.createImageByFileId(objBizCenter.logoId, optImage),
                account_main: account_main
            };
            renderer.addCustomDataSource({
                format: render.DataSource.OBJECT,
                alias: "jsonData",
                data: objResult
            });
        }
        const printDonDatHang = (rec, renderer, templateId) => {
            let  entity = rec.getValue('entity');
            let entity_type = '';
            if(entity){
                entity_type = lbf.getEntityType(entity);
            }
        }
        const printPhieuNhapHangDiDuong = (rec, renderer, printfile) => {
            let inb_cus_exr = rec.getValue('custrecord_scv_inb_cus_exr') || 0;
            let inb_invoice_number = rec.getValue('custrecord_scv_inb_invoice_number');
            let shipmentnumber = rec.getValue('shipmentnumber');
            let inb_sub = rec.getValue('custrecord_scv_inb_sub');
            let inb_bus = rec.getValue('custrecord_scv_inb_bus');
            let inb_actual_emp = rec.getText('custrecord_scv_inb_actual_emp');
            let bu_legal_name , configLogo = '';
            if(inb_bus){
                var lkE = search.lookupFields({
                    type:'customrecord_cseg_scv_bu_center',
                    id: inb_bus,
                    columns: ['custrecord_scv_bu_legal_name']
                });
                bu_legal_name = lkE.custrecord_scv_bu_legal_name;
                configLogo = libPdf.createImageByBUCenter(inb_bus, 80);
            }
            let inb_tax_total = rec.getValue('custrecord_scv_inb_tax_total');
            let arrSL = [];
            let sl = 'items',purchaseorder_text = '', total_vnd = 0, total_tienthue_nk = 0,total = 0,tranid, pay_method, cus_term, currency, povendor, transactionnumber; // Khởi tạo giá trị ban đầu cho total_vnd và total_tienthue_nk
            let lineCnt = rec.getLineCount({ sublistId: sl });
            for(let i = 0; i < lineCnt; i++){
                let obj = {};
                obj.stt = i + 1
                let itemid = rec.getSublistValue(sl, 'itemid', i);
                if (itemid) {
                    let lsxLuf = search.lookupFields({
                        type: lbf.getItemRecordType(itemid),
                        id: itemid,
                        columns: ["upccode", 'purchasedescription']
                    });
                    obj.upccode =  lsxLuf.upccode;
                    obj.purchasedescription = lsxLuf.purchasedescription;
                }
                purchaseorder_text = rec.getSublistText(sl, 'purchaseorder', i);
                let purchaseorder = rec.getSublistValue(sl, 'purchaseorder', i);
                if (purchaseorder) {
                    let lsxLuf = search.lookupFields({
                        type: lbf.getTranRecordType(purchaseorder),
                        id: purchaseorder,
                        columns: ["tranid", 'custbody_scv_pay_method','custbody_scv_cus_term','transactionnumber']
                    });
                    tranid =  lsxLuf.tranid;
                    transactionnumber =  lsxLuf.transactionnumber;
                    pay_method = lsxLuf.custbody_scv_pay_method;
                    cus_term = lsxLuf.custbody_scv_cus_term;
                }
                obj.pocurrency = rec.getSublistText(sl, 'pocurrency', i);
                povendor = rec.getSublistValue(sl, 'povendor', i);
                obj.quantityexpected = rec.getSublistValue(sl, 'quantityexpected', i);
                obj.expectedrate = rec.getSublistValue(sl, 'expectedrate', i);
                // if(obj.pocurrency === '1') {
                //     obj.amt = Math.round(obj.quantityexpected * obj.expectedrate);
                obj.dongia =  obj.expectedrate * inb_cus_exr;
                obj.amt = obj.quantityexpected * obj.dongia;

                currency = obj.pocurrency;
                obj.inb_tax_code = rec.getSublistValue(sl, 'custrecord_inb_tax_code', i);
                obj.inb_importtax_code = rec.getSublistValue(sl,'custrecord_scv_inb_importtax_code', i);
                obj.unit = rec.getSublistText(sl, 'unit', i);
                obj.inb_tax_code = rec.getSublistValue(sl, 'custrecord_inb_tax_code', i);
                if (obj.inb_tax_code) {
                    let rateLuf = search.lookupFields({
                        type: 'salestaxitem',
                        id: obj.inb_tax_code,
                        columns: ["rate"]
                    });
                    obj.rate =  rateLuf.rate;
                }
                obj.inb_importtax_code = rec.getSublistValue(sl, 'custrecord_scv_inb_importtax_code', i) || 0;
                total_vnd += obj.amt;
                total_tienthue_nk += obj.inb_importtax_code || 0;
                arrSL.push(obj);
            };
            total = inb_tax_total + total_vnd + total_tienthue_nk;
            let total_docTien = libAmt.DocTienBangChu(total, 'VND')?.replace(' chẵn./', '');
            renderer.addCustomDataSource({
                format: render.DataSource.OBJECT,
                alias: "jsonData",
                data: {
                    arrSL, inb_tax_total, total_vnd, total_tienthue_nk, total, total_docTien,
                    bu_legal_name,configLogo, tranid, pay_method, cus_term, povendor, inb_actual_emp,inb_invoice_number,
                    transactionnumber, inb_cus_exr, shipmentnumber
                }
            });
        }

        const getObjBusinessCenter = (biz_center_id) => {
            if(!biz_center_id) return {};
            let bizCenterRec = record.load({
                type: 'customrecord_cseg_scv_bu_center',
                id: biz_center_id
            });

            let logoId = bizCenterRec.getValue('custrecord_scv_bu_logo');
            let aspectRatio = bizCenterRec.getValue('custrecord_scv_bu_logosize') || '1:1';
            let legalname = bizCenterRec.getValue('custrecord_scv_bu_legal_name');

            let arrAspRatio = aspectRatio.trim().split(':');
            let objRes = {
                logoId,
                aspectRatio,
                clientWidth: arrAspRatio[0],
                clientHeight: arrAspRatio[1],
                legalname,
            };

            return objRes;
        }

        const formatNumberWithArray = (_result) => {
            let arrResult = [];
            let arrCopied = JSON.stringify(_result);
            arrCopied = JSON.parse(arrCopied);

            for(let i = 0; i < arrCopied.length; i++) {
                let objRes = arrCopied[i];
                for(let property in objRes) {
                    if(typeof objRes[property] === 'number') {
                        objRes[property] = libPdf.formatNumber(objRes[property]);
                    }
                }
                arrResult.push(objRes);
            }
            return arrResult;
        }


        const getObjTableQueryByID = (_table, _arrColumns, _id) => {
            if(!_id) return {};
            if(_arrColumns.length == 0){
                _arrColumns.push("id")
            }
            var resultSearch = query.runSuiteQL({
                query: `SELECT ` + _arrColumns.join(",") + ` 
                FROM ` + _table + `
                WHERE id = ` + _id
            });
            resultSearch = resultSearch.asMappedResults();
            return resultSearch.length > 0 ? resultSearch[0] : {};
        }
        const getObjTableQuery = (_table, _arrColumns, _condition) => {
            var sql = `SELECT ` + _arrColumns.join(",") + ` 
                FROM ` + _table + `
                WHERE ` + _condition;
            var resultSearch = query.runSuiteQL({
                query: sql
            });
            resultSearch = resultSearch.asMappedResults();

            return resultSearch.length > 0 ? resultSearch : [];
        }

        const addDefaultLocationRender = (renderer, locationId) => {
            if(!!locationId) {
                let locRec = record.load({
                    type: 'location',
                    id: locationId,
                    isDynamic: false
                });
                renderer.addRecord('location', locRec);
            }
        }

        const addDefaultRecordRender = (renderer, type, id) => {
            let rec = record.load({
                type: type,
                id: id,
                isDynamic: false
            });
            renderer.addRecord('record', rec);
            return rec;
        }

        const addDefaultCompanyInfo = (renderer) => {
            let companyInfo = config.load({type: config.Type.COMPANY_INFORMATION});
            renderer.addRecord('companyInfo', companyInfo);
        }

        const onRequest = (scriptContext) => {
            try {
                let request = scriptContext.request;
                let response = scriptContext.response;
                let params = request.parameters;

                let pdfFile = renderRecordToPdfWithTemplate(params.id, params.type, params.printfile);
                response.writeFile(pdfFile, true);
            } catch (error) {
                log.error("error - onRequest", error)
            }

        }

        return {
            onRequest,
            renderRecordToPdfWithTemplate
        }

    });