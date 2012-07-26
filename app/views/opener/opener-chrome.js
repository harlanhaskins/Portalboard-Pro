opus.Gizmo({
	name: "opener",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2,
		bgImage: "/images/background.png"
	},
	chrome: [
		{
			name: "pageHeader1",
			title: "This is important.",
			type: "Palm.Mojo.PageHeader",
			l: 0,
			t: 0,
			h: "16%"
		},
		{
			name: "html1",
			content: "First, thank you for buying my app!\n<br>\nI really appreciate it!\n<br>\nThis app is TouchPad Compatible.\n<br>\nTo go back, tap the picture of the character.",
			type: "Palm.Mojo.Html",
			l: 0,
			t: 54,
			h: "32%",
			styles: {
				fontSize: "18px",
				textAlign: "center"
			}
		},
		{
			name: "button1",
			ontap: "buttonTap",
			disabled: undefined,
			buttonClass: "un-capitalize",
			label: "I understand.",
			type: "Palm.Mojo.Button",
			l: 0,
			t: 149
		}
	]
});