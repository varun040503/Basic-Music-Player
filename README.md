# Music Player

This web-based music player application allows users to play audio files, manage playlists, and control audio playback. It is built using HTML, CSS, and JavaScript.

## Features

- User-friendly interface with intuitive controls for play, pause, volume adjustment, and seeking.
- Ability to create and manage playlists.
- Responsive design that works well on different screen sizes.
- Display of song information including title, artist, and album.
- Smooth and enjoyable user experience.

## Usage

To use the music player, follow these steps:

1. Clone or download the project repository.
2. Open the `index.html` file in a web browser.
3. The music player interface will be displayed, showing the default audio file if available.
4. Use the play, pause, volume control, and seek features to control audio playback.
5. Click on the playlist items to play different songs from the playlist.

## Playlist Management

You can customize the playlist by modifying the `playlist` array in the `script.js` file. Each entry in the array represents a song with properties such as title, artist, and source (file path).

```javascript
const playlist = [
  { title: "Shape of You", artist: "Ed Sheeran", source: "song1.mp3" },
  { title: "Kaun Tujhe", artist: "Armaan Malik", source: "song2.mp3" },
  { title: "Jab Tak", artist: "Armaan Malik", source: "song3.mp3" }
];
```

## Customization

You can customize the appearance of the music player by modifying the CSS styles in the `styles.css` file. Change colors, fonts, and layout as needed to match your design preferences.

## Credits

- This project was created as a part of [Unified Mentor](https://unifiedmentor.com) web development assignment.

