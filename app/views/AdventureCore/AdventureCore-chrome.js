opus.Gizmo({
	name: "AdventureCore",
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
					src: "images/AdventureCore.png",
					onTap: "picTap",
					type: "Palm.Picture",
					l: 0,
					w: "100%",
					t: 0,
					h: "100"
				},
/*				{
					name: "button1",
					ontap: "button1Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Made for danger.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 100
				},
*/
				{
					name: "button2",
					ontap: "button2Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "A cool line.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 100
				},
				{
					name: "button3",
					ontap: "button3Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Are you fightin' that guy?",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 100
				},
				{
					name: "button4",
					ontap: "button4Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Hiya, pretty lady.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 100
				},
				{
					name: "button5",
					ontap: "button5Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "I should really have a gun.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 100
				},
				{
					name: "button6",
					ontap: "button6Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Man, that is trouble.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 460
				},
				{
					name: "button7",
					ontap: "button7Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Today should be a holiday.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 100
				},
				{
					name: "button8",
					ontap: "button8Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Happy Explosion Day!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 100
				},
				{
					name: "button9",
					ontap: "button9Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "[Singing]",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 100
				},
				{
					name: "button10",
					ontap: "button10Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Full of tension and power.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 100
				},
				{
					name: "button11",
					ontap: "button11Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Times like this.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 100
				}
			]
		},
	]
});