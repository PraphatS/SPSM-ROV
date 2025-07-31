function openPopup(videoUrl) {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoFrame");
  iframe.src = videoUrl;
  modal.style.display = "block";
}

function closePopup() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoFrame");
  iframe.src = "";
  modal.style.display = "none";
}
