function StageAssistant() {
Portalboard = {}; //Global Object
open = new Mojo.Model.Cookie('open');
}

StageAssistant.prototype.setup = function() {
Portalboard.Metrix = new Metrix(); //Instantiate Metrix Library
Portalboard.Metrix.postDeviceData();
if (open.get() === undefined){
	open.put("Okay");
	this.controller.pushScene("opener");
	}
else{
	this.controller.pushScene("main");
	}
};