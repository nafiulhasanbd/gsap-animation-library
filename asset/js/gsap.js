document.addEventListener("DOMContentLoaded", (event) => {
	// heading one
	const titleOne = document.querySelector(".title_one");

	var titleOneSplit = new SplitText(titleOne, {
		type: "words,chars",
		textAlign: "center",
	});

	gsap.from(titleOneSplit.words, {
		scrollTrigger: {
			trigger: titleOne,
			toggleActions: "restart none none none",
		},
		duration: 1,
		opacity: 0,
		x: 20,
		stagger: 0.02,
	});

	gsap.from(titleOneSplit.chars, {
		scrollTrigger: {
			trigger: titleOne,
			toggleActions: "restart none none none",
		},
		duration: 1,
		opacity: 0,
		x: 40,
		stagger: 0.02,
	});

	// heading tow

	const titleTow = document.querySelector(".title_tow");

	var titleTowSplit = new SplitText(titleTow, {
		type: "words",
		textAlign: "center",
	});

	gsap.from(titleTowSplit.words, {
		scrollTrigger: {
			trigger: titleTow,
			toggleActions: "restart none none none",
		},
		duration: 1.5,
		opacity: 0,
		x: 40,
		stagger: 0.02,
	});

	// heading three

	const titleThree = document.querySelector(".title_three");

	var titleThreeSplit = new SplitText(titleThree, {
		type: "lines",
		linesClass: "split-line",
		textAlign: "center",
	});

	gsap.from(titleThreeSplit.lines, {
		scrollTrigger: {
			trigger: titleThree,
			toggleActions: "restart none none none",
		},
		duration: 1,
		perspective: "2000px",
		rotateX: "-120deg",
		translateY: "90px",
		stagger: 0.1,
		opacity: 0,
	});

	// heading four

	const titleFour = document.querySelector(".title_four");

	var titleFourSplit = new SplitText(titleFour, {
		type: "lines,words",
		linesClass: "split-line",
		textAlign: "center",
	});

	gsap.from(titleFourSplit.words, {
		scrollTrigger: {
			trigger: titleFour,
			toggleActions: "restart none none none",
		},
		duration: 1,
		y: "110%",
		rotationZ: "10",
		stagger: 0.1,
	});

	// heading five

	const titleFive = document.querySelector(".title_five");
	const titleFiveContainer =
		document.querySelector(".text_wrapper");

	gsap.from(titleFive, {
		backgroundPosition: "-100% 0%",
		ease: "expo.out",
		scrollTrigger: {
			trigger: titleFive,
			scrub: 1,
			start: "top 80%",
		},
	});
});
