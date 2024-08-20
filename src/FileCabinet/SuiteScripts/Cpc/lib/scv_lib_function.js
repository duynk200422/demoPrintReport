 define(['N/record', 'N/search', 'N/format', 'N/url', 'N/query'],
/**
 * @param {record} record
 * @param {search} search
 */
function(record, search, format, url, query) {
	function setValue(newRecord, readRecord, newFields, readFields) {
    	var lFields = newFields.length;
    	for(var i = 0; i < lFields; i++) {
    		if(newRecord.getValue(newFields[i]) != undefined) {
    			var value = readRecord.getValue(readFields[i]);
    			value = reValue(value);
    			newRecord.setValue(newFields[i], value);
    		}
    	}
    }
	
	function setValueData(newRecord, newFields, data) {
    	var lFields = newFields.length;
    	var value;
    	for(var i = 0; i < lFields; i++) {
    		if(newRecord.getValue(newFields[i]) != undefined) {
    			value = data[i];
    			value = reValue(value);
    			newRecord.setValue(newFields[i], value);
    		}
    	}
    }
	
	function setSublistValue(newRecord, readRecord, newSublist, readSublist, newSublistFields, readSublistFields, line) {
    	var lFields = newSublistFields.length;
    	var value;
    	for(var i = 0; i < lFields; i++) {
    		value = newRecord.getSublistValue({sublistId: newSublist, fieldId: newSublistFields[i], line: line});
    		if(value != undefined) {
	    		value = readRecord.getSublistValue({sublistId: readSublist, fieldId: readSublistFields[i], line: line})
	    		value = reValue(value);
	    		newRecord.setSublistValue({sublistId: newSublist, fieldId: newSublistFields[i], line: line, value: value});
    		}
    	}
    }
	
	function setSublistValueDiff(newRecord, readRecord, newSublist, readSublist, newSublistFields, readSublistFields, line, lineRead) {
    	var lFields = newSublistFields.length;
    	var value;
    	for(var i = 0; i < lFields; i++) {
    		value = newRecord.getSublistValue({sublistId: newSublist, fieldId: newSublistFields[i], line: line});
    		if(value != undefined) {
	    		value = readRecord.getSublistValue({sublistId: readSublist, fieldId: readSublistFields[i], line: lineRead})
	    		value = reValue(value);
	    		newRecord.setSublistValue({sublistId: newSublist, fieldId: newSublistFields[i], line: line, value: value});
    		}
    	}
    }
	
	function setSublistValueData(newRecord, newSublist, newSublistFields, line, data) {
    	var lFields = newSublistFields.length;
    	var value;
    	for(var i = 0; i < lFields; i++) {
    		value = newRecord.getSublistValue({sublistId: newSublist, fieldId: newSublistFields[i], line: line});
    		if(value != undefined) {
    			value = data[i];
    			value = reValue(value);
	    		newRecord.setSublistValue({sublistId: newSublist, fieldId: newSublistFields[i], line: line, value: value});
    		}
    	}
    }
	
	function setSublistTextData(newRecord, newSublist, newSublistFields, line, data) {
    	var lFields = newSublistFields.length;
    	var value;
    	for(var i = 0; i < lFields; i++) {
    		value = newRecord.getSublistValue({sublistId: newSublist, fieldId: newSublistFields[i], line: line});
    		if(value != undefined) {
    			value = data[i];
    			value = reValue(value);
	    		newRecord.setSublistText({sublistId: newSublist, fieldId: newSublistFields[i], line: line, text: value});
    		}
    	}
    }
	
	function setCurrentSublistValue(newRecord, readRecord, newSublist, readSublist, newSublistFields, readSublistFields, line) {
    	var lFields = newSublistFields.length;
    	var value;
    	for(var i = 0; i < lFields; i++) {
    		value = newRecord.getCurrentSublistValue({sublistId: newSublist, fieldId: newSublistFields[i]});
    		if(value != undefined) {
	    		value = readRecord.getSublistValue({sublistId: readSublist, fieldId: readSublistFields[i], line: line})
	    		value = reValue(value);
	    		newRecord.setCurrentSublistValue({sublistId: newSublist, fieldId: newSublistFields[i], value: value});
    		}
    	}
    }
	
	function setCurrentSublistValueData(newRecord, newSublist, newSublistFields, data) {
    	var lFields = newSublistFields.length;
    	var value;
    	for(var i = 0; i < lFields; i++) {
    		value = newRecord.getCurrentSublistValue({sublistId: newSublist, fieldId: newSublistFields[i]});
    		if(value != undefined) {
    			value = data[i];
    			value = reValue(value);
    			newRecord.setCurrentSublistValue({sublistId: newSublist, fieldId: newSublistFields[i], value: reValue(value)});
    		}
    	}
    }
	
	function getObjFromArr(arr, id) {
		var lArr = arr.length;
		var obj = {};
		for(var ai = 0; ai < lArr; ai++) {
			if(arr[ai].id == id) {
				obj = arr[ai];
				break;
			}
		}
		return obj;
	}
	
	function getTranRecordType(idRelated) {
    	var recordType = null;
    	if(isContainValue(idRelated)) {
	    	var lkF = search.lookupFields({
	            type: search.Type.TRANSACTION, id: idRelated, columns: ['type', 'recordtype']
	        });
	    	recordType = lkF.recordtype;
    	}
		return recordType;
    }
	
	function getItemRecordType(id) {
    	var recordType = null;
    	if(isContainValue(id)) {
	    	var lkF = search.lookupFields({
	            type: search.Type.ITEM, id: id, columns: ['type', 'recordtype']
	        });
	    	recordType = lkF.recordtype;
    	}
		return recordType;
    }
	
	function getEntityType(entity){
	     var lkE = search.lookupFields({type: 'entity', id: entity, columns: ['recordtype']});
	     return lkE.recordtype;
	 }
	
	function lookFields(sType, id, columns) {
		var lkF;
		if(isContainValue(id)) {
			lkF = search.lookupFields({type: sType, id: id, columns: columns});
		} else {
			lkF = {};
		}
		return lkF;
	}
	
	function makePrefix(inStr, lOutStr, cAdd) {
		var endS = inStr.toString();
		var lInStr = endS.length;
		for(var i = lInStr; i < lOutStr; i++) {
			endS = cAdd + '' + endS;
        }
        return endS;
    }
	
	function getTextOption(options, value) {
    	var text = '';
    	var lOp = options.length;
    	for(var i = 0; i < lOp; i++) {
    		if(options[i].value == value) {
    			text = options[i].text;
    			break;
    		}
    	}
    	return text;
    }
	
	function getFirstOption(options) {
		var fValue = '';
		var temp;
		if(isContainValue(options)) {
			var lOp = options.length;
			for(var i = 0; i < lOp; i++) {
				temp = options[i].value
				if(isContainValue(temp) && temp != '-1') {
					fValue = temp;
					break;
				}
				
			}
		}
		return fValue;
	}
	
	function isContainValue(value) {
		var isContain = false;
		if(value != undefined && value != null && value !== '') {
			if(util.isArray(value)) {
				if(value.length > 0) {
					isContain = true;
				}
			} else {
				isContain = true;
			}
		}
		return isContain;
	}
	
	function reValue(value) {
		var r = value;
		if(r == undefined || r == null) {
			r = '';
		}
		return r;
	}
	
	function createSearch(arr, type, columns, filters) {
    	var s = search.create({type: type, columns: columns});
    	if(isContainValue(filters)) {
    		s.filters = filters;
    	}
    	return s;
    }
	
	function pushArrSearch(arr, s, type, pageSize, columns) {
    	var r = s.runPaged({pageSize: pageSize});
		var numPage = r.pageRanges.length;
		var searchPage;
		var tempData;
		var numTemp;
		var lCol = columns.length;
		var arrTemp;
		for(var np = 0; np < numPage; np++) {
			searchPage = r.fetch({index : np });
    		tempData = searchPage.data;
    		if(tempData != undefined && tempData != null && tempData != '') {
    			numTemp = tempData.length;
    			for(var i = 0; i < numTemp; i++) {
    				arrTemp = [];
    				for(var j = 0; j < lCol; j++) {
    					arrTemp.push(tempData[i].getValue(columns[j]));
    				}
    				arr.push(arrTemp);
	        	}
    		}
		}
    } 
	
	function setDisableFields(form, fields) {
		var lF = fields.length;
		var field;
		for(var i = 0; i < lF; i++) {
			field = form.getField(fields[i]);
			if(isContainValue(field)) {
				field.updateDisplayType({displayType : 'DISABLED'});
			}
		}
	}
	
	function setDisableSublistField(form, sl, fields) {
		var lF = fields.length;
		var sublist = form.getSublist({id : sl});
		var field;
		for(var i = 0; i < lF; i++) {
			field = sublist.getField({id : fields[i]});
			if(isContainValue(field)) {
				field.updateDisplayType({displayType : 'DISABLED'});
			}
		}
    }
	
	function addButtonBack(form, id, type) {
        var viewUrl = url.resolveRecord({
        	recordType: type,
        	recordId: id,
        	isEditMode: false
        });
        var addButton = form.addButton({id: 'custpage_bt_back', label: 'Back', functionName: "window.location.replace('" + viewUrl + "');"});
    }
	
	function redirect(id, type) {
		
	}
	
	function addButonCall(form, btid, label, func) {
		var addButton = form.addButton({id: btid, label: label, functionName: func});
	}
	
	function isExists(arr, id) {
		var isExists = false;
		var lArr = arr.length;
		for(var i = 0; i < lArr; i++) {
			if(arr[i] == id) {
				isExists = true;
				break;
			}
		}
		return isExists;
	}
	
	function isExistsObj(arr, id) {
		var isExists = false;
		var lArr = arr.length;
		for(var i = 0; i < lArr; i++) {
			if(arr[i].id == id) {
				isExists = true;
				break;
			}
		}
		return isExists;
	}
	
	function pushArr(arr, id) {
		if(isExists(arr, id) == false) {
			arr.push(id);
		}
	}
	
	function makeStringWithComma(value, comma, plus) {
    	var cL = '';
    	if(isContainValue(value)) {
	    	var spS = value.split(comma);
	    	var lC = spS.length;
	    	for(var i = 0; i < lC; i++) {
				if(i >  0) {
					cL = cL + plus + spS[i];
				} else {
					cL = spS[i];
				}
			}
    	}
    	return cL;
    }
	
	function setValueDataS1(newRecord, newFields, data) {
    	var lFields = newFields.length;
    	for(var i = 0; i < lFields; i++) {
    		if(newRecord.getFieldValue(newFields[i]) != undefined) {
    			newRecord.setFieldValue(newFields[i], reValue(data[i]));
    		}
    	}
    }
	
	function setValueDataIfNull(newRecord, newFields, data) {
    	var lFields = newFields.length;
    	for(var i = 0; i < lFields; i++) {
    		if(isContainValue(newRecord.getValue(newFields[i])) == false) {
    			newRecord.setValue(newFields[i], reValue(data[i]));
    		}
    	}
    }
	
	function setRecordValues(record, dataDict) {
		Object.keys(dataDict).forEach(function(key) {
			record.setValue(key, dataDict[key]);
		});
	}
	
	function reText(text) {
    	var cus_name = text
    	if(typeof text == 'string') {
	        cus_name = cus_name.replace(/&/gi, '&amp;');
	        cus_name = cus_name.replace(/>/gi, "&gt;");
			cus_name = cus_name.replace(/</gi, "&lt;");
	        cus_name = cus_name.replace(/'/g, "&apos;");
			cus_name = cus_name.replace(/"/g, "&quot;");
			cus_name = cus_name.replace(//g, "");
    	}
		return cus_name;
    }
	
	function convertDateStringExcel(dInput) {
		var dOutput = '';
		if(isContainValue(dInput)) {
			dOutput = dInput.getFullYear() + '-' + makePrefix(dInput.getMonth() + 1, 2, '0') + '-' + makePrefix(dInput.getDate(), 2, '0');
		}
		return dOutput;
	}
	
	function addButtonPrintPreview(form, internalId, type, templateid, label, reasion) {
		var createPdfUrl = url.resolveScript({
            scriptId: 'customscript_scv_sl_draft_einvoice',
            deploymentId: 'customdeploy_scv_sl_draft_einvoice',
            returnExternalUrl: false
        });		
        createPdfUrl += '&id=' + internalId + '&type=' + type + '&templateid=' + templateid + '&reasion=' + reasion;        
        var addButton = form.addButton({
            id: 'custpage_bt_preview',
            label: label,
            functionName: "window.open('" + createPdfUrl + "');"
        });

    }
	
	function goToPreviewPrint(internalId, type, templateid, reasion) {
		var createPdfUrl = url.resolveScript({
	        scriptId: 'customscript_scv_sl_draft_einvoice',
	        deploymentId: 'customdeploy_scv_sl_draft_einvoice',
	        returnExternalUrl: false
    	});		
		createPdfUrl += '&id=' + internalId + '&type=' + type + '&templateid=' + templateid + '&reasion=' + reasion;
		window.open(createPdfUrl);
	}
	
	function getDateNow() {
    	var now = new Date();
    	var sdate = now.toString();
    	var p1 = sdate.substring(28,29);
    	var p2 = sdate.substring(29,31);
    	var tcurr = 0;
    	if(p1 == '-') {
    		tcurr = tcurr + 1 * p2;
    	} else {
    		tcurr = tcurr - 1 * p2;
    	}
		var date = new Date(now.getTime() + (tcurr * 3600000));
		return date;
    }
	
	function setSublistTextData(newRecord, newSublist, newSublistFields, line, data) {
    	var lFields = newSublistFields.length;
    	var value;
    	for(var i = 0; i < lFields; i++) {
    		value = newRecord.getSublistValue({sublistId: newSublist, fieldId: newSublistFields[i], line: line});
    		if(value != undefined) {
    			value = data[i];
    			value = reValue(value);
	    		newRecord.setSublistText({sublistId: newSublist, fieldId: newSublistFields[i], line: line, text: value});
    		}
    	}
    }
	
	function setSublistValueDataDiff(newRecord, newSublist, newSublistFields, line, data) {
    	var lFields = newSublistFields.length;
    	var value;
    	for(var i = 0; i < lFields; i++) {
    		value = newRecord.getSublistValue({sublistId: newSublist, fieldId: newSublistFields[i], line: line});
    		if(value != undefined) {
    			value = data[i];
    			value = reValue(value);
	    		newRecord.setSublistValue({sublistId: newSublist, fieldId: newSublistFields[i], line: line, value: value});
    		}
    	}
    }
	
	function isObject(obj) {
	  var type = typeof obj;
	  return type === 'function' || type === 'object' && !!obj;
	}
	
	function iterationCopy(src) {
	  var target = {};
	  for (var prop in src) {
	    if (src.hasOwnProperty(prop)) {
	      if (isObject(src[prop])) {
	        target[prop] = iterationCopy(src[prop]);
	      } else {
	        target[prop] = src[prop];
	      }
	    }
	  }
	  return target;
	}
	
	function getDateGMT(time, gmt) {
		var now = new Date(time);
    	var sdate = now.toString();
    	var p1 = sdate.substring(28,29);
    	var p2 = sdate.substring(29,31);
    	var tcurr = gmt;
    	if(p1 == '-') {
    		tcurr = tcurr + 1 * p2;
    	} else {
    		tcurr = tcurr - 1 * p2;
    	}
		var date = new Date(now.getTime() + (tcurr * 3600000));
		return date;
	}
	
	function getDateGMTWithDate(date, gmt) {
		var sdate = date.toString();
    	var p1 = sdate.substring(28,29);
    	var p2 = sdate.substring(29,31);
    	var tcurr = gmt;
    	if(p1 == '-') {
    		tcurr = tcurr + 1 * p2;
    	} else {
    		tcurr = tcurr - 1 * p2;
    	}
		var dategmt = new Date(date.getTime() + (tcurr * 3600000));
		return dategmt;
	}
	
	function getTimeFromDate(date, gmt) {
		var sdate = date.toString();
    	var p1 = sdate.substring(28,29);
    	var p2 = sdate.substring(29,31);
    	var tcurr = gmt;
    	if(p1 == '-') {
    		tcurr = tcurr + 1 * p2;
    	} else {
    		tcurr = tcurr - 1 * p2;
    	}
    	var time = date.getTime() - tcurr * 3600000;
    	return time;
	}
	
	function getTimeFromDateAndTime(date, hourminutes, gmt) {
		var sdate = date.toString();
    	var p1 = sdate.substring(28,29);
    	var p2 = sdate.substring(29,31);
    	var tcurr = gmt;
    	if(p1 == '-') {
    		tcurr = tcurr + 1 * p2;
    	} else {
    		tcurr = tcurr - 1 * p2;
    	}
    	var time = date.getTime() - tcurr * 3600000;
    	if(isContainValue(hourminutes)) {
    		time = time + (hourminutes.getHours() * 60 + hourminutes.getMinutes()) * 60000;
    	}
    	return time;
	}
	
	function newDate(tempdate) {
		tempdate = tempdate.split('-');
		if(tempdate.length == 3) {
			tempdate = new Date(tempdate[0], (tempdate[1] * 1 - 1), tempdate[2]);
		} else {
			tempdate = '';
		}
		return tempdate;
	}
	
	function newTime(tempdate) {
		var hm = tempdate.split(':');
		if(hm.length == 2) {
			tempdate = new Date();
			tempdate.setHours(hm[0]);
			tempdate.setMinutes(hm[1]);
		} else {
			tempdate = '';
		}
		return tempdate;
	}
	
	function sortArayOfObject(arrayOfObjects, field) {
    	arrayOfObjects.sort(function(a,b) {
    	    var x = a[field];
    	    var y = b[field];
    	    if(isContainValue(x)) {
    	    	x = x.toLowerCase();
    	    }
    	    if(isContainValue(y)) {
    	    	y = y.toLowerCase();
    	    }
    	    return x < y ? -1 : x > y ? 1 : 0;
    	});
    }
	
	function sortArayOfObjectFlowFields(arrayOfObjects, fields) {
    	arrayOfObjects.sort(function(a,b) {
    		var x;
    	    var y;
    		var lF = fields.length;
    		var vl = 0;
    		for(var i = 0; i < lF; i++) {
    			if(vl = 0) {
	    			x = a[field[i]].toLowerCase();
	        	    y = b[field[i]].toLowerCase();
	        	    if(x < y) {
	        	    	vl = -1;
	        	    } else if(x > y) {
	        	    	vl = 1;
	        	    }
    			}
    		}    	    
    	    return vl;
    	});
    }
	
	function countWeekendDays(d0, d1) {
		  var ndays = 1 + Math.round((d1.getTime() - d0.getTime()) / (24*3600*1000));
		  var nsaturdays = Math.floor((d0.getDay()+ndays) / 7 );
		  return 2 * nsaturdays + (d0.getDay() == 0) - (d1.getDay() == 6);
		}
		
	function getDuedatePlusWendkend(invoice_date, daysuntilnetdue) {
    	if(daysuntilnetdue > 0) {
    		var countW = Math.floor(daysuntilnetdue/5);
			var dayMod = (daysuntilnetdue % 5);
			invoice_date.setDate(invoice_date.getDate() + 7 * countW);
			daysuntilnetdue = dayMod ;
	    	var daydate = invoice_date.getDate();
	    	var orgdate = new Date(invoice_date);
	    	invoice_date.setDate(daydate + daysuntilnetdue);
			var countWD = countWeekendDays(orgdate, invoice_date);
			if(countWD > 0) {
				var day = invoice_date.getDay();
				daydate = invoice_date.getDate();
				if(day == 0) {
					invoice_date.setDate(daydate + 1);
					countWD = countWD - 1;
				} else if(day == 6){
					invoice_date.setDate(daydate + 2);
					countWD = countWD - 2;
				}
				if(countWD > 0) {
					invoice_date = getDuedatePlusWendkend(invoice_date, countWD);
				}
			} 
    	}
		return invoice_date;
    }
	
	function pushFilter(f, field, operator, value) {
		if(lbf.isContainValue(value)) {
			f.push('and');
			f.push([field, field, value]);
		}
	} 
	
	function pushFilterNone(f, field, operator, value) {
		if(lbf.isContainValue(value) == false) {
			value = '@NONE@';
		}
		f.push('and');
		f.push([field, field, value]);
	}
	
	function iter(rec, listName, cb){
	    var lim = rec.getLineCount({sublistId:listName});
	    var i = 0;
	    var getV = function (fld){
	        return rec.getSublistValue({sublistId:listName, fieldId:fld, line:i});
	    };
	    var setV = function(fld, val) {
	    	var isDynamic = rec.isDynamic;
	    	if (isDynamic) {
	    		rec.selectLine({sublistId: listName, line: i});
	    		rec.setCurrentSublistValue({sublistId: listName, fieldId: fld, value: val});
	    		rec.commitLine({sublistId: listName});
	    	} else {
	    		rec.setSublistValue({sublistId:listName, fieldId:fld, line:i, value:val});
	    	}
	        
	    };
	    for(; i< lim; i++){
	        cb(i, getV, setV);
	    }
	}

	function onShowLoading(value){
		if(value==true){
			jQuery('#pageContainer').append('<div id="loadingIndicator" style="position: fixed; top: 0; left: 0; height: 100%; width: 100%; z-index: 9999; background-color:rgba(255, 255, 255, 0.85);"><img class="global-loading-indicator" src="/core/media/media.nl?id=39258&c=5794421_SB1&h=AcmoT6WFNxKVEIO_3wJEImEdq3RiU7OijPksR_7k2bmSzLeP&fcts=20201130181753&whence=" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)"></div>');
		}else{
			jQuery("#loadingIndicator").remove();
		}
	}

	function isNumber(value) {
		return /^-?[\d.]+(?:e-?\d+)?$/.test(value);
	}
	
	function isLado(subsidiary) {
    	var recSub = record.load({type: 'subsidiary', id: subsidiary});
    	var parent = recSub.getValue('parent');
    	var isLado = false;
    	if(subsidiary == 10 || parent == 10 || parent == 11 || parent == 15 || parent == 18) {
    		isLado = true;
    	}
    	return isLado;
    }
	
	function getObjFromArrField(arr, field, value) {
		var lArr = arr.length;
		var obj = {}, isGet;
		var lField = field.length;
		for(var ai = 0; ai < lArr; ai++) {
			isGet = true;
			for(var aj = 0; aj < lField; aj++) {
				if(arr[ai][field[aj]] != value[aj]) {
					isGet = false;
					break;
				}
			}
			if(isGet) {
				obj = arr[ai];
				break;
			}
		}
		return obj;
	}

	function onGroupByArray(_arrObj,_grp){
		var arrRS = [];
		for(var i = 0; i < _arrObj.length; i++){
			var obj = {};
			for(var j = 0; j < _grp.length; j++){
				obj[_grp[j]] = _arrObj[i][_grp[j]];
			}
			if(!isDuplicate(arrRS,obj)){
				arrRS.push(obj);
			}
		}
		return arrRS;
	}

	function isDuplicate(_arrObj, _obj) {
		if(_arrObj.length==0) return false;
		var cntElementSame = 0;
		var propName = Object.keys(_obj);
		for (var i = 0; i < _arrObj.length; i++) {
			cntElementSame=0;
			for (var j = 0; j < propName.length; j++) {
				if (_arrObj[i][propName[j]] == _obj[propName[j]]) {
					cntElementSame++;
				}
			}
			if(cntElementSame==propName.length){
				break;
			}
		}
		return (cntElementSame==propName.length) ? true : false;
	}
	
	function multiple(a, b) {
		var x1 = a.toString().split('\.');
		var x2 = b.toString().split('\.');
		var y1 = x1[1], y2 = x2[1];		
		var l1 = 1, l2 = 1;
		if(isContainValue(y1)) {
			l1 = Math.pow(10, y1.length);
		}
		if(isContainValue(y2)) {
			l2 = Math.pow(10, y2.length);
		}
		return (a * l1) * (b * l2) / (l1 * l2);
	}
	
	function removeSSStringDate(inputS) {
    	var r = '';
    	var t1 = inputS.slice(-3);
    	var lis = inputS.length;
    	var t2 = inputS.substring(0, lis - 3);
    	var t3 = t2.slice(-2);
    	if(isNaN(t3)) {
    		t3 = t2.slice(-1);
    	}
    	if(isNaN(t3)) {
    		t3 = '';
    	}
    	lis = t2.length;
    	r = t2.substring(0, lis - 1 - t3.length) + t1;
    	return r;
    }
	/*
	* @param {Form} scriptContext.form - Current form
	 */
	function pinHeaderSublist(_form){
		_form.addField({
			id: 'custpage_stickyheaders_script',
			label: 'Hidden',
			type: "inlinehtml"
		}).defaultValue = '<script>' +
			'(function($){' +
			'$(function($, undefined){' +
			'$(".uir-machine-table-container")' + // All NetSuite tables are wrapped in this CSS class
			'.css("max-height", "70vh")' +
			// Make header row sticky.
			'.bind("scroll", (event) => {' +
			'$(event.target).find(".uir-machine-headerrow > td,.uir-list-headerrow > td")' +
			'.css({' +
			'"transform": `translate(0, ${event.target.scrollTop}px)`,' +
			'"z-index": 1,' + // See Note #1 below
			//'"z-index": "9999",' + // See Note #1 below
			'"position": "relative"' +
			'});' +
			'})' +
			// Make floating action bar in edit mode sticky.
			'.bind("scroll", (event) => {' +
			'$(".machineButtonRow > table")' +
			'.css("transform", `translate(${event.target.scrollLeft}px)`);' +
			'});' +
			'});' +
			'})(jQuery);' +
			'</script>';
	}

	function getObjSetupReportByKeyId (_keyId) {
		var arrColQuery = [
			"id", "custrecord_scv_setup_rpt_key", "name", "custrecord_scv_setup_rpt_description",
			"custrecord_scv_setup_rpt_val_text_1", "custrecord_scv_setup_rpt_val_text_2", "custrecord_scv_setup_rpt_val_text_3",
			"custrecord_scv_setup_rpt_val_text_4", "custrecord_scv_setup_rpt_val_text_5", "custrecord_scv_setup_rpt_val_num_1",
			"custrecord_scv_setup_rpt_val_num_2", "custrecord_scv_setup_rpt_val_num_3", "custrecord_scv_setup_rpt_val_num_4",
			"custrecord_scv_setup_rpt_val_num_5", "custrecord_scv_setup_rpt_val_chk_1", "custrecord_scv_setup_rpt_val_chk_2",
			"custrecord_scv_setup_rpt_val_chk_3", "custrecord_scv_setup_rpt_val_chk_4", "custrecord_scv_setup_rpt_val_chk_5"
		]
		var sqlQuery = "SELECT " + arrColQuery.join(",") + " FROM customrecord_scv_setup_report WHERE isinactive = 'F' AND custrecord_scv_setup_rpt_key = '" + _keyId +"' ";
        var resultSearch = query.runSuiteQL({
            query: sqlQuery
        });
        resultSearch = resultSearch.asMappedResults();
        
        var objRes = {
            id: "",
        };
        if(resultSearch.length > 0){
            objRes = resultSearch[0];
            objRes.url = urlSetupReport = url.resolveRecord({
                recordType: 'customrecord_scv_setup_report',
                recordId: objRes.id
            });
        }

        return objRes;
    }

	function addFieldGroup(_form, _id,_label){
		var _obj = {id: _id, label: _label}

		_form.addFieldGroup(_obj);

		return _obj;
	}

	function uuidv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}

	function calcTotalResult (_objTotal, _objDetail, _arrKey){
		for(var i = 0; i < _arrKey.length; i++){
			var keyId = _arrKey[i];

			_objTotal[keyId] = (_objTotal[keyId]||0) * 1 + (_objDetail[keyId]||0) * 1;
		}

		return _objTotal;
	}

	function genUUIDv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}

	function callQuery(queryString, params) {
		var params = params || [];
		var result = {response: null, error: null, isSuccess: false};
		var arrResults = [];
		try {
			var queryResults = query.runSuiteQLPaged({query: queryString, params : params,pageSize: 1000}).iterator();
			queryResults.each(function (page) {
				var objPage = page.value.data.iterator();
				objPage.each(function (row) {
					arrResults.push(row.value.asMap());
					return true;
				});
				return true;
			});
			if (arrResults.length > 0) {
				result.response = arrResults;
				result.isSuccess = true;
			} else {
				result.error = 'error calling query';
			}
		} catch (err) {
			result.error = err;
		}
		return result;
	}

    return {
    	setValue: setValue,
    	setValueData: setValueData,
    	setSublistValue: setSublistValue,
    	setSublistValueDiff: setSublistValueDiff,
    	setSublistValueData: setSublistValueData,
    	setSublistTextData: setSublistTextData,
    	setCurrentSublistValue: setCurrentSublistValue,
    	setCurrentSublistValueData: setCurrentSublistValueData,
    	getObjFromArr: getObjFromArr,
    	getTranRecordType: getTranRecordType,
    	getItemRecordType: getItemRecordType,
    	getEntityType: getEntityType,
    	lookFields: lookFields,
    	makePrefix: makePrefix,
    	getTextOption: getTextOption,
    	getFirstOption: getFirstOption,
    	isContainValue: isContainValue,
    	reValue: reValue,
    	createSearch: createSearch,
    	pushArrSearch: pushArrSearch,
    	setDisableFields: setDisableFields,
    	setDisableSublistField: setDisableSublistField,
    	addButtonBack: addButtonBack,
    	isExists: isExists,
    	isExistsObj: isExistsObj,
    	pushArr: pushArr,
    	makeStringWithComma: makeStringWithComma,
    	setValueDataS1: setValueDataS1,
    	setValueDataIfNull: setValueDataIfNull,
    	reText: reText,
    	convertDateStringExcel: convertDateStringExcel,
    	addButtonPrintPreview: addButtonPrintPreview,
    	goToPreviewPrint: goToPreviewPrint,
    	getDateNow: getDateNow,
    	setSublistTextData: setSublistTextData,
    	iterationCopy: iterationCopy,
    	getDateGMT: getDateGMT,
    	getDateGMTWithDate: getDateGMTWithDate,
    	getTimeFromDate: getTimeFromDate,
    	getTimeFromDateAndTime: getTimeFromDateAndTime,
    	sortArayOfObject: sortArayOfObject,
    	countWeekendDays: countWeekendDays,
    	getDuedatePlusWendkend: getDuedatePlusWendkend,
    	pushFilter: pushFilter,
    	pushFilterNone: pushFilterNone,
    	newDate: newDate,
    	newTime: newTime,
    	setRecordValues: setRecordValues,
    	iter:iter,
		onShowLoading: onShowLoading,
		isNumber: isNumber,
    	isLado: isLado,
    	getObjFromArrField: getObjFromArrField,
		onGroupByArray: onGroupByArray,
		isDuplicate: isDuplicate,
    	multiple: multiple,
    	removeSSStringDate: removeSSStringDate,
		pinHeaderSublist: pinHeaderSublist,
		getObjSetupReportByKeyId: getObjSetupReportByKeyId,
		addFieldGroup: addFieldGroup,
		uuidv4: uuidv4,
		calcTotalResult: calcTotalResult,
		genUUIDv4: genUUIDv4,
		callQuery : callQuery
    };
    
});