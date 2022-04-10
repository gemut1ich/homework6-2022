var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");
});

// When loading page, Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", () => {
  video = document.getElementById("player1");
  console.log("video: ", video);
  video.autoplay = false;
  video.loop = false;
});
