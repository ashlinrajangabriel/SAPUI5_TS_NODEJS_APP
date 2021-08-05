sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		UserModel: function() {
			var oModel = new JSONModel({
				UID: "",
				Secret: ""
			});
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

	};
});