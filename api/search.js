"use strict";
var items = [
{"harud.c.capi" : "harud/c/capi.html"},
{"harud.c.capi.HPDF_New" : "harud/c/capi/HPDF_New.html"},
{"harud.c.consts" : "harud/c/consts.html"},
{"harud.c.types" : "harud/c/types.html"},
{"harud.c.types.HPDF_STATUS" : "harud/c/types/HPDF_STATUS.html"},
{"harud.c.types.HPDF_CID" : "harud/c/types/HPDF_CID.html"},
{"harud.c.types.Point" : "harud/c/types/Point.html"},
{"harud.c.types.HaruLineCap" : "harud/c/types/HaruLineCap.html"},
{"harud.c.types.HaruLineJoin" : "harud/c/types/HaruLineJoin.html"},
{"harud.c.types.HaruTextRenderingMode" : "harud/c/types/HaruTextRenderingMode.html"},
{"harud.c.types.HaruTransitionStyle" : "harud/c/types/HaruTransitionStyle.html"},
{"harud.c.types.Permission" : "harud/c/types/Permission.html"},
{"harud.c.types.GMode" : "harud/c/types/GMode.html"},
{"harud.c" : "harud/c.html"},
{"harud.doc" : "harud/doc.html"},
{"harud.doc.Doc" : "harud/doc/Doc.html"},
{"harud.doc.Doc.this" : "harud/doc/Doc.this.html"},
{"harud.doc.Doc.this" : "harud/doc/Doc.this.html"},
{"harud.doc.Doc.saveToFile" : "harud/doc/Doc.saveToFile.html"},
{"harud.doc.Doc.saveToStream" : "harud/doc/Doc.saveToStream.html"},
{"harud.doc.Doc.getStreamSize" : "harud/doc/Doc.getStreamSize.html"},
{"harud.doc.Doc.readFromStream" : "harud/doc/Doc.readFromStream.html"},
{"harud.doc.Doc.resetStream" : "harud/doc/Doc.resetStream.html"},
{"harud.doc.Doc.hasDoc" : "harud/doc/Doc.hasDoc.html"},
{"harud.doc.Doc.setErrorHandler" : "harud/doc/Doc.setErrorHandler.html"},
{"harud.doc.Doc.getError" : "harud/doc/Doc.getError.html"},
{"harud.doc.Doc.resetError" : "harud/doc/Doc.resetError.html"},
{"harud.doc.Doc.setPagesConfiguration" : "harud/doc/Doc.setPagesConfiguration.html"},
{"harud.doc.Doc.pageLayout" : "harud/doc/Doc.pageLayout.html"},
{"harud.doc.Doc.pageLayout" : "harud/doc/Doc.pageLayout.html"},
{"harud.doc.Doc.pageMode" : "harud/doc/Doc.pageMode.html"},
{"harud.doc.Doc.pageMode" : "harud/doc/Doc.pageMode.html"},
{"harud.doc.Doc.setOpenAction" : "harud/doc/Doc.setOpenAction.html"},
{"harud.doc.Doc.getCurrentPage" : "harud/doc/Doc.getCurrentPage.html"},
{"harud.doc.Doc.addPage" : "harud/doc/Doc.addPage.html"},
{"harud.doc.Doc.insertPage" : "harud/doc/Doc.insertPage.html"},
{"harud.doc.Doc.getFont" : "harud/doc/Doc.getFont.html"},
{"harud.doc.Doc.getFont" : "harud/doc/Doc.getFont.html"},
{"harud.doc.Doc.loadType1FontFromFile" : "harud/doc/Doc.loadType1FontFromFile.html"},
{"harud.doc.Doc.loadTTFontFromFile" : "harud/doc/Doc.loadTTFontFromFile.html"},
{"harud.doc.Doc.loadTTFontFromFile" : "harud/doc/Doc.loadTTFontFromFile.html"},
{"harud.doc.Doc.addPageLabel" : "harud/doc/Doc.addPageLabel.html"},
{"harud.doc.Doc.useJPFonts" : "harud/doc/Doc.useJPFonts.html"},
{"harud.doc.Doc.useKRFonts" : "harud/doc/Doc.useKRFonts.html"},
{"harud.doc.Doc.useCNSFonts" : "harud/doc/Doc.useCNSFonts.html"},
{"harud.doc.Doc.useCNTFonts" : "harud/doc/Doc.useCNTFonts.html"},
{"harud.doc.Doc.getEncoder" : "harud/doc/Doc.getEncoder.html"},
{"harud.doc.Doc.currentEncoder" : "harud/doc/Doc.currentEncoder.html"},
{"harud.doc.Doc.setCurrentEncoderByName" : "harud/doc/Doc.setCurrentEncoderByName.html"},
{"harud.doc.Doc.useJPEncodings" : "harud/doc/Doc.useJPEncodings.html"},
{"harud.doc.Doc.useKREncodings" : "harud/doc/Doc.useKREncodings.html"},
{"harud.doc.Doc.useCNSEncodings" : "harud/doc/Doc.useCNSEncodings.html"},
{"harud.doc.Doc.useCNTEncodings" : "harud/doc/Doc.useCNTEncodings.html"},
{"harud.doc.Doc.createOutline" : "harud/doc/Doc.createOutline.html"},
{"harud.doc.Doc.loadPngImageFromFile" : "harud/doc/Doc.loadPngImageFromFile.html"},
{"harud.doc.Doc.loadRawImageFromFile" : "harud/doc/Doc.loadRawImageFromFile.html"},
{"harud.doc.Doc.loadRawImageFromMem" : "harud/doc/Doc.loadRawImageFromMem.html"},
{"harud.doc.Doc.loadJpegImageFromFile" : "harud/doc/Doc.loadJpegImageFromFile.html"},
{"harud.doc.Doc.setInfoAttr" : "harud/doc/Doc.setInfoAttr.html"},
{"harud.doc.Doc.getInfoAttr" : "harud/doc/Doc.getInfoAttr.html"},
{"harud.doc.Doc.setInfoDateAttr" : "harud/doc/Doc.setInfoDateAttr.html"},
{"harud.doc.Doc.setPassword" : "harud/doc/Doc.setPassword.html"},
{"harud.doc.Doc.permission" : "harud/doc/Doc.permission.html"},
{"harud.doc.Doc.setEncryptionMode" : "harud/doc/Doc.setEncryptionMode.html"},
{"harud.doc.Doc.compressionMode" : "harud/doc/Doc.compressionMode.html"},
{"harud.doc.getVersion" : "harud/doc/getVersion.html"},
{"harud.annotation" : "harud/annotation.html"},
{"harud.encoder" : "harud/encoder.html"},
{"harud.error" : "harud/error.html"},
{"harud.error.getErrorDescription" : "harud/error/getErrorDescription.html"},
{"harud.error.HarudException" : "harud/error/HarudException.html"},
{"harud.font" : "harud/font.html"},
{"harud.page" : "harud/page.html"},
{"harud.page.Page" : "harud/page/Page.html"},
{"harud.page.Page.width" : "harud/page/Page.width.html"},
{"harud.page.Page.width" : "harud/page/Page.width.html"},
{"harud.page.Page.height" : "harud/page/Page.height.html"},
{"harud.page.Page.height" : "harud/page/Page.height.html"},
{"harud.page.Page.setSize" : "harud/page/Page.setSize.html"},
{"harud.page.Page.setRotate" : "harud/page/Page.setRotate.html"},
{"harud.page.Page.createDestination" : "harud/page/Page.createDestination.html"},
{"harud.page.Page.createTextAnnot" : "harud/page/Page.createTextAnnot.html"},
{"harud.page.Page.createLinkAnnot" : "harud/page/Page.createLinkAnnot.html"},
{"harud.page.Page.createURILinkAnnot" : "harud/page/Page.createURILinkAnnot.html"},
{"harud.page.Page.textWidth" : "harud/page/Page.textWidth.html"},
{"harud.page.Page.measureText" : "harud/page/Page.measureText.html"},
{"harud.page.Page.graphicMode" : "harud/page/Page.graphicMode.html"},
{"harud.page.Page.currentPos" : "harud/page/Page.currentPos.html"},
{"harud.page.Page.currentTextPos" : "harud/page/Page.currentTextPos.html"},
{"harud.page.Page.currentFont" : "harud/page/Page.currentFont.html"},
{"harud.page.Page.currentFontSize" : "harud/page/Page.currentFontSize.html"},
{"harud.page.Page.transMatrix" : "harud/page/Page.transMatrix.html"},
{"harud.page.Page.lineCap" : "harud/page/Page.lineCap.html"},
{"harud.page.Page.lineCap" : "harud/page/Page.lineCap.html"},
{"harud.page.Page.lineJoin" : "harud/page/Page.lineJoin.html"},
{"harud.page.Page.lineJoin" : "harud/page/Page.lineJoin.html"},
{"harud.page.Page.miterLimit" : "harud/page/Page.miterLimit.html"},
{"harud.page.Page.miterLimit" : "harud/page/Page.miterLimit.html"},
{"harud.page.Page.getDash" : "harud/page/Page.getDash.html"},
{"harud.page.Page.setDash" : "harud/page/Page.setDash.html"},
{"harud.page.Page.setSolid" : "harud/page/Page.setSolid.html"},
{"harud.page.Page.setDotted" : "harud/page/Page.setDotted.html"},
{"harud.page.Page.setDashDashDot" : "harud/page/Page.setDashDashDot.html"},
{"harud.page.Page.setDashDot" : "harud/page/Page.setDashDot.html"},
{"harud.page.Page.setDashed" : "harud/page/Page.setDashed.html"},
{"harud.page.Page.flat" : "harud/page/Page.flat.html"},
{"harud.page.Page.charSpace" : "harud/page/Page.charSpace.html"},
{"harud.page.Page.charSpace" : "harud/page/Page.charSpace.html"},
{"harud.page.Page.wordSpace" : "harud/page/Page.wordSpace.html"},
{"harud.page.Page.wordSpace" : "harud/page/Page.wordSpace.html"},
{"harud.page.Page.horizontalScalling" : "harud/page/Page.horizontalScalling.html"},
{"harud.page.Page.horizontalScalling" : "harud/page/Page.horizontalScalling.html"},
{"harud.page.Page.textLeading" : "harud/page/Page.textLeading.html"},
{"harud.page.Page.textLeading" : "harud/page/Page.textLeading.html"},
{"harud.page.Page.textRenderingMode" : "harud/page/Page.textRenderingMode.html"},
{"harud.page.Page.textRenderingMode" : "harud/page/Page.textRenderingMode.html"},
{"harud.page.Page.textRise" : "harud/page/Page.textRise.html"},
{"harud.page.Page.textRise" : "harud/page/Page.textRise.html"},
{"harud.page.Page.getRGBFill" : "harud/page/Page.getRGBFill.html"},
{"harud.page.Page.setRGBFill" : "harud/page/Page.setRGBFill.html"},
{"harud.page.Page.getRGBStroke" : "harud/page/Page.getRGBStroke.html"},
{"harud.page.Page.setRGBStroke" : "harud/page/Page.setRGBStroke.html"},
{"harud.page.Page.getCMYKFill" : "harud/page/Page.getCMYKFill.html"},
{"harud.page.Page.getCMYKStroke" : "harud/page/Page.getCMYKStroke.html"},
{"harud.page.Page.grayFill" : "harud/page/Page.grayFill.html"},
{"harud.page.Page.grayFill" : "harud/page/Page.grayFill.html"},
{"harud.page.Page.grayStroke" : "harud/page/Page.grayStroke.html"},
{"harud.page.Page.grayStroke" : "harud/page/Page.grayStroke.html"},
{"harud.page.Page.getStrokingColorSpace" : "harud/page/Page.getStrokingColorSpace.html"},
{"harud.page.Page.getFillingColorSpace" : "harud/page/Page.getFillingColorSpace.html"},
{"harud.page.Page.getTextMatrix" : "harud/page/Page.getTextMatrix.html"},
{"harud.page.Page.getGStateDepth" : "harud/page/Page.getGStateDepth.html"},
{"harud.page.Page.setSlideShow" : "harud/page/Page.setSlideShow.html"},
{"harud.page.Page.arc" : "harud/page/Page.arc.html"},
{"harud.page.Page.beginText" : "harud/page/Page.beginText.html"},
{"harud.page.Page.circle" : "harud/page/Page.circle.html"},
{"harud.page.Page.clip" : "harud/page/Page.clip.html"},
{"harud.page.Page.closePath" : "harud/page/Page.closePath.html"},
{"harud.page.Page.closePathStroke" : "harud/page/Page.closePathStroke.html"},
{"harud.page.Page.closePathFillStroke" : "harud/page/Page.closePathFillStroke.html"},
{"harud.page.Page.concat" : "harud/page/Page.concat.html"},
{"harud.page.Page.curveTo" : "harud/page/Page.curveTo.html"},
{"harud.page.Page.curveTo2" : "harud/page/Page.curveTo2.html"},
{"harud.page.Page.curveTo3" : "harud/page/Page.curveTo3.html"},
{"harud.page.Page.drawImage" : "harud/page/Page.drawImage.html"},
{"harud.page.Page.ellipse" : "harud/page/Page.ellipse.html"},
{"harud.page.Page.endPath" : "harud/page/Page.endPath.html"},
{"harud.page.Page.endText" : "harud/page/Page.endText.html"},
{"harud.page.Page.eofill" : "harud/page/Page.eofill.html"},
{"harud.page.Page.eofillStroke" : "harud/page/Page.eofillStroke.html"},
{"harud.page.Page.fill" : "harud/page/Page.fill.html"},
{"harud.page.Page.fillStroke" : "harud/page/Page.fillStroke.html"},
{"harud.page.Page.gRestore" : "harud/page/Page.gRestore.html"},
{"harud.page.Page.gSave" : "harud/page/Page.gSave.html"},
{"harud.page.Page.lineTo" : "harud/page/Page.lineTo.html"},
{"harud.page.Page.moveTextPos" : "harud/page/Page.moveTextPos.html"},
{"harud.page.Page.moveTo" : "harud/page/Page.moveTo.html"},
{"harud.page.Page.moveToNextLine" : "harud/page/Page.moveToNextLine.html"},
{"harud.page.Page.rectangle" : "harud/page/Page.rectangle.html"},
{"harud.page.Page.setCMYKFill" : "harud/page/Page.setCMYKFill.html"},
{"harud.page.Page.setCMYKStroke" : "harud/page/Page.setCMYKStroke.html"},
{"harud.page.Page.setExtGState" : "harud/page/Page.setExtGState.html"},
{"harud.page.Page.setFontAndSize" : "harud/page/Page.setFontAndSize.html"},
{"harud.page.Page.lineWidth" : "harud/page/Page.lineWidth.html"},
{"harud.page.Page.lineWidth" : "harud/page/Page.lineWidth.html"},
{"harud.page.Page.setTextMatrix" : "harud/page/Page.setTextMatrix.html"},
{"harud.page.Page.showTextNextLine" : "harud/page/Page.showTextNextLine.html"},
{"harud.page.Page.stroke" : "harud/page/Page.stroke.html"},
{"harud.page.Page.textOut" : "harud/page/Page.textOut.html"},
{"harud.page.Page.textRect" : "harud/page/Page.textRect.html"},
{"harud.outline" : "harud/outline.html"},
{"harud" : "harud.html"},
{"harud.image" : "harud/image.html"},
{"harud.version_" : "harud/version_.html"},
{"harud.haruobject" : "harud/haruobject.html"},
{"harud.destination" : "harud/destination.html"},
];
function search(str) {
	var re = new RegExp(str.toLowerCase());
	var ret = {};
	for (var i = 0; i < items.length; i++) {
		var k = Object.keys(items[i])[0];
		if (re.test(k.toLowerCase()))
			ret[k] = items[i][k];
	}
	return ret;
}

function searchSubmit(value, event) {
	console.log("searchSubmit");
	var resultTable = document.getElementById("results");
	while (resultTable.firstChild)
		resultTable.removeChild(resultTable.firstChild);
	if (value === "" || event.keyCode == 27) {
		resultTable.style.display = "none";
		return;
	}
	resultTable.style.display = "block";
	var results = search(value);
	var keys = Object.keys(results);
	if (keys.length === 0) {
		var row = resultTable.insertRow();
		var td = document.createElement("td");
		var node = document.createTextNode("No results");
		td.appendChild(node);
		row.appendChild(td);
		return;
	}
	for (var i = 0; i < keys.length; i++) {
		var k = keys[i];
		var v = results[keys[i]];
		var link = document.createElement("a");
		link.href = v;
		link.textContent = k;
		link.attributes.id = "link" + i;
		var row = resultTable.insertRow();
		row.appendChild(link);
	}
}

function hideSearchResults(event) {
	if (event.keyCode != 27)
		return;
	var resultTable = document.getElementById("results");
	while (resultTable.firstChild)
		resultTable.removeChild(resultTable.firstChild);
	resultTable.style.display = "none";
}

