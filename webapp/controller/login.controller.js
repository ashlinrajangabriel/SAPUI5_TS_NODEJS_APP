sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";
		
		return Controller.extend("loc.modloc.controller.login", {
			
			onInit: function (oEvent) {


			},
			
			onLogon: function (oEvent) {
				var that = this;
				var userID=that.getView().byId("UserID").getValue();
				var Secret=that.getView().byId("Secret").getValue();
				//var oUModel = new sap.ui.model.json.JSONModel();
				//oUModel.setData(aData); 
				//perform token request

				  //sap.ui.getCore().setModel(oModel);
			
				 /**Lets assign the model to COmponent js**/
				 //Lets authenticate

					
					var xhr = new XMLHttpRequest();
					xhr.withCredentials = true;

					xhr.addEventListener("readystatechange", function() {
					if(this.readyState === 4) {
						console.log(this.responseText);
					}
					});

					xhr.open("GET", "http://127.0.0.1:5000/ReturnTokens?user=Z00403FF");

					xhr.send();
					//var oMenuModel = new sap.ui.model.json.JSONModel();
					//oMenuModel.loadData("http://127.0.0.1:5000/ReturnTokens?user=Ashlin");
					//console.log(oMenuModel);
					var oRouter = this.getOwnerComponent().getRouter();
					oRouter.navTo("home");

			},
			
		  });
		});

