opus.Gizmo({
	name: "main",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2,
		bgImage: "images/background.png"
	},
	chrome: [
		{
			name: "pageHeader1",
			title: "Choose a character",
			type: "Palm.Mojo.PageHeader",
			l: 0,
			t: 0,
			styles: {
				bgColor: "#AAAAAA"
			}
		},
		{
			name: "scroller1",
			scrollPosition: {
				left: 0,
				top: -238
			},
			type: "Palm.Mojo.Scroller",
			l: 0,
			t: 372,
			h: "100%",
			styles: {
				cursor: "move",
				overflow: "hidden"
			},
			controls: [
				{
					name: "button1",
					ontap: "button1Tap",
					disabled: undefined,
					label: "GLaDOS",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 0
				},
				{
					name: "button2",
					ontap: "button2Tap",
					disabled: undefined,
					label: "Cave Johnson",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 60
				},
				{
					name: "button3",
					ontap: "button3Tap",
					disabled: undefined,
					label: "Wheatley",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 120
				},
				{
					name: "button4",
					ontap: "button4Tap",
					disabled: undefined,
					label: "Turret",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 180
				},
				{
					name: "button5",
					ontap: "button5Tap",
					disabled: undefined,
					label: "Defective Turret",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 240
				},
				{
					name: "button6",
					ontap: "button6Tap",
					disabled: undefined,
					label: "Space Core",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 300
				},
				{
					name: "button8",
					ontap: "button9Tap",
					disabled: undefined,
					label: "Fact Core",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 359
				},
				{
					name: "button7",
					ontap: "button8Tap",
					disabled: undefined,
					label: "Adventure Core",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 419
				},
				{
					name: "followme",
					ontap: "button7Tap",
					className: "followme",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Follow me! @harlanhaskins",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 360,
					styles: {
						bgColor: ""
					}
				},
				{
					name: "picture1",
					src: "http://i10.photobucket.com/albums/a124/andyahs/Paypal_Donate_Button.png",
					ontap: "donateTap",
					type: "Palm.Picture",
					l: 0,
					w: "100%",
					t: 419,
					h: 100
				}
			]
		}
	]
});