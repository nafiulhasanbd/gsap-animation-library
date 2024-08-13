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

	gsap.from(titleFive, {
		backgroundPosition: "-100% 0%",
		ease: "expo.out",
		scrollTrigger: {
			trigger: titleFive,
			scrub: 2,
			start: "top 80%",
		},
	});

	// scrub text
	const scrubText = document.querySelector(".scrub_text");
	var scrubTextSplit = new SplitText(scrubText, {
		types: "chars",
		tagName: "span-char",
	});

	gsap.from(scrubTextSplit.chars, {
		opacity: 0.3,
		ease: "power1.out",
		duration: 0.5,
		stagger: 0.1,

		scrollTrigger: {
			trigger: scrubText,
			pin: true,
			scrub: 3,
			start: "top center",
			end: "+=100%",
		},
	});

	// tag scroll
	const lineTop = document.querySelector(".tag_line_top");
	const lineMiddle = document.querySelector(".tag_line_middle");
	const lineBottom = document.querySelector(".tag_line_bottom");

	gsap.fromTo(
		lineTop,
		{
			x: 0,
			duration: 3,
			ease: "power1.out",
			scrollTrigger: {
				trigger: lineTop,
				scrub: 5,
				start: "top 80%",
			},
		},
		{
			x: "-50%",
			duration: 1,
			ease: "power1.out",
			scrollTrigger: {
				trigger: lineTop,
				scrub: 5,
				start: "top 80%",
			},
		}
	);

	gsap.fromTo(
		lineMiddle,
		{
			x: "-50%",
			duration: 5,
			ease: "power1.out",
			scrollTrigger: {
				trigger: lineMiddle,
				scrub: 5,
				start: "top 80%",
			},
		},
		{
			x: 0,
			duration: 5,
			ease: "power1.out",
			scrollTrigger: {
				trigger: lineMiddle,
				scrub: 5,
				start: "top 80%",
			},
		}
	);

	gsap.fromTo(
		lineBottom,
		{
			x: 0,
			duration: 5,
			ease: "power1.out",
			scrollTrigger: {
				trigger: lineBottom,
				scrub: 5,
				start: "top 80%",
			},
		},
		{
			x: "-50%",
			duration: 1,
			ease: "power1.out",
			scrollTrigger: {
				trigger: lineBottom,
				scrub: 5,
				start: "top 80%",
			},
		}
	);

	// moving card
	const cardUp = document.querySelectorAll(".card_up");
	const cardDown = document.querySelectorAll(".card_down");

	cardUp.forEach((card) => {
		gsap.fromTo(
			card,
			{
				y: "-20%",
				duration: 1,
				ease: "power1.out",
				scrollTrigger: {
					trigger: card,
					scrub: 2,
					start: "top 80%",
				},
			},
			{
				y: "20%",
				duration: 1,
				ease: "power1.out",
				scrollTrigger: {
					trigger: card,
					scrub: 2,
					start: "top 80%",
				},
			}
		);
	});

	cardDown.forEach((card) => {
		gsap.fromTo(
			card,
			{
				y: "20%",
				duration: 1,
				ease: "power1.out",
				scrollTrigger: {
					trigger: card,
					scrub: 2,
					start: "top 80%",
				},
			},
			{
				y: "-20%",
				duration: 1,
				ease: "power1.out",
				scrollTrigger: {
					trigger: card,
					scrub: 2,
					start: "top 80%",
				},
			}
		);
	});

	// typing text
	const typingText = document.querySelector(".typing_text");
	const typingTextWrapper = document.querySelector(
		".typing_text_section"
	);
	const card_top_left = document.querySelector(".card_top_left");
	const card_top_right =
		document.querySelector(".card_top_right");
	const card_bottom_left =
		document.querySelector(".card_bottom_left");
	const card_bottom_right =
		document.querySelector(".card_bottom_right");

	var typingTextSplit = new SplitText(typingText, {
		types: "chars",
		tagName: "span-char",
	});

	gsap.from(typingTextSplit.chars, {
		display: "none",
		ease: "power1.out",
		duration: 1,
		stagger: 0.5,

		scrollTrigger: {
			trigger: typingTextWrapper,
			scrub: 1,
			start: "top center",
		},
	});

	gsap.from(typingTextWrapper, {
		ease: "power1.out",
		duration: 1,
		stagger: 0.5,

		scrollTrigger: {
			trigger: typingTextWrapper,
			scrub: 1,
			start: "top top",
			pin: true,
		},
	});

	const cardsTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: typingTextWrapper,
			scrub: 1,
			start: "top center",
		},
	});

	cardsTimeline.from(card_top_left, {
		y: "-100%",
		x: "-100%",
		ease: "power1.out",
		duration: 1,
	})
		.from(
			card_top_right,
			{
				y: "-100%",
				x: "100%",
				ease: "power1.out",
				duration: 1,
			},
			"-=1"
		)
		.from(
			card_bottom_left,
			{
				y: "100%",
				x: "-100%",
				ease: "power1.out",
				duration: 1,
			},
			"-=1"
		)
		.from(
			card_bottom_right,
			{
				y: "100%",
				x: "100%",
				ease: "power1.out",
				duration: 1,
			},
			"-=1"
		);
});
