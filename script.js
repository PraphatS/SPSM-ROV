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
    "https://www.youtube.com/embed/8qkzSpriFpI"
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
    "https://www.youtube.com/embed/JefBnGp9xco",
    "https://www.youtube.com/embed/xa-4kEK5PdQ"
  ],
  match9: [
     "https://www.youtube.com/embed/8ebCGD9X6Y8",
    "https://www.youtube.com/embed/20iwhFUEMGk"
  ],
  match10: [
     "https://www.youtube.com/embed/ohrobVtKjkY?si=QqlkD2rj1vDyFNsi",
     "https://www.youtube.com/embed/Bf671EU4GA4?si=Gk9Tz6XJMAaclp83"
    
    
  ],
  match11: [
    "https://www.youtube.com/embed/ZfN61dCtLa0",
    "https://www.youtube.com/embed/OrfxFp6pqXM"
  ]
    ,
  match13: [
    "https://www.youtube.com/embed/HP3ngU9srcY",
    "https://www.youtube.com/embed/0Mn4zuV9Xlg",
    "https://www.youtube.com/embed/oVZ_fDriiwE"
  ],
  match14: [
   "https://www.youtube.com/embed/KJdgYLyiK14?si=zH573nAO6WboIt-g",
  "https://www.youtube.com/embed/eW8rcQs8rl4?si=uGj0uqwCfub9ZfF-"
   /*  "https://www.youtube.com/embed/*/
  ]
  
};

function openPopup(matchKey) {
  const container = document.getElementById("videoContainer");
  container.innerHTML = "";

  if (!videoData[matchKey] || videoData[matchKey].length === 0) {
    container.innerHTML = `<p style="color:white; font-size: 1.2em; text-align: center;">🎮 วิดีโอสำหรับแมตช์นี้ <strong>Coming Soon</strong>!</p>`;
  } else {
    videoData[matchKey].forEach(url => {
      const iframe = document.createElement("iframe");
      iframe.src = url;
      container.appendChild(iframe);
    });
  }

  document.getElementById("videoModal").style.display = "block";
}

function closePopup() {
  document.getElementById("videoModal").style.display = "none";
  document.getElementById("videoContainer").innerHTML = "";
}


















