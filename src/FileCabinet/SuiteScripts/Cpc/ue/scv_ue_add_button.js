/**
 * Nội dung: Chỉ dùng để tạo Button
 * =======================================================================================
 *  Date                Author                  Description
 *  19 Apr 2024       Duy Nguyen   		        Init, create file
 *  20 Apr 2024		  Khanh Tran 				Btn Create SO cho SC, Estimate From ms. Hoài(https://app.clickup.com/t/86cv4t31g)
 *  22 Apr 2024		  Khanh Tran 				Btn Check ĐKKD type [View, Edit, Create] cho SO, SC, PO, PC, Estimate From ms. Hoài(https://app.clickup.com/t/86cv59pq5)
 *  23 Apr 2024		  Khanh Tran 				Btn Create BBNT cho SC From ms. Hoài(https://app.clickup.com/t/86cv54812)
 *  04 May 2024		  Khanh Tran 				Btn Check VT type [Edit, Create] cho SO From ms. Hoài(https://app.clickup.com/t/86cv9kfj8)
 *  05 May 2024		  Huy Pham 				    Nút "Check Request Amount" => hiển thị popup check thông tin, From ms.Tâm(https://app.clickup.com/t/86cv9u4xn)
 *  06 May 2024		  Duy Nguyen				Nút "Create Purchase Order", CPC1 - Màn hình tạo Purchase Order từ Purchase Contract, from HuyND(https://app.clickup.com/t/86cv9jxtt)
 *  07 May 2024		  Duy Nguyen				Nút "Create Adjust Sales Contract", Chức năng trên Sales Contract - Hợp đồng và Create Adjust Sales Contract, from BA.Thuy(https://app.clickup.com/3773072/inbox?tab=important)
 *  07 May 2024       Phu Pham                  Nút "Chuyển biệt trữ" trên màn hình Phiếu không phù hợp from mr. Hiếu (https://app.clickup.com/t/86cva5u7p)
 *  07 May 2024		  Khanh Tran 				Nút "Confirm" cho Deposit và Check From ms. Hoài(https://app.clickup.com/t/86cv9kfj8)
 *  13 May 2024		  Duy Nguyen				Nút "Create Quota" trên Sales Contract(from BA. Thuy), Nút "Tạo phiếu KSCL" trên Shipment Request from BA. Hieu (https://app.clickup.com/t/86cv6cx3x)
 *  14 May 2024       Phu Pham                  Nút "Prepayment Request" trên màn hình PO from ms. Tâm (https://app.clickup.com/t/86cvb8p1p)
 *  14 May 2024       Phu Pham                  Nút "Payment Request" trên màn hình PO from ms. Tâm (https://app.clickup.com/t/86cvb8p1p)
 *  15 May 2024       Phu Pham                  Nút "Create Expense Declaration" trên màn hình FAM Repair & Maintenance Tracking from mr. Phúc (https://app.clickup.com/t/86cvayax9) (Mục 3.3)
 *  15 May 2024       Huy Pham                  Bổ sung logic phần "Check Request Amount", from ms.Tâm(https://app.clickup.com/t/86cv9u4xn?comment=90160036607823)
 *  15 May 2024		  Khanh Tran 				Nút "Void Related Transaction" cho SO, TO From ms. Tâm(https://app.clickup.com/t/86cvb0e0n)
 *  16 May 2024       Phu Pham                  Nút "phiếu thu, phiếu chi" from ms. Hoài (https://app.clickup.com/t/86cvd2m2p)
 *  16 May 2024       Duy Nguyen                Nút Thêm logic nút "Create Quota" trên Sales Contract(from BA. Thuy)
 *  20 May 2024       Phu Pham                  Nút "Update GKK" trên màn hình PO, Opp from ms. Thuỷ (https://app.clickup.com/t/86cve155g)
 *  23 May 2024       Duy Nguyen                Thêm điều kiện hiện nút "Tạo phiếu KSCL" trên Shipment Request from BA. Hieu (https://app.clickup.com/t/86cv6cx3x)
 *  22 May 2024       Hung Nguyen               CPC1_Mẫu in Phiếu đóng gói WMS (https://app.clickup.com/t/86cveuhvt)
 *  27 May 2024       Khanh Tran                Nút "BB CL tỷ giá" trên màn hình SC from ms. Hoài (https://app.clickup.com/t/86cvfg916)
 *  30 May 2024       Khanh Tran                Nút "BBGN" trên màn hình Item Fulfillment from ms. Ngọc (https://app.clickup.com/t/86cvgtf1z)
 *  30 May 2024       Phu Pham                  Nút "Create ITF" trên màn hình Shipment Request from ms. Thuỷ (https://app.clickup.com/t/86cveqnay)
 *  01 Jun 2024       Huy Pham                  Chức năng tạo phiếu hậu kiểm + Giao việc, from mr.Hoa(https://app.clickup.com/t/86cvfg1zz)
 *  02 Jun 2024       Khanh Tran                Nút "Print PHT" [Excel, PDF] tại [Bill, Bill Credit, Write check, Journal, Invoice, Credit Memo] from ms. Tâm (https://app.clickup.com/t/86cvfdna6)
 *  03 Jun 2024       Huy Pham                  Nút Chức năng Add From Location trên màn hình Transfer Order, from mr.Phúc(https://app.clickup.com/t/86cvj2cjf)
 *  04 Jun 2024       Hung Nguyen               Nút "Đơn đặt hàng" trên màn hình Purchase Order, from mr.Huy(https://app.clickup.com/t/86cvh0vf7)
 *  05 Jun 2024       Duy Nguyen                Nút "Write Check" trên Payment schedule spreadsheet, from Ms. TamPT (https://app.clickup.com/t/86cvf827g)
 *  05 Jun 2024       Phu Pham                  Nút "Gỡ biệt trữ" trên màn hình phiếu ko phù hợp from ms. Hoa (https://app.clickup.com/t/86cva5u7p)
 *  05 Jun 2024       Phu Pham                  Nút "Giải phóng hàng" trên màn hình phiếu hậu kiểm from ms. Hoa (https://app.clickup.com/t/86cva5u7p)
 *  04 Jun 2024       Hung Nguyen               Nút "Kiểm soát chất lượng", "Phiếu Không phù hợp" trên màn hình Phiếu Kiểm Soát Chất Lượng(https://app.clickup.com/t/86cvgrzu1)
 *  06 Jun 2024       Khanh Tran                Nút ["BBNT hàng hóa", "BBNT hóa đơn"], tại "Acceptance Minutes" from ms. Hoài (https://app.clickup.com/t/86cv54812)
 *  06 Jun 2024       Phu Pham                  Nút "Create Không phù hợp" trên màn hình CPC Inventory Quality Control from mr. Phúc (https://app.clickup.com/t/86cvjuymj)
 *  06 Jun 2024       Khanh Tran                Nút "Payment Request" tại "Purchase Requisition" from ms. Tâm (https://app.clickup.com/t/86cvhr47d)
 *  06 Jun 2024       Khanh Tran                Nút 'YCNK' tại "Shipment Request" from mr. Hải (https://app.clickup.com/t/86cvhw3bw)
 *  06 Jun 2024       Khanh Tran                Nút 'YCNK_HTL' tại "Shipment Request" from mr. Hải (https://app.clickup.com/t/86cvhw6ur)
 *  06 Jun 2024       Khanh Tran                Nút 'Phiếu Nhập Kho' tại "Item Receipt" from mr. Hải (https://app.clickup.com/t/86cvhw7m2)
 *  10 Jun 2024       Huy Pham                  Nút 'Create ITR', Phát triển chức năng tạo Item Receipt, from mr.Phúc(https://app.clickup.com/t/86cvhqmf6)
 *  10 Jun 2024       Khanh Tran                Nút "BB CL tỷ giá - HĐ" trên màn hình SC from ms. Hoài (https://app.clickup.com/t/86cvfg916)
 *  11 Jun 2024       Duy Nguyen                Update logic hiện nút Tạo phiếu KSCL, from BA. Phuc
 *  13 Jun 2024       Huy Pham                  Nút 'Update INB Tax', from ms.Hoa(https://app.clickup.com/t/86cvhqmf6?comment=90160043661060)
 *  13 Jun 2024       Khanh Tran                Nút 'Create SC' tại Sales Order, from ms.Hoài(https://app.clickup.com/t/86cvp9kw1)
 *  14 Jun 2024       Huy Pham                  Nút ' Update PO EXR' tại Inbound Shipment, from ms.Hoa(https://app.clickup.com/t/86cvpfcqr)
 *  17 Jun 2024       Phu Pham                  Show cảnh báo giá kê khai ở màn hình view from ms. Thuỷ (https://app.clickup.com/t/86cve155g)
 *  19 Jun 2024       Phu Pham                  Nút 'Update GDC' ở màn hình transfer order from ms. Thuỷ (https://app.clickup.com/t/86cvqnx8g)
 *  20 Jun 2024       Hung Nguyen               Nút ' Phiếu Không phù hợp (GĐ phát hiện)', 'Phiếu Không phù hợp (Đầy đủ)' ở màn hình Phiếu Không Phù Hợp
 *  20 Jun 2024       Khanh Tran                Nút 'Phiếu xuất kho' tại Item Fulfillment, from mr.Hải(https://app.clickup.com/t/86cvr4deg)
 *  21 Jun 2024       Huy Pham                  Đổi logic nút "Add From Location" thành "Update TO", from mr.Phúc(https://app.clickup.com/t/86cvj2cjf?comment=90160044821115)
 *  21 Jun 2024       Khanh Tran                Nút 'PXK hàng gây nghiện (NĐ 54)' tại Item Fulfillment, from mr.Hải(https://app.clickup.com/t/86cvr4deg)
 *  23 Jun 2024       Duy Nguyen                Update logic hiện nút Tạo phiếu KSCL, from BA. Phuc((https://app.clickup.com/t/86cv6cx3x))
 *  28 Jun 2024       Duy Nguyen                Update logic hiện nút 'Create Quota', from BA. Thuy((https://app.clickup.com/t/86cva8pru)
 *  28 Jun 2024       Hung Nguyen               Mẫu in 'phiếu nhập hàng đi đường', from BA. Hai(https://app.clickup.com/t/86cvt31uy)
 *  05 Jul 2024       Phu Pham                  Nút "Payment Request" cho màn hình (Return Authorization, Purchase Contract) from ms. Tâm (https://app.clickup.com/t/86cvv5jum)
 *  05 Jul 2024       Phu Pham                  Nút "Create Phiếu ko phù hợp" cho màn hình (Phiếu Hậu Kiểm và Phiếu Quản Lý Sai Lệch) from mr. Phúc (https://app.clickup.com/t/86cvjuymj)
 *  10 Jul 2024       Phu Pham                  Nút "Update Sales Contract" trên màn hình SO from ms. Hoài (https://app.clickup.com/t/86cvvzfkr)
 */
/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/url', '../lib/scv_lib_function', 'N/record', 'N/search', 'N/query', 'N/https', 'N/runtime',
    '../cons/scv_cons_ordertype.js', '../cons/scv_cons_approvalstatus.js',
    "../cons/scv_cons_fam_status.js", 'N/format', '../lib/scv_lib_common_html.js', 'N/file',
    "../cons/scv_cons_role.js", '../cons/scv_cons_cust_approvalstatus.js',
    '../cons/scv_cons_transactiontype.js', 'N/ui/message',
    "../lib/scv_lib_internal_accounting.js"
],
    function(
        url, lfunc, record, search, query, https, runtime,
        constOrderType, constApprovalStatus,
        cFamStatus, format, libHtml, file,
        constRole, constCustAppSta, constTransType,
        message, libIntAcc
    ) {
        const APPROVAL_STATUS = {
            DA_PHE_DUYET: "3"
        };
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
            try {
                const triggerType = scriptContext.type;
                const newRecord = scriptContext.newRecord;
                const form = scriptContext.form;
                const recType = newRecord.type;
                const params = scriptContext?.request?.parameters || {};
                if (triggerType === "view") {
                    let arrBtnPrint = [], objPrint = {};
                    switch (recType) {
                        case 'custompurchase_scv_pur_contract':
                            addBtnViewCheckDKKD({newRecord, form});
                            addBtnCtrPOfromPc({newRecord, form});
                            addBtnCrtPaymentRequest(form, newRecord);
                            break;
                        case 'purchaseorder':
                            addBtnViewCheckDKKD({newRecord, form});
                            addBtnPrepaymentRequest(form, newRecord);
                            addBtnUpdateGKK(form, newRecord, params);
                            addButtonPrintPdf( form, newRecord.id, newRecord.type,  "CUSTTMPL_SCV_DON_DAT_HANG", "Đơn đặt hàng", "custpage_don_dat_hang");
                            break;
                        case 'salesorder':
                            addBtnViewCheckDKKD({newRecord, form});
                            addBtnVoidRltTran({newRecord, form});
                            addBtnCrtSCBySO(form, newRecord);
                            addBtnUpdateGKK(form, newRecord, params);
                            addBtnUpdateSC(form, newRecord);
                            break;
                        case 'customsale_scv_sales_contract':
                            let objPrintSC = {};
                            addBtnCtrAdjSalesContract(form, newRecord);
                            addBtnCrtSO({newRecord, form});
                            addBtnUpdateGKK(form, newRecord, params);
                            addBtnCrtQuota(form,newRecord);
                            addBtnViewCheckDKKD({newRecord, form});
                            addBtnCrtBBNT({newRecord, form});
                            addBtnCrtSCDetail(newRecord, form);
                            objPrintSC.bbcltg = addBtnPrintExcel({form, newRecord, btnId: 'custpage_btn_bb_cltg', btnName: 'BB CL tỷ giá', templateId: 'scv_bb_cltg',
                                fileName: 'Biên bản xác nhận chênh lệch thanh toán.xlsx'});
                            objPrintSC.bbcltgHD = addBtnPrintExcel({form, newRecord, btnId: 'custpage_btn_bb_cltg_hd', btnName: 'BB CL tỷ giá - HĐ', templateId: 'scv_bb_cltg_hd',
                                fileName: 'Biên bản xác nhận chênh lệch thanh toán - HĐ.xlsx'});
                            arrBtnPrint.push(...Object.values(objPrintSC));
                            addBtnExpGrp_bbcltg(newRecord, form)
                            break;
                        case "customrecord_scv_payment_request":
                            addBtnCheckRequestPayment(form, newRecord, triggerType);
                            objPrint = addButtonPrintPdf( form, newRecord.id, newRecord.type,  "CUSTTMPL_SCV_DNTT_NGOAI", "DNTT Ngoại", "custpage_btn_dntt_ngoai");
                            arrBtnPrint.push(objPrint);
                            objPrint = addButtonPrintPdf( form, newRecord.id, newRecord.type,  "CUSTTMPL_SCV_DNTT_NOI", "DNTT Nội", "custpage_btn_dntt_noi");
                            arrBtnPrint.push(objPrint);
                            break;
                        // case "customrecord_scv_wms_printpackage":
                        //     // addButtonPrintPdf( form, newRecord.id, newRecord.type,  "CUSTTMPL_SCV_PHIEU_DONG_GOI", "Phiếu Đóng Gói", "custpage_btn_phieu_dong_goi");
                        //
                        //     break;
                        case "customrecord_scv_prod_qc_report_tb":
                            addButtonPrintPdf( form, newRecord.id, newRecord.type,  "CUSTTMPL_SCV_PHIEU_KPH", "Phiếu Không phù hợp (GĐ phát hiện)", "custpage_btn_phieu_kph")
                            addButtonPrintPdf( form, newRecord.id, newRecord.type,  "CUSTTMPL_SCV_PHIEU_KPH_DAY_DU", "Phiếu Không phù hợp (Đầy đủ)", "custpage_btn_phieu_kph_day_du");
                            addBtnChuyenBietTru(form, newRecord);
                            addBtnGoBietTru(form, newRecord);
                            break;
                        case "deposit":
                            libIntAcc.addBtnConfirm_deposit({newRecord, form});
                            objPrint = addBtnPrintPDF(form, newRecord, 'Phiếu thu', 'custpage_phieu_thu_v2', 'scv_phieu_thu');
                            arrBtnPrint.push(objPrint);
                            break;
                        case "customerdeposit":
                            objPrint = addBtnPrintPDF(form, newRecord, 'Phiếu thu', 'custpage_phieu_thu_v2', 'scv_phieu_thu');
                            arrBtnPrint.push(objPrint);
                            break;
                        case "customerpayment":
                            objPrint = addBtnPrintPDF(form, newRecord, 'Phiếu thu', 'custpage_phieu_thu_v2', 'scv_phieu_thu');
                            arrBtnPrint.push(objPrint);
                            break;
                        case "check":
                            let objPrintCheck = {};
                            // addBtnTest(form, newRecord);
                            libIntAcc.addBtnConfirm_check({newRecord, form});
                            libIntAcc.addBtnUpdate_check({newRecord, form});
                            addButtonExcel(form, newRecord, 'Giấy nộp lệ phí', 'custpage_btn_gnlp', 'scv_giay_nop_le_phi.xml');
                            addButtonExcel(form, newRecord, 'Giấy nộp thuế', 'custpage_btn_gnt', 'scv_giay_nop_thue.xml');
                            objPrint = addBtnPrintPDF(form, newRecord, 'Phiếu chi', 'custpage_phieu_chi_v2', 'scv_phieu_chi');
                            arrBtnPrint.push(objPrint);
                            objPrintCheck.pht_pdf = addBtnPrintPDF(form, newRecord, 'Print PHT', 'custpage_btn_pht_pdf', 'scv_phieu_hoach_toan');
                            objPrintCheck.pht_excel = addBtnPrintExcel({form, newRecord, btnId: 'custpage_btn_pht_excel', btnName: 'Print PHT', templateId: 'scv_phieu_hoach_toan'});
                            arrBtnPrint.push(...Object.values(objPrintCheck));
                            break;
                        case "vendorpayment":
                            addBtnUpdJRL(form, newRecord);
                            objPrint = addBtnPrintPDF(form, newRecord, 'Phiếu chi', 'custpage_phieu_chi_v2', 'scv_phieu_chi');
                            arrBtnPrint.push(objPrint);
                            break;
                        case "vendorprepayment":
                            objPrint = addBtnPrintPDF(form, newRecord, 'Phiếu chi', 'custpage_phieu_chi_v2', 'scv_phieu_chi');
                            arrBtnPrint.push(objPrint);
                            break;
                        case "customerrefund":
                            objPrint = addBtnPrintPDF(form, newRecord, 'Phiếu chi', 'custpage_phieu_chi_v2', 'scv_phieu_chi');
                            arrBtnPrint.push(objPrint);
                            break;
                        case "customrecord_scv_cus_center":
                            addBtnViewReport(newRecord, form);
                            break;
                        case "customsale_scv_shipment_request":
                            addBtnCrtInspecResult(form,newRecord);
                            addBtnCreateITF(newRecord, form);
                            addBtnCreateItemReceipt(form, newRecord);
                            let objPrintSR = {};
                            addBtnPrint_ycnkHtl(form, newRecord, objPrintSR);
                            arrBtnPrint.push(...Object.values(objPrintSR));
                            break;
                        case 'estimate':
                            addBtnViewCheckDKKD({newRecord, form});
                            addBtnCrtSO({newRecord, form, btnName: 'Create SO From SC'});
                            break;
                        case "customrecord_scv_fam_repairmainttrack_h":
                            addBtnCreateExpDeclaration(form, newRecord);
                            break;
                        case 'transferorder':
                            addBtnVoidRltTran({newRecord, form});
                            addBtnAddLocation(form, newRecord);
                            addBtnUpdateGDC(form, newRecord);
                            break;
                        case "opportunity":
                            addBtnUpdateGKK(form, newRecord, params);
                            break;
                        case 'itemfulfillment':
                            let objPrintITF = {};
                            addBtnPrint_bbgn(form, newRecord, objPrintITF);
                            addBtnPrint_pxk(form, newRecord, objPrintITF);
                            arrBtnPrint.push(...Object.values(objPrintITF));
                            break;
                        case "itemreceipt":
                            let objPrintIR = {};
                            addBtnCreateHauKiem(form, newRecord);
                            addBtnUpdateINBTax(form, newRecord);
                            addBtnPrint_pnk(form, newRecord, objPrintIR);
                            arrBtnPrint.push(...Object.values(objPrintIR));
                            break;
                        case "customrecord_scv_invqualitycontrol_h":
                            addBtnCreateHauKiem(form, newRecord);
                            addBtnCreateKhongPhuHop(form, newRecord);
                            break;
                        case "customrecord_scv_post_ins_r":
                            addBtnCreateTask(form, newRecord);
                            addBtnGiaiPhongHang(form, newRecord);
                            addBtnCreateKhongPhuHop(form, newRecord);
                            break;
                        case "customrecord_scv_sai_lech_r":
                            addBtnCreateKhongPhuHop(form, newRecord);
                            break;
                        case 'vendorbill':
                            let objPrintVendorBill = {};
                            objPrintVendorBill.pht_pdf = addBtnPrintPDF(form, newRecord, 'Print PHT', 'custpage_btn_pht_pdf', 'scv_phieu_hoach_toan');
                            objPrintVendorBill.pht_excel = addBtnPrintExcel({form, newRecord, btnId: 'custpage_btn_pht_excel', btnName: 'Print PHT', templateId: 'scv_phieu_hoach_toan'});
                            arrBtnPrint.push(...Object.values(objPrintVendorBill));
                            break;
                        case 'vendorcredit':
                            addBtnUpdJRL(form, newRecord);
                            let objPrintVendorCre = {};
                            objPrintVendorCre.pht_pdf = addBtnPrintPDF(form, newRecord, 'Print PHT', 'custpage_btn_pht_pdf', 'scv_phieu_hoach_toan');
                            objPrintVendorCre.pht_excel = addBtnPrintExcel({form, newRecord, btnId: 'custpage_btn_pht_excel', btnName: 'Print PHT', templateId: 'scv_phieu_hoach_toan'});
                            arrBtnPrint.push(...Object.values(objPrintVendorCre));
                            break;
                        case 'journalentry':
                            libIntAcc.addBtnConfirm_jrl({newRecord, form});
                            libIntAcc.addBtnUpdate_jrl({newRecord, form});
                            let objPrintJRL = {};
                            objPrintJRL.pht_pdf = addBtnPrintPDF(form, newRecord, 'Print PHT', 'custpage_btn_pht_pdf', 'scv_phieu_hoach_toan');
                            objPrintJRL.pht_excel = addBtnPrintExcel({form, newRecord, btnId: 'custpage_btn_pht_excel', btnName: 'Print PHT', templateId: 'scv_phieu_hoach_toan'});
                            arrBtnPrint.push(...Object.values(objPrintJRL));
                            break;
                        case 'invoice':
                            let objPrintINV = {};
                            objPrintINV.pht_pdf = addBtnPrintPDF(form, newRecord, 'Print PHT', 'custpage_btn_pht_pdf', 'scv_phieu_hoach_toan');
                            objPrintINV.pht_excel = addBtnPrintExcel({form, newRecord, btnId: 'custpage_btn_pht_excel', btnName: 'Print PHT', templateId: 'scv_phieu_hoach_toan'});
                            arrBtnPrint.push(...Object.values(objPrintINV));
                            break;
                        case 'customtransaction_fam_depr_jrn':
                            let objPrintFamDeprJrl = {};
                            objPrintFamDeprJrl.pht_pdf = addBtnPrintPDF(form, newRecord, 'Print PHT', 'custpage_btn_pht_pdf', 'scv_phieu_hoach_toan');
                            objPrintFamDeprJrl.pht_excel = addBtnPrintExcel({form, newRecord, btnId: 'custpage_btn_pht_excel', btnName: 'Print PHT', templateId: 'scv_phieu_hoach_toan'});
                            arrBtnPrint.push(...Object.values(objPrintFamDeprJrl));
                            break;
                        case 'customtransaction_fam_revaluation_jrn':
                            let objPrintFamRevJrl = {};
                            objPrintFamRevJrl.pht_pdf = addBtnPrintPDF(form, newRecord, 'Print PHT', 'custpage_btn_pht_pdf', 'scv_phieu_hoach_toan');
                            objPrintFamRevJrl.pht_excel = addBtnPrintExcel({form, newRecord, btnId: 'custpage_btn_pht_excel', btnName: 'Print PHT', templateId: 'scv_phieu_hoach_toan'});
                            arrBtnPrint.push(...Object.values(objPrintFamRevJrl));
                            break;
                        case 'customtransaction_fam_disp_jrn':
                            let objPrintFamDispJrl = {};
                            objPrintFamDispJrl.pht_pdf = addBtnPrintPDF(form, newRecord, 'Print PHT', 'custpage_btn_pht_pdf', 'scv_phieu_hoach_toan');
                            objPrintFamDispJrl.pht_excel = addBtnPrintExcel({form, newRecord, btnId: 'custpage_btn_pht_excel', btnName: 'Print PHT', templateId: 'scv_phieu_hoach_toan'});
                            arrBtnPrint.push(...Object.values(objPrintFamDispJrl));
                            break;
                        case 'customtransaction_fam_transfer_jrn':
                            let objPrintFamTranJrl = {};
                            objPrintFamTranJrl.pht_pdf = addBtnPrintPDF(form, newRecord, 'Print PHT', 'custpage_btn_pht_pdf', 'scv_phieu_hoach_toan');
                            objPrintFamTranJrl.pht_excel = addBtnPrintExcel({form, newRecord, btnId: 'custpage_btn_pht_excel', btnName: 'Print PHT', templateId: 'scv_phieu_hoach_toan'});
                            arrBtnPrint.push(...Object.values(objPrintFamTranJrl));
                            break;
                        case 'inventoryadjustment':
                            let objPrintIA = {};
                            objPrintIA.pht_pdf = addBtnPrintPDF(form, newRecord, 'Print PHT', 'custpage_btn_pht_pdf', 'scv_phieu_hoach_toan');
                            objPrintIA.pht_excel = addBtnPrintExcel({form, newRecord, btnId: 'custpage_btn_pht_excel', btnName: 'Print PHT', templateId: 'scv_phieu_hoach_toan'});
                            arrBtnPrint.push(...Object.values(objPrintIA));
                            break;
                        case 'creditmemo':
                            let objPrintCreMemo = {};
                            objPrintCreMemo.pht_pdf = addBtnPrintPDF(form, newRecord, 'Print PHT', 'custpage_btn_pht_pdf', 'scv_phieu_hoach_toan');
                            objPrintCreMemo.pht_excel = addBtnPrintExcel({form, newRecord, btnId: 'custpage_btn_pht_excel', btnName: 'Print PHT', templateId: 'scv_phieu_hoach_toan'});
                            arrBtnPrint.push(...Object.values(objPrintCreMemo));
                            break;
                        case 'customrecord_scv_prinandintersheet':
                           addBtnCrtWriteCheck(form, newRecord);
                            break;
                        case 'returnauthorization':
                            addBtnCrtPaymentRequest(form, newRecord);
                            let objPrintRA = {};
                            objPrintRA.bbth = addBtnPrintBBTH(form, newRecord);
                            arrBtnPrint.push(...Object.values(objPrintRA));
                            break;
                        case 'customrecord_scv_inspection_result_tb':
                            addButtonPrintPdf( form, newRecord.id, newRecord.type,  "CUSTTMPL_SCV_PHIEU_KSCL", "Phiếu Kiểm soát chất lượng", "custpage_btn_phieu_kscl");
                            addBtnCreateKhongPhuHop(form, newRecord);
                            break;
                        case 'customrecord_scv_bbnt':
                            let objPrintBBNT = {};
                            objPrintBBNT.hang_hoa = addBtnPrintExcel({form, newRecord, btnId: 'custpage_btn_bbnt_hang_hoa', btnName: 'BBNT- Hàng hóa',
                                templateId: 'scv_bbnt_hang_hoa', fileName: 'BBNT - Hàng hóa.xlsx'});
                            objPrintBBNT.hoa_don = addBtnPrintExcel({form, newRecord, btnId: 'custpage_btn_bbnt_hoa_don', btnName: 'BBNT- Hóa đơn',
                                templateId: 'scv_bbnt_hoa_don', fileName: 'BBNT - Hóa đơn.xlsx'});
                            arrBtnPrint.push(...Object.values(objPrintBBNT));
                            break;
                        case 'custompurchase_scv_pur_requisition':
                            addBtnCrtPayReqByPurReq(form, newRecord);
                            addBtnUpdateRateFromSC(form, newRecord);
                            break;
                        case "inboundshipment":
                            let objInbound_Shipment = {};
                            addBtnUpdatePOExr(form, newRecord);
                            addBtnPrint_pnhdd(form, newRecord, objInbound_Shipment);
                            addBtnPaymentReqFromInbound(form, newRecord);
                            arrBtnPrint.push(...Object.values(objInbound_Shipment));
                            break;
                        default:
                            break;
                    }
                    libHtml.addIconButtonExport(form, arrBtnPrint, "custpage_add_icon_prt");
                }
                else if (triggerType === "edit") {
                    switch (recType) {
                        case 'custompurchase_scv_pur_contract':
                            addBtnCheckDKKD({form});
                            break;
                        case 'purchaseorder':
                            addBtnCheckDKKD({form});
                            break;
                        case 'salesorder':
                            addBtnCheckDKKD({form});
                            addBtnCheckVT({form});
                            break;
                        case 'customsale_scv_sales_contract':
                            addBtnCheckDKKD({form});
                            break;
                        case 'estimate':
                            addBtnCheckDKKD({form});
                            break;
                        case "customrecord_scv_payment_request":
                            addBtnCheckRequestPayment(form, newRecord, triggerType);
                            break;
                    }
                }
                else if (triggerType === "create") {
                    switch (recType) {
                        case 'custompurchase_scv_pur_contract':
                            addBtnCheckDKKD({form});
                            break;
                        case 'purchaseorder':
                            addBtnCheckDKKD({form});
                            break;
                        case 'salesorder':
                            addBtnCheckDKKD({form});
                            addBtnCheckVT({form});
                            break;
                        case 'customsale_scv_sales_contract':
                            addBtnCheckDKKD({form});
                            break;
                        case 'estimate':
                            addBtnCheckDKKD({form});
                            break;
                    }
                }
            } catch (e) {
                log.error("Error beforeLoad: ", e);
            }
        }
        const addBtnCrtSCBySO = (form, newRecord) => {
            let scId = newRecord.getValue('custbody_scv_salescontract')
            if(scId) return;
            let urlService = url.resolveRecord({
                recordType: 'customsale_scv_sales_contract',
                isEditMode: true,
                params: {
                    recId: newRecord.id,
                    recType: newRecord.type,
                    btnType: 'crtSCBySO'
                }
            });
            form.addButton({
                id: 'custpage_btn_crt_sc_by_so',
                label: 'Create SC',
                 functionName: `window.open('${urlService}')`
            });
        }

        const addBtnPaymentReqFromInbound = (form, newRecord) => {
            let urlPayReq = `/app/common/custom/custrecordentry.nl?rectype=515&trantype=${newRecord.type}&tranid=${newRecord.id}&action=crt_payreq`;
            form.addButton({
                id: 'custpage_btn_crt_payreq',
                label: 'Payment Request',
                functionName: `window.location.replace('${urlPayReq}')`
            });
        }

        const addBtnCrtPayReqByPurReq = (form, newRecord) => {
            let orderType = newRecord.getValue('custbody_scv_order_type');
            if(orderType != constOrderType.RECORDS.MSTS_CCDC.ID) return;
            let approval_status = newRecord.getValue('custbody_scv_approval_status');
            if(approval_status != constCustAppSta.RECORDS.DA_PHE_DUYET.ID) return;
            let urlService = url.resolveRecord({
                recordType: 'customrecord_scv_payment_request',
                isEditMode: true,
                params: {
                    recId: newRecord.id,
                    recType: newRecord.type,
                    btnType: 'crtPayReqByPurReq'
                }
            });
            form.addButton({
                id: 'custpage_scv_btn_crt_payreq_by_purreq',
                label: 'Payment Request',
                functionName: `window.open('${urlService}')`
            });
        }
        const addBtnUpdateRateFromSC = (form, newRecord) => {
            let salesContId = newRecord.getValue("custbody_scv_sc_pr");
            if(!!salesContId) {
                let urlSl = url.resolveScript({
                    scriptId: 'customscript_scv_sl_update_rate_purreq',
                    deploymentId: 'customdeploy_scv_sl_update_rate_purreq',
                    params: {
                        rectype: newRecord.type,
                        recid: newRecord.id
                    },
                    returnExternalUrl: false
                });

                form.addButton({
                    id: 'custpage_btn_update_rate',
                    label: 'Update Rate',
                    functionName: `window.location.replace('${urlSl}')`
                });
            }
        }
        const addBtnConfirm = (params) => {
            let newRec = params.newRecord;
            let acc_deb = newRec.getValue('custbody_scv_inter_acc_deb');
            if(!acc_deb) return;
            let acc_cre = newRec.getValue('custbody_scv_inter_acc_cre');
            if(!acc_cre) return;
            let related_transaction = newRec.getValue('custbody_scv_related_transaction');
            if(related_transaction){
                let objTran = search.lookupFields({type: lfunc.getTranRecordType(related_transaction), id: related_transaction, columns: ['approvalstatus']});
                let approvalStatus = objTran.approvalstatus[0]?.value;
                if(approvalStatus != constApprovalStatus.RECORDS.REJECTED.ID) return;
            }
            let urlDC = url.resolveScript({
                scriptId: 'customscript_scv_sl_crt_jrl_from_tran',
                deploymentId: 'customdeploy_scv_sl_crt_jrl_from_tran',
                params: {
                    recId: newRec.id,
                    recType: newRec.type
                },
                returnExternalUrl: false
            });
            params.form.addButton({
                id: 'custpage_btn_confirm',
                label: 'Confirm',
                functionName: "window.location.replace('" + urlDC + "');"
            });
        }
        const addBtnPrintExcel = (params) => {
            try {
                let form = params.form;
                let newRecord = params.newRecord;
                let templateId = params.templateId;
                if(!form.getField('custpage_inline_html_exp_exceljs')){
                    let htmlFile = file.load({id: '../html/scv_html_exp_exceljs.html'})
                    let htmlContent = htmlFile.getContents();
                    form.addField({
                        id: 'custpage_inline_html_exp_exceljs',
                        type: 'inlinehtml',
                        label: 'inlinehtml'
                    }).defaultValue = htmlContent;
                }
                let objFile = file.load({id: `../xls/${templateId}.xlsx`});
                form.addButton({
                    id: params.btnId,
                    label: params.btnName,
                    functionName: `onExport(${JSON.stringify({
                        fileUrl: objFile.url, 
                        fileName: params.fileName || objFile.name, 
                        recId: newRecord.id, 
                        recType: newRecord.type, 
                        templateId
                    })})`
                });
                return { export_type: "EXCEL", id: params.btnId };
            } catch (error) {
                log.error('error - addButtonPrintExcel', error)
            }
        }
        function addButtonPrintPdf(form, internalId, type, templateid, label, id) {
            var createPdfUrl = url.resolveScript({
                scriptId: 'customscript_scv_sl_addition_print_pdf',
                deploymentId: 'customdeploy_scv_sl_addition_print_pdf',
                returnExternalUrl: false
            });
            createPdfUrl += '&id=' + internalId + '&type=' + type + '&templateid=' + templateid;
            var addButton = form.addButton({
                id: id,
                label: label,
                functionName: "window.open('" + createPdfUrl + "');"
            });
            return { export_type: "PDF", id: id };
        }

        function addButtonRedirect(form, internalId, type, templateid, label, id) {
            form.addButton({
                id: 'custpage_redirect_button',
                label: 'Redirect to Suitelet',
                functionName: 'redirectToSuitelet'
            });
            form.clientScriptModulePath = '../cs/scv_cs_sl_print_package.js';
        }

        const addBtnCrtSCDetail = (newRecord, form) => {
            let sc_parent = newRecord.getValue('custbody_scv_sc_parent_cb');
            if(!!sc_parent) {
                let urlsl = url.resolveScript({
                    scriptId: 'customscript_scv_sl_create_sc_detail',
                    deploymentId: 'customdeploy_scv_sl_create_sc_detail',
                    params: { custpage_sales_contract: newRecord.id, isrun: 'T' }
                });
                form.addButton({
                    id: 'custpage_crt_sc_detail',
                    label: 'Create SC Detail',
                    functionName: "window.location.replace('" + urlsl + "');"
                });
            }
        }

        const addBtnExpGrp_bbcltg = (newRec, form) => {
            let recId = newRec.id;
            let recType = newRec.type;
            let arrBtn = [
                {label: 'BB CL Tỷ Giá', value: {templateId: 'scv_bb_cltg', recId, recType}},
                {label: 'BB CL Tỷ Giá(hợp đồng)', value: {templateId: 'scv_bb_cltg_hd', recId, recType}},
                {label: 'Cancel', value: 'cancel'},
            ]
            let func = `require(['N/ui/dialog'], function (dialog) {
                let options = {
                        title: 'Export Biên Bản Chênh Lệch Tỷ Giá:',
                        message: '',
                        buttons: ${JSON.stringify(arrBtn)}
                    };
                dialog.create(options)
                .then(function (result) {
                    if (result !== 'cancel') {
                        onExport(result)
                    }
                });
                
            })`
            form.addButton({
                id: 'custpage_btn_grp_print_bbcltg',
                label: 'Exp BB CLTG',
                functionName: func
            });
        }

        const addBtnCheckVT = (params) => {
            params.form.addButton({
                id: 'custpage_btn_check_vt_edit',
                label: 'Check VT'
            });
        }
        const addBtnCrtBBNT = (params) => {
            let newRec = params.newRecord;
            let approvalStatus = newRec.getValue('custbody_scv_approval_status')
            if(approvalStatus != APPROVAL_STATUS.DA_PHE_DUYET) return;
            let urlDC = url.resolveScript({
                scriptId: 'customscript_scv_sl_crt_bbnt',
                deploymentId: 'customdeploy_scv_sl_crt_bbnt',
                params: {
                    isSearch: 'T',
                    custpage_customer: newRec.getValue('custbody_scv_so_buyer'),
                    custpage_sales_contract: newRec.id,
                },
                returnExternalUrl: false
            });
            params.form.addButton({
                id: 'custpage_btn_crt_bbnt',
                label: 'Create BBNT',
                functionName: "window.open('" + urlDC + "');"
            });
        }
        const addBtnCheckDKKD = (params) => {
            params.form.addButton({
                id: 'custpage_btn_check_dkkd_pageinit',
                label: 'Check ĐKKD'
            });
        }
        const addBtnVoidRltTran = (params) => {
            try {
                let newRec = params.newRecord;
                let recId = newRec.id;
                let recType = newRec.type;
                let urlSL_data = url.resolveScript({
                    scriptId: 'customscript_scv_sl_void_rlt_tran',
                    deploymentId: 'customdeploy_scv_sl_void_rlt_tran_data',
                    returnExternalUrl: true
                });
                let objRes = https.post({
                    url: urlSL_data,
                    body: {action: 'getDataSS', recId, recType}
                });
                objRes = JSON.parse(objRes.body);
                if(!objRes.isSuccess || objRes.data.length <= 0) return;
                let urlSL = url.resolveScript({
                    scriptId: 'customscript_scv_sl_void_rlt_tran',
                    deploymentId: 'customdeploy_scv_sl_void_rlt_tran',
                    returnExternalUrl: false,
                    params: {isSearch: 'T', recId,  recType}
                });
                params.form.addButton({
                    id: 'custpage_btn_void_rlt_tran',
                    label: 'Void Related Transaction',
                    functionName: `nlExtOpenWindow('${urlSL}', 'childdrecord', screen.width - 300, screen.height - 300, this, true,'CPC1 - Chức năng hủy, xóa chứng từ')`
                });
            } catch (error) {
                log.error('addBtnVoidRltTran- error', error)
            }

        }
        const addBtnViewCheckDKKD = (params) => {
            let newRec = params.newRecord;
            let urlDC = url.resolveScript({
                scriptId: 'customscript_scv_sl_check_dkkd',
                deploymentId: 'customdeploy_scv_sl_check_dkkd',
                params: {
                    triggerType: params.triggerType,
                    recId: newRec.id,
                    recType: newRec.type
                },
                returnExternalUrl: false
            });
            params.form.addButton({
                id: 'custpage_btn_check_dkkd',
                label: 'Check ĐKKD',
                functionName: "window.location.replace('" + urlDC + "');"
            });
        }
        const getCurDateTime = (curDateTime) => {
            curDateTime = curDateTime || new Date();
            let formatDateTime = format.format({
                value: curDateTime,
                type: 'datetime'
            });
            formatDateTime = format.parse({value: formatDateTime, type: 'date'});
            let year = formatDateTime.getFullYear();
            let month = (formatDateTime.getMonth() + 1).toString().padStart(2, '0');
            let day = formatDateTime.getDate().toString().padStart(2, '0');
            let hours = formatDateTime.getHours().toString().padStart(2, '0');
            let minutes = formatDateTime.getMinutes().toString().padStart(2, '0');
            let seconds = formatDateTime.getSeconds().toString().padStart(2, '0');
            return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds
        }
        const addBtnCrtSO = (params) => {
            let newRec = params.newRecord;
            let objParams = {};
            if(newRec.type == 'customsale_scv_sales_contract'){
                let approvalStatus = newRec.getValue('custbody_scv_approval_status')
                if(approvalStatus != APPROVAL_STATUS.DA_PHE_DUYET) return;
                objParams = {
                    custpage_bu_center: newRec.getValue('cseg_scv_bu_center'),
                    custpage_customer: newRec.getValue('entity'),
                    custpage_sales_contract: newRec.id,
                    custpage_buyer: newRec.getValue('custbody_scv_so_buyer'),
                    custpage_nvnn: newRec.getValue('custbody_scv_so_emp_credit'),
                    custpage_location: newRec.getValue('location'),

                }
            }else if(newRec.type == 'estimate'){
                let sl = 'item';
                let arrItem = [];
                for(let i = 0; i < newRec.getLineCount(sl); i++){
                    let do_truot_thau = newRec.getSublistValue(sl, 'custcol_scv_ly_do_truot_thau', i);
                    if(!do_truot_thau) arrItem.push(newRec.getSublistValue(sl , 'item', i))
                }
                let custbody_scv_so_time_order = newRec.getValue('custbody_scv_so_time_order');
                let custpage_tgdh = getCurDateTime(custbody_scv_so_time_order)
                objParams = {
                    custpage_bu_center: newRec.getValue('cseg_scv_bu_center'),
                    custpage_customer: newRec.getValue('entity'),
                    custpage_buyer: newRec.getValue('custbody_scv_so_buyer'),
                    custpage_item: arrItem.toString(),
                    custpage_estimate: newRec.id,
                    custpage_ntp: newRec.getText('trandate'),
                    custpage_tgdh: custpage_tgdh,
                    custpage_dcgh: newRec.getValue('custbody_scv_deli_address_receipt'),
                    custpage_htvc: newRec.getValue('custbody_scv_tb_htvc'),
                    custpage_nycgh: newRec.getText('shipdate'),
                    custpage_ycgh: newRec.getValue('custbody_scv_so_ycgh'),
                    custpage_note_ycgh: newRec.getValue('custbody_scv_so_deli_note_time'),
                    custpage_location: newRec.getValue('location'),
                    custpage_infor_address: newRec.getValue('custbody_scv_nguoinhan_diachi_h'),
                    custpage_infor_nhan_hang: newRec.getValue('custbody_scv_nhanhang')?.replace('<br>', '\n'),
                    custpage_infor_nhanhang_sdt: newRec.getValue('custbody_scv_sdt_nguoinhan'),
                    custpage_nvnn: newRec.getValue('custbody_scv_so_emp_credit'),
                }
            }
            let urlDC = url.resolveScript({
                scriptId: 'customscript_scv_sl_crt_so',
                deploymentId: 'customdeploy_scv_sl_crt_so',
                params: {
                    isSearch: 'T',
                    ...objParams,
                },
                returnExternalUrl: false
            });
            params.form.addButton({
                id: 'custpage_btn_crt_so',
                label: params.btnName || 'Create SO',
                functionName: "window.open('" + urlDC + "');"
            });
        }

        const addBtnCtrPOfromPc = (params) => {
            let newRec = params.newRecord;
            const statusid = newRec.getValue('custbody_scv_approval_status');
            if (statusid !== APPROVAL_STATUS.DA_PHE_DUYET) return;
            let urlDC = url.resolveScript({
                scriptId: 'customscript_scv_sl_ctr_po_from_pc',
                deploymentId: 'customdeploy_scv_sl_ctr_po_from_pc',
                params: {
                    isSearch: 'T',
                    isRun: 'T',
                    pVendor : newRec.getValue('entity'),
                    pPurchaseContract: newRec.id
                },
                returnExternalUrl: false
            });
            params.form.addButton({
                id: 'custpage_btn_ctrpo_from_pc',
                label: 'Create Purchase Order',
                functionName: "window.open('" + urlDC + "');"
            });
        }

        function addBtnCtrAdjSalesContract(_form, _curRec) {
            const statusId = _curRec.getValue('custbody_scv_approval_status');
            if(statusId !== APPROVAL_STATUS.DA_PHE_DUYET) return;
            const urlCtrAdjSC = url.resolveScript({scriptId : 'customscript_scv_sl_adj_sales_cont', deploymentId : 'customdeploy_scv_sl_adj_sales_cont', params : {pSoHopDongId : _curRec.id, pKhachHangId: _curRec.getValue('entity')}});
            _form.addButton({id : 'custpage_scv_adj_sc', label : 'Create ASC', functionName : `window.open('${urlCtrAdjSC}&isRun=T&isSearch=T')`});
        }

        function addBtnCrtQuota(_form, _curRec) {
            const statusId = _curRec.getValue('custbody_scv_approval_status');
            const soBuyerId = _curRec.getValue('custbody_scv_so_buyer');
            const blCrtQuota = _curRec.getValue('custbody_scv_created_quota');
            if (!soBuyerId || blCrtQuota || statusId !== APPROVAL_STATUS.DA_PHE_DUYET) return;
            const lkBuyer = search.lookupFields({
                type : lfunc.getEntityType(soBuyerId),
                id : soBuyerId,
                columns : ['custentity_scv_cre_quota_sc']
            });
            const blCrtQuotaSC = lkBuyer.custentity_scv_cre_quota_sc;
            if (!blCrtQuotaSC) return;
            const urlCtrQuota = url.resolveScript({
                scriptId : 'customscript_scv_sl_ctr_quota_from_sc',
                deploymentId : 'customdeploy_scv_sl_ctr_quota_from_sc', params :
                    {
                        pSalesContract : _curRec.id, pCustomer: _curRec.getValue('entity'),
                        isCrtSC : 'T'
                    }
            });
            _form.addButton({id : 'custpage_scv_ctr_quota', label : 'Create Quota', functionName : `window.open('${urlCtrQuota}&isRun=T&isSearch=T')`});
        }

        function addBtnCrtInspecResult(_form, _curRec) {
            const urlLink = url.resolveScript({
                scriptId : 'customscript_scv_sl_ctr_kscl',
                deploymentId : 'customdeploy_scv_sl_ctr_kscl',
                params :
                    {
                        recid : _curRec.id, rectype: _curRec.type
                    }
            });
            if (!isShowBtnCrtKSCL(_curRec.type, _curRec.id)) return;
            _form.addButton({id : 'custpage_scv_ctr_ins_res', label : 'Tạo phiếu KSCL', functionName : `window.location.replace('${urlLink}')`});
        }

        function isShowBtnCrtKSCL(recType, recId) {
            const _curRec = record.load({type : recType, id : recId});
            const customformId = _curRec.getValue('customform');
            const isCPC1ShipmentRequest = customformId === '147'; // CPC1 Shipment Request
            /*General case*/
            // Step 1: Check Form
            if (!isCPC1ShipmentRequest) return false;
            // Step 2: Check Status
            const objStatus = {DA_PHE_DUYET: '3',};
            const statusId = _curRec.getValue('custbody_scv_approval_status').toString();
            const isStatus = [objStatus.DA_PHE_DUYET].indexOf(statusId) !== -1;
            // Step 3: Check Use case
            const idCrtTrans = _curRec.getValue('custbody_scv_created_transaction');
            const transType = lfunc.getTranRecordType(idCrtTrans);
            const orderTypeId = _curRec.getValue('custbody_scv_order_type').toString();
            const objOrderType = {DIEU_CHINH_TANG_GIAM_LO : '11'};
            const isDKGiamLot = [objOrderType.DIEU_CHINH_TANG_GIAM_LO].indexOf(orderTypeId) !== -1;
            const arrTrans = [record.Type.PURCHASE_ORDER, record.Type.RETURN_AUTHORIZATION,  record.Type.TRANSFER_ORDER];
            const isCreateFrom = arrTrans.indexOf(transType) !== -1;
            // Use case I Or Use Case II
            if (!isDKGiamLot && !isCreateFrom) return false;
            // Step 4: Check Line empty KSCL
            const lineCount = _curRec.getLineCount({sublistId: 'item'});
            const colKSCL = 'custcol_scv_shipment_rq_ins_num_d';
            for (let i = 0; i < lineCount; i++) {
                const idKSCL = _curRec.getSublistValue({sublistId: 'item', fieldId: colKSCL, line: i});
                if (!idKSCL)
                    return true;
            }
            return false;
        }

        const addBtnCheckRequestPayment = (_form, _curRec, _triggerType) => {
            if(_triggerType == "view"){
                let paymentContractId = _curRec.getValue("custrecord_scv_payment_contract_no");
                if(!paymentContractId) return;

                let paymentContractLkf = search.lookupFields({type: "transaction", id: paymentContractId, columns: "custbody_scv_order_type"});
                let orderTypeId = "";
                if(!!paymentContractLkf.custbody_scv_order_type && paymentContractLkf.custbody_scv_order_type.length > 0){
                    orderTypeId = paymentContractLkf.custbody_scv_order_type[0].value;
                }

                if(!orderTypeId || ![constOrderType.RECORDS.CHUONG_TRINH.ID, constOrderType.RECORDS.UY_THAC.ID].includes(orderTypeId * 1)) return;
            }else{

            }


            let urlCheckAmtPayment = url.resolveScript({
                scriptId: 'customscript_scv_sl_chk_amt_payreq',
                deploymentId: 'customdeploy_scv_sl_chk_amt_payreq',
                returnExternalUrl: false,
                params: {
                    isPopup: "T",
                    custpage_cseg_subsidiary: _curRec.getValue("cseg_scv_subsidiary")||"",
                    custpage_location: _curRec.getValue("custrecord_scv_payment_location")||"",
                    custpage_bu_center: _curRec.getValue("cseg_scv_bu_center")||"",
                    custpage_sales_contract: _curRec.getValue("custrecord_scv_payment_sc")||"",
                    trigger_type: _triggerType
                }
            });

            _form.addButton({
                id: 'custpage_btn_chk_req_amt',
                label: 'Check Request Amount',
                functionName: `nlExtOpenWindow('${urlCheckAmtPayment}', 'childdrecord', screen.width - 300, screen.height - 300, this, true,'Check Request Amount')`
            });
        }

        function addBtnUpdJRL(form, newRecord) {
            const idJrl = newRecord.getValue('custbody_scv_related_transaction');
            if (!idJrl) return;
            const transType = lfunc.getTranRecordType(idJrl);
            if (transType !== record.Type.JOURNAL_ENTRY) return;
            const urlSL = url.resolveScript({
                scriptId: 'customscript_scv_sl_upd_jrl',
                deploymentId: 'customdeploy_scv_sl_upd_jrl',
                params: {rectype: newRecord.type, recid: newRecord.id}
            });
            form.addButton({
                id: 'custpage_btn_upd_jrl',
                label: 'Update JRL',
                functionName: `window.location.replace("${urlSL}")`
            })
        }

        const addBtnViewReport = (newRecord, form) => {
            let urlReport = `/app/site/hosting/scriptlet.nl?script=527&deploy=1`;
            urlReport += `&entityId=${newRecord.getValue('custrecord_scv_cc_cus')}`;
            form.addButton({
                id: 'custpage_btn_view_report',
                label: 'View Report',
                functionName: `window.open("${urlReport}")`
            });
        }

        const addBtnCreateKhongPhuHop = (form, newRecord) => {
            let urlSl = url.resolveScript({
                scriptId: 'customscript_scv_sl_crt_phieu_kph',
                deploymentId: 'customdeploy_scv_sl_crt_phieu_kph',
                params: {
                    rectype: newRecord.type, recid: newRecord.id,
                    isrun: "T"
                }
            });
            form.addButton({
                id: 'custpage_btn_crt_kophuhop',
                label: 'Tạo Không Phù Hợp',
                functionName: `window.location.replace("${urlSl}")`
            });
        }

        const addBtnCrtPaymentRequest = (form, newRecord) => {
            let urlSl = `/app/common/custom/custrecordentry.nl?rectype=515&trantype=${newRecord.type}&tranid=${newRecord.id}&action=crt_payreq`;
            form.addButton({
                id: 'custpage_btn_payment_req',
                label: 'Payment Request',
                functionName: `window.location.replace("${urlSl}")`
            });
        }

        const addBtnGiaiPhongHang = (form, newRecord) => {
            let qty_insed = newRecord.getValue("custrecord_scv_post_ins_quan_insed_h");
            if(qty_insed > 0) {
                let urlPopupForm = url.resolveScript({
                    scriptId: 'customscript_scv_sl_popup_form',
                    deploymentId: 'customdeploy_scv_sl_popup_form',
                    params: {
                        action: 'giaiPhongHang',
                        rectype: newRecord.type, recid: newRecord.id
                    }
                });
                form.addButton({
                    id: 'custpage_btn_gph',
                    label: 'Giải phóng hàng',
                    functionName: `nlExtOpenWindow('${urlPopupForm}', 'childdrecord', window.innerWidth - 300, window.innerHeight - 300, this, true,'')`
                });
            }
        }

        const addBtnGoBietTru = (form, newRecord) => {
            let urlPopupForm = url.resolveScript({
                scriptId: 'customscript_scv_sl_popup_form',
                deploymentId: 'customdeploy_scv_sl_popup_form',
                params: {
                    action: 'goBietTru',
                    rectype: newRecord.type, recid: newRecord.id
                }
            });
            form.addButton({
                id: 'custpage_btn_go_biet_tru',
                label: 'Gỡ biệt trữ',
                functionName: `nlExtOpenWindow('${urlPopupForm}', 'childdrecord', window.innerWidth - 300, window.innerHeight - 300, this, true,'')`
            });
        }

        const addBtnChuyenBietTru = (form, newRecord) => {
            // let columns = ["id", "custrecord_scv_prod_complaint_stt_bt_r_d", "custrecord_scv_prod_complaint_lot_sx_d"];
            // let sql = `isinactive = 'F' and custrecord_scv_prod_complaint_header_d = ${newRecord.id}`;
            // let arrSublist = getObjTableQuery('customrecord_scv_prod_qc_report_d', columns, sql);
            // let isValid = arrSublist.some(e => !e.custrecord_scv_prod_complaint_stt_bt_r_d);

            // if(isValid) {
                let urlPopupForm = url.resolveScript({
                    scriptId: 'customscript_scv_sl_popup_form',
                    deploymentId: 'customdeploy_scv_sl_popup_form',
                    params: {
                        action: 'chuyenBietTru',
                        rectype: newRecord.type, recid: newRecord.id
                    }
                });
                form.addButton({
                    id: 'custpage_btn_chuyen_biet_tru',
                    label: 'Chuyển biệt trữ',
                    functionName: `nlExtOpenWindow('${urlPopupForm}', 'childdrecord', window.innerWidth - 300, window.innerHeight - 300, this, true,'')`
                });
            // }
        }

        const addBtnCreateExpDeclaration = (form, newRecord) => {
            let statusId = newRecord.getValue("custrecord_scv_rmt_status_h") * 1;
            if(![cFamStatus.RECORDS.OPEN.ID, cFamStatus.RECORDS.PENDING_APPROVAL.ID, cFamStatus.RECORDS.REJECTED.ID].includes(statusId)) {
                let urlExpDecla = `/app/common/custom/custrecordentry.nl?rectype=1114&createdfromid=${newRecord.id}&createdfromtype=${newRecord.type}&action=expense_declaration`;
                form.addButton({
                    id: 'custpage_btn_crt_exp_decla',
                    label: 'Expense Declaration',
                    functionName: `window.location.replace('${urlExpDecla}')`
                });
            }
        }

        const addBtnUpdateGDC = (form, newRecord) => {
            let urlSl = url.resolveScript({
                scriptId: 'customscript_scv_sl_update_gdc',
                deploymentId: 'customdeploy_scv_sl_update_gdc',
                params: {
                    rectype: newRecord.type,
                    recid: newRecord.id
                },
                returnExternalUrl: false
            });

            form.addButton({
                id: 'custpage_btn_update_gdc',
                label: 'Update GĐC',
                functionName: `window.location.replace('${urlSl}')`
            });
        }

        const addBtnUpdateSC = (form, newRecord) => {
            let urlSl = url.resolveScript({
                scriptId: 'customscript_scv_sl_popup_update_sc',
                deploymentId: 'customdeploy_scv_sl_popup_update_sc',
                params: {
                    rectype: newRecord.type,
                    recid: newRecord.id
                },
            });
            form.addButton({
                id: 'custpage_btn_update_sc',
                label: 'Update SC',
                functionName: `nlExtOpenWindow('${urlSl}', 'childdrecord', window.innerWidth - 200, window.innerHeight - 200, this, true,'')`
            });
        }


        const addBtnUpdateGKK = (form, newRecord, params) => {
            let urlSl = url.resolveScript({
                scriptId: 'customscript_scv_sl_update_gkk',
                deploymentId: 'customdeploy_scv_sl_update_gkk',
                params: {
                    rectype: newRecord.type,
                    recid: newRecord.id
                },
                returnExternalUrl: false
            });
            form.addButton({
                id: 'custpage_btn_update_gkk',
                label: 'Update GKK',
                functionName: `window.location.replace('${urlSl}')`
            });

            if(params.listWarning) {
                let sl = 'item';
                let lc = newRecord.getLineCount(sl);
                let arrWarning = params.listWarning.split(",");

                let messageInfo = '';
                for(let i = 0; i < lc; i++) {
                    let item_id = newRecord.getSublistValue(sl, 'item', i);
                    let item_nm = newRecord.getSublistText(sl, 'item', i);
                    if(arrWarning.includes(item_id)) {
                        messageInfo += `${item_nm} bị vượt giá kê khai (Line ${i + 1})!`;
                    }
                }

                form.addPageInitMessage({type: message.Type.WARNING, title: "Người dùng kiểm tra lại giá kê khai", message: messageInfo, duration: -1});
            }
        }

        const getContentsFile = (_fileId) => {
            return file.load({id: _fileId}).getContents();
        }

        const addBtnPrepaymentRequest = (form, newRecord) => {
            let approvalstatus = newRecord.getValue('approvalstatus');
            let arrSublist = getDataSublistItemPO(newRecord);

            let totalQty = arrSublist.reduce((a, b) => a + b.quantity, 0);
            let totalQtyReceipt = arrSublist.reduce((a, b) => a + b.quantityreceived, 0);
            let totalQtyBilled = arrSublist.reduce((a, b) => a + b.quantitybilled, 0);

            if(approvalstatus == constApprovalStatus.RECORDS.APPROVED.ID && totalQty !== totalQtyBilled) {
                let urlPaymentReq = `/app/common/custom/custrecordentry.nl?rectype=515&trantype=${newRecord.type}&tranid=${newRecord.id}&action=prepayment_request`;
                form.addButton({
                    id: 'custpage_btn_prepayment_request',
                    label: 'Prepayment Request',
                    functionName: `window.location.replace('${urlPaymentReq}')`
                });
            }

            if(approvalstatus == constApprovalStatus.RECORDS.APPROVED.ID && totalQtyReceipt >= totalQtyBilled) {
                let urlPaymentReq = `/app/common/custom/custrecordentry.nl?rectype=515&trantype=${newRecord.type}&tranid=${newRecord.id}&action=payment_request`;
                form.addButton({
                    id: 'custpage_btn_payment_request',
                    label: 'Payment Request',
                    functionName: `window.location.replace('${urlPaymentReq}')`
                });
            }
        }

        const getDataSublistItemPO = (newRecord) => {
            let arrResult = [];
            let sl = 'item';
            let lc = newRecord.getLineCount(sl);
            for (let i = 0; i < lc; i++) {
                arrResult.push({
                    quantity: newRecord.getSublistValue(sl, 'quantity', i) * 1,
                    quantitybilled: newRecord.getSublistValue(sl, 'quantitybilled', i) * 1,
                    quantityreceived: newRecord.getSublistValue(sl, 'quantityreceived', i) * 1,
                });
            }
            return arrResult;
        }

        const addBtnTest = (form, newRecord) => {
            form.addButton({
                id: 'custpage_scv_test',
                label: 'Test',
                functionName: `
                    require(
                        ['N/ui/dialog', 'N/search', 'SuiteScripts/Cpc/lib/scv_lib_cs_xls.js'], 
                        (dialog, search, lib) => { 
                            scvTest(lib);

                            async function scvTest(lib) {
                                if(typeof ExcelJS == "undefined"){
                                    await jQuery.getScript('https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.3.0/exceljs.min.js');
                                }
                                if(typeof saveAs == "undefined"){
                                    await jQuery.getScript('https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js');
                                }
                                if(typeof JSZip == "undefined"){
                                    await jQuery.getScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js')
                                }

                                let url_file = '/core/media/media.nl?id=5982&c=9363397&h=5gCBfvky8PuF6KS1VjFhJMR7g7nX8zlLUqbXsXdXKR7ekh__&_xt=.xls';
                                let workbook = await lib.loadWorkbookFromUrl(url_file);
                                const curSheet = workbook.getWorksheet('Sheet');
                                await lib.saveWorkbook(workbook, "Biên bản đối chiếu công nợ (FM - 2006R).xlsx");
                            }
                        }
                    )
                `
            });
        }
        const addBtnPrintBBTH = (form, newRecord) => {
            let urlSL =  url.resolveScript({
                scriptId: 'customscript_scv_sl_print_bbth',
                deploymentId: 'customdeploy_scv_sl_print_bbth',
                params: {
                    recId: newRecord.id,
                    recType: newRecord.type,
                },
                returnExternalUrl: false
            });;
            form.addButton({
                id: 'custpage_btn_bbth',
                label: 'BBTH',
                functionName: "window.location.replace('" + urlSL + "');"
            });
            return { export_type: "WORD", id: 'custpage_btn_bbth' };
        }
        const addBtnPrint_pxk = (_form, _newRecord, _objPrint) => {
            let crtFromId = _newRecord.getValue('createdfrom');
            let crtFromType = lfunc.getTranRecordType(crtFromId);
            if(['salesorder', 'transferorder', 'vendorreturnauthorization'].includes(crtFromType)){
                _objPrint.pxkKoGia = addBtnPrintPDF(_form, _newRecord, 'Phiếu xuất kho (không giá)', 'custpage_pxk_kogia', 'scv_pxk_kogia');
                _objPrint.pxkCoGia = addBtnPrintPDF(_form, _newRecord, 'Phiếu xuất kho (có giá)', 'custpage_pxk_cogia', 'scv_pxk_cogia');
            }
            _objPrint.pxkHgnNd54 = addBtnPrintPDF(_form, _newRecord, 'PXK hàng gây nghiện (NĐ 54)', 'custpage_pxk_hgn_nd', 'scv_pxk_hgn_nd');
        }
        const addBtnPrint_bbgn = (_form, _newRecord, _objPrint) => {
            let orderType = _newRecord.getValue('custbody_scv_order_type');
            if(orderType == constOrderType.RECORDS.KHACH_HANG_KY_GUI.ID) _objPrint.bbgnHkg = addBtnPrintPDF(_form, _newRecord, 'BBGN HKG', 'custpage_bbgn_hkg', 'scv_bbgn_hkg');
            _objPrint.bbgn = addBtnPrintPDF(_form, _newRecord, 'BBGN', 'custpage_bbgn', 'scv_bbgn');
            _objPrint.bbgnHnt = addBtnPrintPDF(_form, _newRecord, 'BBGN HNT', 'custpage_bbgn_hnt', 'scv_bbgn_hnt');
            _objPrint.bbgnHnnl = addBtnPrintPDF(_form, _newRecord, 'BBGN HNNL', 'custpage_bbgn_hnnl', 'scv_bbgn_hnnl');
            _objPrint.bbgnHnnb = addBtnPrintPDF(_form, _newRecord, 'BBGN HNNB', 'custpage_bbgn_hnnb', 'scv_bbgn_hnnb');
            _objPrint.bbgnAcrAvo = addBtnPrintPDF(_form, _newRecord, 'ACRIPTEGA+AVONZA', 'custpage_bbgn_acr_avo', 'scv_bbgn_acr_avo');
            _objPrint.bbgnArv = addBtnPrintPDF(_form, _newRecord, 'BBGN ARV', 'custpage_bbgn_arv', 'scv_bbgn_arv');
            _objPrint.bbgnND54 = addBtnPrintPDF(_form, _newRecord, 'BBGN ND54', 'custpage_bbgn_nd', 'scv_bbgn_nd');
            _objPrint.bbgnNTHH = addBtnPrintPDF(_form, _newRecord, 'BBGN NTHH', 'custpage_bbgn_nthh', 'scv_bbgn_nthh');
        }
        const addBtnPrint_pnk = (_form, _newRecord, _objPrint) => {
            let orderType = _newRecord.getValue('custbody_scv_order_type');
            if(orderType == constOrderType.RECORDS.CHUONG_TRINH.ID) _objPrint.pnkHct = addBtnPrintPDF(_form, _newRecord, 'Phiếu Nhập Kho HCT', 'custpage_btn_pnk', 'scv_pnk_hct');
            else _objPrint.pnk = addBtnPrintPDF(_form, _newRecord, 'Phiếu Nhập Kho', 'custpage_btn_pnk', 'scv_pnk')
        }
        const addBtnPrint_pnhdd = (_form, _newRecord, _objPrint) => {
            _objPrint.pnhdd = addBtnPrintPDF(_form, _newRecord, 'Phiếu nhập hàng đi đường', 'custpage_pnhdd', 'scv_pnh_di_duong');
        }
        const addBtnPrint_ycnkHtl = (_form, _newRecord, _objPrint) => {
            let created_transaction = _newRecord.getValue('custbody_scv_created_transaction');
            let recType = lfunc.getTranRecordType(created_transaction)
            if(recType == 'purchaseorder') _objPrint.ycnk =  addBtnPrintPDF(_form, _newRecord, 'YCNK', 'custpage_btn_ycnk', 'scv_ycnk');
            else if(recType == 'returnauthorization') _objPrint.ycnkHtl = addBtnPrintPDF(_form, _newRecord, 'YCNK HTL', 'custpage_btn_ycnk_htl', 'scv_ycnk_htl');
        }
        const addBtnPrintPDF = (_form, _newRecord, _label, _id, _printfile) => {
            let recType = _newRecord.type;
            let createPdfUrl = url.resolveScript({
                scriptId: 'customscript_scv_sl_addition_print',
                deploymentId: 'customdeploy_scv_sl_addition_print',
                returnExternalUrl: false
            });
            createPdfUrl += '&id=' + _newRecord.id + '&type=' + recType + '&printfile=' + _printfile;
            _form.addButton({
                id: _id,
                label: _label,
                functionName: "window.open('" + createPdfUrl + "');"
            });
            return { export_type: "PDF", id: _id };
        }

        const addButtonExcel = (_form, _newRecord, _label, _id, _printfile) => {
            let recType = _newRecord.type;
            let createPdfUrl = url.resolveScript({
                scriptId: 'customscript_scv_sl_addition_print_excel',
                deploymentId: 'customdeploy_scv_sl_addition_print_excel',
                returnExternalUrl: false
            });
            createPdfUrl += '&id=' + _newRecord.id + '&type=' + recType + '&printfile=' + _id;
            _form.addButton({
                id: _id,
                label: _label,
                functionName: "window.location.replace('" + createPdfUrl + "');"
            });
            return { export_type: "PDF", id: _id };
        }

        const addBtnCreateITF = (newRecord, form) => {
            let trans_type = newRecord.getValue("custbody_scv_trans_type");
            let createdfromid = newRecord.getValue("custbody_scv_created_transaction");
            let ordertypeId = newRecord.getValue("custbody_scv_order_type");
            let createdfromtype = lfunc.getTranRecordType(createdfromid);


            let isTransform = [record.Type.SALES_ORDER, record.Type.TRANSFER_ORDER, record.Type.VENDOR_RETURN_AUTHORIZATION].includes(createdfromtype);
            if(
                (!!isTransform && !trans_type) ||
                (!!isTransform && trans_type == constTransType.RECORDS.INVENTORY_ADJUSTMENT.ID && ordertypeId == constOrderType.RECORDS.KHACH_HANG_KY_GUI.ID)
            ) {
                let slurl = '';
                if(createdfromid && createdfromtype === record.Type.SALES_ORDER){
                    slurl = "/app/accounting/transactions/itemship.nl?id="+ createdfromid +"&e=T&transform=salesord&memdoc=0&whence=";
                } else if(createdfromid && createdfromtype === record.Type.TRANSFER_ORDER){
                    slurl = "/app/accounting/transactions/itemship.nl?id="+ createdfromid +"&e=T&transform=trnfrord&memdoc=0&whence=";
                } else if(createdfromid && createdfromtype === record.Type.VENDOR_RETURN_AUTHORIZATION){
                    slurl = "/app/accounting/transactions/itemship.nl?id="+ createdfromid +"&e=T&transform=vendauth&memdoc=0&whence=";
                }
                if(slurl) {
                    slurl += "&shipmentrequestid=" + newRecord.id;
                    form.addButton({
                        id: "custpage_btn_create_itf",
                        label: "Create ITF",
                        functionName: "window.location.replace('" + slurl + "');"
                    });
                }
            }
        }

        const addBtnCreateHauKiem = (_form, _curRec) => {
            let paramsUrl = {};
            if(_curRec.type == "itemreceipt"){
                paramsUrl.custpage_itemreceipt = _curRec.id;
            }
            else if(_curRec.type == "customrecord_scv_invqualitycontrol_h"){
                paramsUrl.custpage_inventorycontrol = _curRec.id;
            }
            else {
                return;
            }
            let urlScript = url.resolveScript({
                scriptId: 'customscript_scv_sl_crt_haukiem',
                deploymentId: 'customdeploy_scv_sl_crt_haukiem',
                params: paramsUrl,
                returnExternalUrl: false
            });
            _form.addButton({
                id: 'custpage_btn_crt_haukiem',
                label: 'Tạo Phiếu Hậu Kiểm',
                functionName: "window.open('" + urlScript + "');"
            });
        }

        const addBtnCrtWriteCheck = (_form, _curRec) => {
            let urlScript = url.resolveRecord({
                recordType: 'check',
                recordId : null,
                isEditMode : true,
                params : {
                    rectype : _curRec.type,
                    recid : _curRec.id,
                    buttontype : 'makecheck_from_pss'
                }
            });
            const _STATUS = {OPEN : 'OPEN'};
            const _TYPE = {INTEREST : '7'};
            const statusSrt = _curRec.getValue("custrecord_scv_sheet_status")?.toString()?.trim()?.toUpperCase() || '';
            const typeId = _curRec.getValue("custrecord_scv_db_sheet_type").toString();
            if (_STATUS.OPEN !== statusSrt || typeId !== _TYPE.INTEREST) return;
            _form.addButton({
                id: 'custpage_btn_crt_writecheck',
                label: 'Write Check',
                functionName: "window.location.replace('" + urlScript + "');"
            });
        }


        const addBtnCreateTask = (_form, _curRec) => {
            var arrLineToCreate = query.runSuiteQL({
                query: `SELECT id
                FROM customrecord_scv_post_ins_r_d
                WHERE isinactive = 'F'
                    AND custrecord_scv_post_ins_header_d = ${_curRec.id}
                    AND NVL(custrecord_scv_post_ins_slg_nhap_cb_d,0) > NVL(custrecord_scv_post_in_slg_dakiem_d,0)`
            }).asMappedResults();

            if(arrLineToCreate.length == 0) return;

            let urlScript = url.resolveScript({
                scriptId: 'customscript_scv_sl_crt_task',
                deploymentId: 'customdeploy_scv_sl_crt_task',
                params: {
                    isPopup: "T",
                    isSearch: "T",
                    custpage_post_ins_r: _curRec.id
                }
            });

            _form.addButton({
                id: 'custpage_btn_crt_task',
                label: 'Tạo Phiếu giao việc',
                functionName: `nlExtOpenWindow('${urlScript}', 'childdrecord', screen.width - 300, screen.height - 300, this, true,'Tạo Phiếu giao việc')`
            });
        }

        const addBtnAddLocation = (_form, _curRec) => {
            /* let approval_status = _curRec.getValue('custbody_scv_approval_status');
            if(approval_status != constCustAppSta.RECORDS.CHO_PHE_DUYET.ID) return;

            let location_id = _curRec.getValue("location");
            let ordertype_id = _curRec.getValue("custbody_scv_order_type");

            if(!!location_id || ordertype_id != constOrderType.RECORDS.DIEUCHUYEN_GIUA_CN.ID) return;

            let curUser = runtime.getCurrentUser();
            if(curUser.role !=constRole.RECORDS.ADMINISTRATOR.ID){
                let user_cseg_sub = "", transferlocation_cseg_sub = "";
                let transferlocation = _curRec.getValue("transferlocation");

                let entityLKF = search.lookupFields({type: "entity", id: curUser.id, columns: "cseg_scv_subsidiary"})
                if(!!entityLKF.cseg_scv_subsidiary && entityLKF.cseg_scv_subsidiary.length > 0){
                    user_cseg_sub = entityLKF.cseg_scv_subsidiary[0].value;
                }

                let translocationLKF = search.lookupFields({type: "location", id: transferlocation, columns: "cseg_scv_subsidiary"})
                if(!!translocationLKF.cseg_scv_subsidiary && translocationLKF.cseg_scv_subsidiary.length > 0){
                    transferlocation_cseg_sub = translocationLKF.cseg_scv_subsidiary[0].value;
                }

                if(user_cseg_sub == transferlocation_cseg_sub) return;
            } */

            let urlScript = url.resolveScript({
                scriptId: 'customscript_scv_sl_add_location',
                deploymentId: 'customdeploy_scv_sl_add_location',
                params: {
                    custpage_transaction: _curRec.id
                }
            });

            _form.addButton({
                id: 'custpage_btn_add_location',
                label: 'Update TO',
                functionName: `nlExtOpenWindow('${urlScript}', 'popupUpdateTO', screen.width - 300, screen.height - 300, this, true,'Update Transfer Order')`
            });
        }

        const addBtnCreateItemReceipt = (_form, _curRec) => {
            let approval_status = _curRec.getValue('custbody_scv_approval_status');
            if(approval_status != constCustAppSta.RECORDS.DA_PHE_DUYET.ID) return;

            let created_trans = _curRec.getValue('custbody_scv_created_transaction');
            if (!created_trans) return;

            let created_trans_type = lfunc.getTranRecordType(created_trans);
            if (!["purchaseorder", "transferorder", "returnauthorization"].includes(created_trans_type)) return;

            let transLKF  = search.lookupFields({type: _curRec.type, id: _curRec.id, columns: "customform"});
            let customform = transLKF.customform[0]?.value??"";
            if(customform != 147) return; //CPC1 Shipment Request - Nhận hàng

            let urlScript = url.resolveScript({
                scriptId: 'customscript_scv_sl_crt_itr',
                deploymentId: 'customdeploy_scv_sl_crt_itr',
                params: {
                    custpage_shipment_request: _curRec.id
                },
                returnExternalUrl: false
            });
            _form.addButton({
                id: 'custpage_btn_crt_itemreceipt',
                label: 'Create ITR',
                functionName: "window.open('" + urlScript + "');"
            });
        }

        const addBtnUpdateINBTax = (_form, _curRec) =>{
            let inboundshipment = _curRec.getValue("inboundshipment");
            if(!inboundshipment) return;

            let urlScript = url.resolveScript({
                scriptId: 'customscript_scv_sl_itr_upd_inb_tax',
                deploymentId: 'customdeploy_scv_sl_itr_upd_inb_tax',
                params: {
                    recid: _curRec.id
                }
            });
            _form.addButton({
                id: 'custpage_btn_upd_inb_info',
                label: 'Update INB Info',
                functionName: "window.location.replace('" + urlScript + "');"
            });
        }

        const addBtnUpdatePOExr = (_form, _curRec) =>{
            let urlScript = url.resolveScript({
                scriptId: 'customscript_scv_sl_inb_upd_po',
                deploymentId: 'customdeploy_scv_sl_inb_upd_po',
                params: {
                    recid: _curRec.id,
                    isupdate_exchangerate: "T"
                }
            });
            _form.addButton({
                id: 'custpage_btn_inb_upd_po_exr',
                label: 'Update PO EXR',
                functionName: "window.location.replace('" + urlScript + "');"
            });
        }

        const getObjTableQuery = (_table, _arrColumns, _condition) => {
            let sql = `SELECT ` + _arrColumns.join(",") + ` 
                FROM ` + _table + `
                WHERE ` + _condition + `
                ORDER BY id ASC`;
            let resultSearch = query.runSuiteQL({
                query: sql
            });
            resultSearch = resultSearch.asMappedResults();

            return resultSearch.length > 0 ? resultSearch : [];
        }
        return {
            beforeLoad: beforeLoad,
        };
    });
