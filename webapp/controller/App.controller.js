sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("loc.modloc.controller.App", {
		
		onInit: function () {

		},
		_Authenticate:function() {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("login");
			
		}	
	});
});