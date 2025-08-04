const videoData = {
  match1: [
    "https://www.youtube.com/embed/VVx5a0vyn4A",
    "https://www.youtube.com/embed/X32SMRnIHDw"
  ],
  match2: [
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/dQw4w9WgXcQ"
  ],
  match3: [
    "https://www.youtube.com/embed/7KdPMlRyZNk",
    "https://www.youtube.com/embed/NBxd-Fc-h14"
  ],
  match4: [
    "https://www.youtube.com/embed/5nt2fYzerng",
    "https://www.youtube.com/embed/dmE8YJ5iRD4",
    "https://www.youtube.com/embed/dmE8YJ5iRD4"
  ],
  match5: [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/ScMzIvxBSi4",
    "https://www.youtube.com/embed/tgbNymZ7vqY"
  ],
  match6: [
    "https://www.youtube.com/embed/DxTEkLJ0PN0",
    "https://www.youtube.com/embed/sdOn8LrhXTo",
    "https://www.youtube.com/embed/ZUHBsHM1gSk"
  ],
  match7: [
    "https://www.youtube.com/embed/lPhFHcAIPeI",
    "https://www.youtube.com/embed/,
    "https://www.youtube.com/embed/"
  ],
  match8: [
    "https://www.youtube.com/embed/tgbNymZ7vqY"
  ]
};

function openPopup(matchKey) {
  const container = document.getElementById("videoContainer");
  container.innerHTML = "";

  videoData[matchKey].forEach(url => {
    const iframe = document.createElement("iframe");
    iframe.src = url;
    container.appendChild(iframe);
  });

  document.getElementById("videoModal").style.display = "block";
}

function closePopup() {
  document.getElementById("videoModal").style.display = "none";
  document.getElementById("videoContainer").innerHTML = "";
}



