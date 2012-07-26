opus.Gizmo({
	name: "Wheatley",
	dropTarget: true,
	ontap: "picTap",
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
					src: "images/wheatley9.png",
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
					label: "Ace of fours.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button2",
					ontap: "button2Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "It'd be amazing if it killed you.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button3",
					ontap: "button3Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Aristotle  vs. mashy spike plate!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button4",
					ontap: "button4Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "We're both gonna die.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button5",
					ontap: "button5Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "How small you are!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button6",
					ontap: "button6Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Check me out, partner!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button7",
					ontap: "button7Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Clever. Very clever.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button8",
					ontap: "button8Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "10lbs of dead weight. Fatty.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button9",
					ontap: "button9Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Exit exit exit...",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button10",
					ontap: "button10Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Finish it!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button11",
					ontap: "button11Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Give you a sporting chance.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button12",
					ontap: "button12Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Give up!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button13",
					ontap: "button13Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "I am not a moron!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button14",
					ontap: "button14Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Everyone looked pretty alive.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button15",
					ontap: "button15Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "In your face!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button16",
					ontap: "button16Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "I've got an idea.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button17",
					ontap: "button17Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "This is the part where I kill you.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button18",
					ontap: "button18Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Let the games begin.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button19",
					ontap: "button19Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Look out!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button20",
					ontap: "button20Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "It's a lovely bird!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button21",
					ontap: "button21Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "I'm on a break, mate.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button22",
					ontap: "button22Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Shut up!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button23",
					ontap: "button23Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Nobody's going to space!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button24",
					ontap: "button24Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Surprise, we're doing it now.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button25",
					ontap: "button25Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "The word 'test' on the wall.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button26",
					ontap: "button26Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Those were the crap turrets.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button27",
					ontap: "button27Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "We've been at this for 12 hours!",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button28",
					ontap: "button28Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "You look terri- good, actually.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				}
			]
		}
	]
});