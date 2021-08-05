sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("loc.modloc.controller.UserList", {
		
		onInit: function () {
            var USERDATA = new sap.ui.model.json.JSONModel();
            USERDATA.loadData("model/USERDETAILS.json");
            console.log(USERDATA);
            this.getView().setModel(USERDATA, "JUSERDATA");
		},
		onListItemPress:function(oEvent) {
            	





            var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("ObjectOverview", {
				USERNAME: oItem.getBindingContext("JUSERDATA").getProperty("USERNAME")
                //oItem.getBindingContext("JUSERDATA").getPath().substr(1)
			});

            

		
            //var oRouter = this.getOwnerComponent().getRouter();
            //oRouter.navTo("ObjectOverview");
			
		}	
	});
});