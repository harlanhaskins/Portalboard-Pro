function CaveJohnsonAssistant(argFromPusher) {}

CaveJohnsonAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
		var audio1 = new Audio();
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	},
	button1Tap: function(inSender, event) {
		url = 'audio/c_asbestos.mp3';
		audio1.src = url;
		audio1.load();
		audio1.play();
	},
	button1Hold: function(inSender, event) {
		this.controller.serviceRequest('palm://com.palm.systemservice'), {
			method:"setPreferences",
			parameters:{"ringtone": "/usr/palm/applications/com.nostoaverage.portalboardpro/audio/c_asbestos.mp3"}
		}
	},
	button2Tap: function(inSender, event) {
		url = 'audio/c_blood_is_gasoline.mp3';
		audio1.src = url;
		audio1.load();
		audio1.play();
	},
	button3Tap: function(inSender, event) {
		url = 'audio/c_canzzzt_fire_a_man_in_a_wheelchair.mp3';
		audio1.src = url;
		audio1.load();
		audio1.play();
	},
	button4Tap: function(inSender, event) {
		url = 'audio/c_do_not_get_covered_in_repulsion.mp3';
		audio1.src = url;
		audio1.load();
		audio1.play();
	},
	button5Tap: function(inSender, event) {
		url = 'audio/donzzzt_make_more_prerecorded_msgs.mp3';
		audio1.src = url;
		audio1.load();
		audio1.play();
	},
	button6Tap: function(inSender, event) {
		url = 'audio/c_i_donzzzt_want_your_lemons.mp3';
		audio1.src = url;
		audio1.load();
		audio1.play();
	},
	button7Tap: function(inSender, event) {
		url = 'audio/c_if_you_donzzzt_have_tumors.mp3';
		audio1.src = url;
		audio1.load();
		audio1.play();
	},
	button8Tap: function(inSender, event) {
		url = 'audio/c_keep_your_pants_on.mp3';
		audio1.src = url;
		audio1.load();
		audio1.play();
	},
	button9Tap: function(inSender, event) {
		url = 'audio/c_laugh.mp3';
		audio1.src = url;
		audio1.load();
		audio1.play();
	},
	button10Tap: function(inSender, event) {
		url = 'audio/c_moon_rocks_are_poison.mp3';
		audio1.src = url;
		audio1.load();
		audio1.play();
	},
	button11Tap: function(inSender, event) {
		url = 'audio/c_phonebook_of_a_contract.mp3';
		audio1.src = url;
		audio1.load();
		audio1.play();
	},
	button12Tap: function(inSender, event) {
		url = 'audio/c_portalconductor_lemons1.mp3';
		audio1.src = url;
		audio1.load();
		audio1.play();
	},
	button13Tap: function(inSender, event) {
		url = 'audio/c_trace_amounts_of_time_travel.mp3';
		audio1.src = url;
		audio1.load();
		audio1.play();
	},
	button14Tap: function(inSender, event) {
		url = 'audio/c_we_want_the_best.mp3';
		audio1.src = url;
		audio1.load();
		audio1.play();
	},
	button15Tap: function(inSender, event) {
		url = 'audio/c_you_are_fired.mp3';
		audio1.src = url;
		audio1.load();
		audio1.play();
	},
	picTap: function(inSender, event) {
			this.controller.stageController.popScene('CaveJohnson');
		this.controller.stageController.pushScene('main');
	},
};