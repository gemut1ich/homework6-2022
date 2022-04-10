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

  //When click play button, Play the video and update the volume information
  document.getElementById("play").addEventListener("click", () => {
    video.play();
    document.getElementById("volume").innerHTML =
      document.getElementById("slider").value + "%";
  });

  //When click pause button
  document.getElementById("pause").addEventListener("click", () => {
    video.pause();
  });
});
