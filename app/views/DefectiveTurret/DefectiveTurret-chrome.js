opus.Gizmo({
	name: "DefectiveTurret",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2,
		bgImage: "images/background.png"
	},
	components: [
		{
			name: "audio1",
			type: "Palm.Mojo.Audio"
		}
	],
	chrome: [
		{
			name: "scroller1",
			scrollPosition: {
				left: 0,
				top: 0
			},
			type: "Palm.Mojo.Scroller",
			l: 0,
			t: 0,
			h: "100%",
			styles: {
				cursor: "move",
				overflow: "hidden"
			},
			controls: [
				{
					name: "picture1",
					src: "images/dturret.png",
					ontap: "picTap",
					type: "Palm.Picture",
					l: 0,
					w: "100%",
					t: 0,
					h: "100"
				},
				{
					name: "button1",
					ontap: "button1Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Better open fire!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button2",
					ontap: "button2Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Blam! Blam blam blam!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button3",
					ontap: "button3Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Broken turrets' time to shine.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button4",
					ontap: "button4Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "I don't have any bullets.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button5",
					ontap: "button5Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Hello there!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button6",
					ontap: "button6Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Anyone asked, I killed you.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button7",
					ontap: "button7Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "I'm not defective!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button8",
					ontap: "button8Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Yep. Non-lethal as ever,",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button9",
					ontap: "button9Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Nooooo!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button10",
					ontap: "button10Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Oh come on!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button11",
					ontap: "button11Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Second time's the charm.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button12",
					ontap: "button12Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Shootin' blanks every time.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button13",
					ontap: "button13Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "This ain't good.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button14",
					ontap: "button14Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Well, I tried.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button15",
					ontap: "button15Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "What's a guy gotta do?",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button16",
					ontap: "button16Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Yes, indeed.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				}
			]
		}
	]
});