document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const volumeControl = document.getElementById("volumeControl");
    const songInfo = document.getElementById("songInfo");
    const playlistItems = document.getElementById("playlistItems");
  
    const playlist = [
      { title: "Shape of You", artist: "Ed Sheeran", source: "C:/Users/varun/OneDrive/Desktop/music/Shape-of-You---Ed-Sheeran(musicdownload.cc).mp3" },
      { title: "Kaun Tujhe", artist: "Armaan Malik", source: "C:/Users/varun/OneDrive/Desktop/music/Kaun Tujhe - M.S. Dhoni - The Untold Story 128 Kbps.mp3" },
      { title: "Jab Tak", artist: "Armaan Malik", source: "C:/Users/varun/OneDrive/Desktop/music/Jab_Tak.mp3" }
    ];

    // Populate playlist
    playlist.forEach((song, index) => {
      const li = document.createElement("li");
      li.textContent = `${song.title} - ${song.artist}`;
      li.setAttribute("data-index", index);
      playlistItems.appendChild(li);
      li.addEventListener("click", function() {
        const selectedIndex = parseInt(this.getAttribute("data-index"));
        playSong(selectedIndex);
      });
    });
  
    function playSong(index) {
      const selectedSong = playlist[index];
      audioPlayer.src = selectedSong.source;
      audioPlayer.play();
      songInfo.textContent = `${selectedSong.title} - ${selectedSong.artist}`;
    }
  
    playBtn.addEventListener("click", function() {
      audioPlayer.play();
    });
  
    pauseBtn.addEventListener("click", function() {
      audioPlayer.pause();
    });
  
    volumeControl.addEventListener("input", function() {
      audioPlayer.volume = volumeControl.value;
    });
  
    audioPlayer.addEventListener("play", function() {
      playBtn.disabled = true;
      pauseBtn.disabled = false;
    });
  
    audioPlayer.addEventListener("pause", function() {
      playBtn.disabled = false;
      pauseBtn.disabled = true;
    });
  
    audioPlayer.addEventListener("ended", function() {
      const currentIndex = parseInt(audioPlayer.getAttribute("data-index"));
      const nextIndex = (currentIndex + 1) % playlist.length;
      playSong(nextIndex);
    });
});
