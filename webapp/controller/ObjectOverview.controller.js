sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("loc.modloc.controller.ObjectOverview", {
		
		onInit: function () {
           // var USERDATA = new sap.ui.model.json.JSONModel();
            //USERDATA.loadData("model/USERDETAILS.json");
           // console.log(USERDATA);
           // this.getView().setModel(USERDATA, "JUSERDATA");
           var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
           oRouter.getRoute("ObjectOverview").attachPatternMatched(this._onObjectMatched, this);
		    },

        _onObjectMatched: function (oEvent) {
            this.getView().bindElement({
                path: "/" + oEvent.getParameter("arguments").USERNAME,
                model: "USERDATA"
            })

        },
        
    });
});
    


