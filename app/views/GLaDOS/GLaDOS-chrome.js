opus.Gizmo({
	name: "GLaDOS",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2,
		bgImage: "images/background.png"
	},
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
					src: "images/portal_2_glados.png",
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
					label: "That one was about to say...",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button2",
					ontap: "button2Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Begin juggling test.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button3",
					ontap: "button3Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Cube to project loneliness.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button4",
					ontap: "button4Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Oops, did I fizzle that?",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button5",
					ontap: "button5Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Great job disappointing me.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button6",
					ontap: "button6Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Like an eagle. Piloting a blimp.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button7",
					ontap: "button7Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Partially eaten by a bird.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button8",
					ontap: "button8Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Emotional outbursts > 1.6V",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button9",
					ontap: "button9Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "[Garfield comic.]",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button10",
					ontap: "button10Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Good job jumping.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button11",
					ontap: "button11Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Because I'm a potato.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button12",
					ontap: "button12Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Initiating surprise in 3..2..",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button13",
					ontap: "button13Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "It's been fun. Don't come back.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button14",
					ontap: "button14Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Just go.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button15",
					ontap: "button15Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Oh, you are kidding me.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button16",
					ontap: "button16Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Killing you is hard.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button17",
					ontap: "button17Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Let's give your parents a call.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button18",
					ontap: "button18Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Belated birthday...present.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button19",
					ontap: "button19Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Neckbearded engineer.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button20",
					ontap: "button20Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "That's the sound of neurotoxin.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button21",
					ontap: "button21Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Next test looks pretty good.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button22",
					ontap: "button22Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "No. No no no no no no.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button23",
					ontap: "button23Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Oh. No. Fizzled that one too.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button24",
					ontap: "button24Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Oh. You survived. Interesting.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button25",
					ontap: "button25Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "I'll hit him with a paradox.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button26",
					ontap: "button26Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "The being alive club.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button27",
					ontap: "button27Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Guilty people and loud noises.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button28",
					ontap: "button28Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Hard light bridges = hair fire.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button29",
					ontap: "button29Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Best for one of both of us",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button30",
					ontap: "button30Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Your generous...ness.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button31",
					ontap: "button31Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "This next test is dangerous.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button32",
					ontap: "button32Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Captured so easily.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button33",
					ontap: "button33Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "2 people with your last name.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button34",
					ontap: "button34Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "Warehouses full of the things.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				},
				{
					name: "button35",
					ontap: "button35Tap",
					disabled: undefined,
					buttonClass: "un-capitalize",
					label: "You're also ugly.",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 89
				}
			]
		}
	]
});