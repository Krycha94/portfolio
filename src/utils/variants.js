// FRAMER MOTION LIBRARY

export const navVariants = {
	hidden: {
		x: "-110%",
	},
	visible: {
		x: 0,

		transition: {
			duration: 0.5,
		},
	},
};

export const heroVariants = {
	hidden: {
		x: -50,
		y: -50,
		opacity: 0,
	},
	visible: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			delay: 0.2,
			duration: 1.5,
		},
	},
};

export const sectionVariants = {
	hidden: {
		x: -15,
		y: -15,
		opacity: 0,
	},
	visible: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			delay: 0.2,
			duration: 0.5,
		},
	},
};
