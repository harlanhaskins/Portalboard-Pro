opus.Gizmo({
	name: "SpaceCore",
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
					src: "images/spacecore.png",
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
					label: "Bam bam! Take that, space.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button2",
					ontap: "button2Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Bored of space.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button3",
					ontap: "button3Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Dad, I'm in space.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button4",
					ontap: "button4Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Don't like space.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button5",
					ontap: "button5Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Going to space, can't wait.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button6",
					ontap: "button6Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Grandma? Yes. I'm in space.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button7",
					ontap: "button7Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Hehehe. I'm in space.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button8",
					ontap: "button8Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Space? Space!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button9",
					ontap: "button9Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Spaaaaaaaaaace!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button10",
					ontap: "buton10Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "There's a star.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				}
			]
		}
	]
});