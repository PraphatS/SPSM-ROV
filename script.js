const videoData = {
  match1: [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/uNE-BXyTFnk"
  ],
  match2: [
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/dQw4w9WgXcQ"
  ],
  match3: [
    "https://www.youtube.com/embed/ScMzIvxBSi4"
  ],
  match4: [
    "https://www.youtube.com/embed/tgbNymZ7vqY"
  ],
  match5: [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/ScMzIvxBSi4",
    "https://www.youtube.com/embed/tgbNymZ7vqY"
  ],
  match6: [
    "https://www.youtube.com/embed/ScMzIvxBSi4"
  ],
  match7: [
    "https://www.youtube.com/embed/dQw4w9WgXcQ"
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
