new TypeIt("#animatedText", {
	speed: 20,
	waitUntilVisible: true,
}).go();

new TypeIt("#text2", {
	speed: 20,
	startDelay: 1000,
	waitUntilVisible: true,
}).go();

new TypeIt('#jalan', {
	lifeLike: false,
	speed: 0
})
	.type('I')
	.pause(691)
	.type("'")
	.pause(585)
	.type("A")
	.pause(145)
	.type("M")
	.pause(244)
	.type(" ")
	.pause(410)
	.break()
	.type("H")
	.pause(110)
	.type("W")
	.pause(175)
	.type("N")
	.pause(350)
	.move(-1)
	.pause(250)
	.delete(1)
	.pause(125)
	.type("E")
	.pause(125)
	.move(2)
	.pause(250)
	.type("D")
	.pause(211)
	.type("R")
	.pause(84)
	.type("I")
	.pause(225)
	.type("A")
	.pause(85)
	.type("N")
	.pause(145)
	.type(" ")
	.pause(205)
	.type("Y")
	.pause(136)
	.type("U")
	.pause(125)
	.type("U")
	.pause(149)
	.type("D")
	.pause(150)
	.move(-1)
	.pause(250)
	.delete(1)
	.pause(125)
	.move(1)
	.pause(140)
	.type("H")
	.pause(170)
	.type("A")
	.pause(126)
	.type(" ")
	.pause(119)
	.type("P")
	.pause(165)
	.type("R")
	.pause(165)
	.type("A")
	.pause(91)
	.type("T")
	.pause(193)
	.type("A")
	.pause(313)
	.type("A")
	.pause(676)
	.delete(1)
	.pause(278)
	.type("M")
	.pause(131)
	.type("A")
	.go();

	window.addEventListener('scroll', function() {
		const progressLines = document.querySelectorAll('.progres-line');
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
		const scrollPosition = window.scrollY + windowHeight;
	  
		progressLines.forEach(function(progressLine) {
		  const progressLinePosition = progressLine.getBoundingClientRect().top + window.pageYOffset;
		  const persentElement = progressLine.parentNode.querySelector('.persent');
	  
		  if (scrollPosition > progressLinePosition) {
			progressLine.classList.add('animate');
			progressLine.style.transform = 'scaleX(1)';
			progressLine.style.transformOrigin = 'left';
	  
			progressLine.addEventListener('animationend', function() {
			  persentElement.classList.add('show');
			});
		  }
		});
	  });

	  new TypeIt('#slide4', {
		speed: 20,
		waitUntilVisible: true,
	}).go();
	
	  