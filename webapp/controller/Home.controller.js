//var	oMydata = loadData("./model/USERDETAILS.json");
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"loc/modloc/model/models",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */

	
	function (Controller, MessageToast, JSONModel,model) {
		"use strict";

		return Controller.extend("loc.modloc.controller.Home", {
			onInit: function () {
		


			},
			
			_TS_OVERVIEW: function () {

				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("UserList");

			}
			//var	oMydata = loadData("./model/USERDETAILS.json"); 
			//var oModel = new JSONModel(jQuery.sap.getModulePath("model", "/USERDETAILS.json"));

			//this.getView().setModel(oMydata);
			//console.log(oMydata.getJSON());

		});
	});
