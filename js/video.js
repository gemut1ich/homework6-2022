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
    console.log("Play Video");
    document.getElementById("volume").innerHTML =
      document.getElementById("slider").value + "%";
  });

  //When click pause button
  document.getElementById("pause").addEventListener("click", () => {
    console.log("Pause Video");
    video.pause();
  });

  //When click Slow Down, Slow the current video speed by 5% each time the button is clicked and log the new speed to the console.
  document.getElementById("slower").addEventListener("click", () => {
    if (video.playbackRate > 0.1) {
      video.playbackRate *= 0.95;
      console.log("New speed is: ", video.playbackRate);
    }
  });

  //When click Speed Up, Speed up the current video speed by 5% each time the button is clicked and log the new speed to the console.
  document.getElementById("faster").addEventListener("click", () => {
    video.playbackRate /= 0.95;
    console.log("New speed is: ", video.playbackRate);
  });

  // When click Skip Ahead, Advance the current video by 15 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
  document.getElementById("skip").addEventListener("click", () => {
    console.log("Original location is ", video.currentTime);
    if (video.currentTime + 15 < video.duration) {
      video.currentTime += 15;
      console.log("Current location is ", video.currentTime);
    } else {
      video.currentTime = 0;
      console.log("Go back to the beginning");
      console.log("Current location is ", video.currentTime);
    }
  });

  // When click Mute, Mute/unmute the video and update the text in the button.
  document.getElementById("mute").addEventListener("click", () => {
    video.muted = !video.muted;
    if (video.muted) {
      document.getElementById("mute").innerHTML = "Unmute";
    } else {
      document.getElementById("mute").innerHTML = "Mute";
    }
  });

  // When moving Volume Slider, Change the volume based on the slider and update the volume information.
  document.getElementById("slider").addEventListener("input", () => {
    video.volume = document.getElementById("slider").value / 100;
    document.getElementById("volume").innerHTML =
      document.getElementById("slider").value + "%";
  });

  // When click Styled, Utilize the existing oldSchool class on the video element
  document.getElementById("vintage").addEventListener("click", () => {
    video.classList.add("oldSchool");
  });

  // When click Original, Remove the oldSchool class from the video.
  document.getElementById("orig").addEventListener("click", () => {
    video.classList.remove("oldSchool");
  });
});
