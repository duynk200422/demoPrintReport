/**
 * Nội dung: Advance PDF
 * KeyWord:
 * =======================================================================================
 *  Date                Author                  Description
 *  24 Nov 2023		    Huy Pham			    Init, move file from VLG
 */
define(['N/search','N/record', 'N/config', 'N/render', 'N/file'],
function(search, record, config, render, file) {

	const initTemplateRender = (_templateId) => {
		var tmplRender = render.create();
		if (isNaN(_templateId)) {
			tmplRender.setTemplateByScriptId(_templateId);
		} else {
			tmplRender.setTemplateById(_templateId);
		}
        tmplRender.addCustomDataSource({
			format: render.DataSource.OBJECT,
			alias: "libPdf",
			data: {
				font: {
					times: getUrlFile('../font/times/times_src.ttf'),
					times_bold: getUrlFile('../font/times/times_bold.ttf'),
					times_italic: getUrlFile('../font/times/times_italic.ttf'),
					times_bolditalic: getUrlFile('../font/times/times_italic_bold.ttf'),
				},
				css: getContentsFile('../css/scv_pdf_print.css'),
				rowcol100: getRowWithNumColumn(100),
				rowcol50: getRowWithNumColumn(50),
			}
		});

		return tmplRender;
	}
	const renderTemplateWithXml = (printfile) => {
		try {
			let xmlPdfPath = `../xml/print/${printfile}.xml`;
			let xmlString = getContentsFile(xmlPdfPath);

			let tmplRender = render.create();

			tmplRender.addCustomDataSource({
				format: render.DataSource.OBJECT,
				alias: "libPdf",
				data: {
					font: {
						times: getUrlFile('../font/times/times_src.ttf'),
						times_bold: getUrlFile('../font/times/times_bold.ttf'),
						times_italic: getUrlFile('../font/times/times_italic.ttf'),
						times_bolditalic: getUrlFile('../font/times/times_italic_bold.ttf'),
					},
					css: getContentsFile('../css/scv_pdf_print.css')
				}
			});

			tmplRender.templateContent = xmlString;

			return tmplRender;
		} catch (err) {
			throw err.message;
		}
	}
	const renderTemplateByContentXml = (_contentsXml) => {
		try {
			let tmplRender = render.create();

			tmplRender.addCustomDataSource({
				format: render.DataSource.OBJECT,
				alias: "libPdf",
				data: {
					font: {
						times: getUrlFile('../font/times/times_src.ttf'),
						times_bold: getUrlFile('../font/times/times_bold.ttf'),
						times_italic: getUrlFile('../font/times/times_italic.ttf'),
						times_bolditalic: getUrlFile('../font/times/times_italic_bold.ttf'),
					},
					css: getContentsFile('../css/scv_pdf_print.css')
				}
			});

			tmplRender.templateContent = _contentsXml;

			return tmplRender;
		} catch (err) {
			throw err.message;
		}
	}

	const createImageByFileId = (_fileId, _options) => {
		if(!_fileId) return '';

		let tagImg = generateTagImageHtml(_fileId, _options.clientWidth, _options.clientHeight, _options.expectedWidth);
		return tagImg;
	}

	const createImageBySubsidiary = (_subsidiaryRec, _width) => {
		let logoId = _subsidiaryRec.getValue("logo");
		let imgWidth = _subsidiaryRec.getValue("custrecord_scv_img_width") || 100;
		let imgHeight = _subsidiaryRec.getValue("custrecord_scv_img_height") || 100;

		let tagImg = generateTagImageHtml(logoId, imgWidth, imgHeight, _width);
		return tagImg;
	}

	const generateTagImageHtml = (_logoId, _orgWidth, _orgHeight, _expectedWidth) =>{
		let srcLogo = getUrlFile(_logoId);
		let expectedHeight = _orgHeight;
		if(_expectedWidth) {
			let ratio = roundNumber(_expectedWidth / _orgWidth);
			_orgWidth = _expectedWidth;
			expectedHeight = roundNumber(_orgHeight * ratio);
		}

		let image = `<img src="${unReTextXML(srcLogo)}" alt="view" style="width: ${_expectedWidth}px; height: ${expectedHeight}px;" />`;
		return image;
	}

	const renderTableXML = (arrData, arrColumns, rowTotalCaption, cFontSize) => {
		let rowContent = getRowContentTable(arrData, arrColumns);
		let rowTotal = getRowTotalTable(arrData, arrColumns, rowTotalCaption);
		let xml = `<table class="border-table ${cFontSize}">`;
		xml += `<thead><tr>`;
		for(let column of arrColumns) {
			xml += `<td width="${column.width}"><p><b>${column.caption}</b></p></td>`;
		}
		xml += `</tr></thead>`;
		xml += `<tbody>`+ rowContent + rowTotal +`</tbody>`;
		xml += `</table>`;
		return xml;
	}

	const getRowTotalTable = (arrData, arrColumns, rowTotalCaption) => {
		let firstIndex = arrColumns.findIndex(e => e.isTotal === true);
		if(firstIndex == -1) return '';

		let colspan = firstIndex || 1;
		let rowTotal = `<tr>`;
		rowTotal += `<td class="align-center" colspan="${colspan}"><p><b>${rowTotalCaption || "Tổng cộng"}</b></p></td>`;
		arrColumns = arrColumns.slice(firstIndex, arrColumns.length);
		for(let column of arrColumns) {
			if(column.isTotal === true) {
				let total = arrData.reduce((a, b) => a + b[column.dataField], 0);
				rowTotal += `<td class="align-right"><p><b>${formatNumber(total)}</b></p></td>`;
			} else {
				rowTotal += `<td></td>`;
			}
		}
		rowTotal += `</tr>`;
		return rowTotal;
	}

	const getRowContentTable = (arrData, arrColumns) => {
		let rowContent = '';
		for(let objData of arrData) {
			rowContent += `<tr>`;
			for(let column of arrColumns) {
				if(column.formatNumber && typeof objData[column.dataField] === 'number') {
					let classes = column.class || "align-right";
					rowContent += `<td class="${classes}"><p>${formatNumber(objData[column.dataField])}</p></td>`;	
				} else {
					let classes = column.class || "align-left";
					rowContent += `<td class="${classes}"><p>${unReTextXML(objData[column.dataField])}</p></td>`;	
				}
			}
			rowContent += `</tr>`;
		}
		return rowContent;
	}

	const addCustomStyle = (_render) => {
		_render.addCustomDataSource({
			format: render.DataSource.OBJECT,
			alias: "libPdf",
			data: {
				font: {
					times: getUrlFile('../font/times/times_src.ttf'),
					times_bold: getUrlFile('../font/times/times_bold.ttf'),
					times_italic: getUrlFile('../font/times/times_italic.ttf'),
					times_bolditalic: getUrlFile('../font/times/times_italic_bold.ttf'),
				},
				css: getContentsFile('../css/scv_pdf_print.css'),
				rowcol100: getRowWithNumColumn(100),
				rowcol50: getRowWithNumColumn(50),
			}
		});
	}
	const getRowWithNumColumn = (_numCol) => {
		var width_percent = 100/_numCol;
		var contents = "<tr height='0%'>";
		for(let i = 0; i < _numCol; i++){
			contents += "<td width='" + width_percent + "%'></td>"
		}
		contents += "</tr>";

		return contents;
	}

	const getContentsFile = (_fileId) => {
		return file.load({id: _fileId}).getContents();
	}

	const getUrlFile = (_fileId) => {
		return file.load({id: _fileId}).url;
	}

	const roundNumber = (_number, _precision = 2) => {
		let precision = Math.pow(10, _precision);
		return Math.round(_number * precision) / precision;
	}

	const formatNumber = (_num, _fixed = 2) => {
		if(typeof _num === 'number' && _num % 1 !== 0) {
			_num = _num.toFixed(_fixed);
		}
		var parts = _num.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		return parts.join(",");
	}

	function unReTextXML(text) {
		var cus_name = text
		if(!!text && typeof text === "string") {
			cus_name = cus_name.replace(/&/gi, '&amp;');
			cus_name = cus_name.replace(/>/gi, "&gt;");
			cus_name = cus_name.replace(/</gi, "&lt;");
			cus_name = cus_name.replace(/'/g, "&apos;");
			cus_name = cus_name.replace(/"/g, "&quot;");
		}
		return cus_name;
	}
	const formatDataXMLWithObject = (obj) => {
		Object.keys(obj).forEach(ele => {
			let vla = obj[ele];
			if(vla){
				if(typeof vla == 'string'){
					if(vla.includes('&')) obj[ele] = vla.replace(/&/g, '&amp;');
					if(['null', 'undefined'].includes(vla)) obj[ele] = '';
				} 
			}
			else if(vla != 0) obj[ele] = '';
		});
		return obj
	}
	const formatNumberWithObject = (_inputObj) => {
		Object.keys(_inputObj).forEach(ele => {
			if(!!_inputObj[ele] && !isNaN(_inputObj[ele])){
				_inputObj[ele] = formatNumber(_inputObj[ele]);
			}
		});

		return _inputObj;
	}
	const createImageByCompany = (width) => {
		let companyInfo = config.load({type: config.Type.COMPANY_INFORMATION});
		let pagelogo = companyInfo.getValue("formlogo");
		let imgWidth = companyInfo.getValue("custrecord_scv_img_width") || 100;
		let imgHeight = companyInfo.getValue("custrecord_scv_img_height") || 100;
		let image = generateTagImageHtml(pagelogo, imgWidth, imgHeight, width);
		return image;
	}
	const createImageByBUCenter = (biz_center_id, width) => {
		let logoId = search.lookupFields({type: 'customrecord_cseg_scv_bu_center', id: biz_center_id,  columns: 'custrecord_scv_bu_logo'}).custrecord_scv_bu_logo[0]?.value;
		if(!logoId) return '';
		let imgWidth = 100;
		let imgHeight = 100;
		let tagImg = generateTagImageHtml(logoId, imgWidth, imgHeight, width);
		return tagImg;
	}
	const createImageByLocation = (locationId, width) => {
		let logoId = search.lookupFields({type: 'location', id: locationId,  columns: 'custrecord_scv_loc_image'}).custrecord_scv_loc_image[0]?.value;
		if(!logoId) return '';
		let imgWidth = 100;
		let imgHeight = 100;
		let tagImg = generateTagImageHtml(logoId, imgWidth, imgHeight, width);
		return tagImg;
	}
    return {
		initTemplateRender: initTemplateRender,
		renderTemplateWithXml: renderTemplateWithXml,
		renderTemplateByContentXml: renderTemplateByContentXml,
		formatNumber: formatNumber,
		formatNumberWithObject: formatNumberWithObject,
		formatDataXMLWithObject: formatDataXMLWithObject,
		addCustomStyle: addCustomStyle,
		getContentsFile: getContentsFile,
		getUrlFile: getUrlFile,
		createImageBySubsidiary: createImageBySubsidiary,
		createImageByFileId: createImageByFileId,
		renderTableXML: renderTableXML,
		roundNumber: roundNumber,
		createImageByCompany: createImageByCompany,
		createImageByBUCenter: createImageByBUCenter,
		createImageByLocation: createImageByLocation,
	};
    
});
