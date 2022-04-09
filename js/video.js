var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// When loading page, Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", () => {
		video = document.getElementById("video");
		video.autoplay = false;
		video.loop = false;
	});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

