/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/url'],
    function (url
    ) {
        /**
         * Function definition to be triggered before record is loaded.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @Since 2015.2
         */
        function beforeLoad(scriptContext) {
            const triggerType = scriptContext.type;
            const newRecord = scriptContext.newRecord;
            const form = scriptContext.form;
            const recType = newRecord.type;
            const params = scriptContext?.request?.parameters || {};
            if (triggerType === "view") {
                if (recType === "purchaseorder") {
                    addButtonPrintPdf(
                        form
                        , newRecord.id,
                        newRecord.type, "CUSTTMPL_SCV_DON_DAT_HANG", "Đơn đặt hàng (Print Demo)", "custpage_don_dat_hang_demo");
                }
            }
        }
        function addButtonPrintPdf(form, internalId, type, templateid, label, id) {
            let createPdfUrl = url.resolveScript({
                scriptId: 'customscript_scv_sl_print_demo',
                deploymentId: 'customdeploy_scv_sl_print_demo',
                returnExternalUrl: false
            });
            createPdfUrl += '&id=' + internalId + '&type=' + type + '&templateid=' + templateid;
            form.addButton({id: id, label: label, functionName: "window.open('" + createPdfUrl + "');"});
            return {export_type: "PDF", id: id};
        }
        function beforeSubmit(scriptContext) {}
        function afterSubmit(scriptContext) {}
        return {
            beforeLoad: beforeLoad, beforeSubmit: beforeSubmit, afterSubmit: afterSubmit
        };
    });
