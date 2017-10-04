var playlist = {
//  artistName: ["john bon jovi", "sandra nasic"],
//  songTitle: ["armageddon", "path"]
john_bon_jovi : "armageddon",
sandra_nasic: "path"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist [artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
console.log(playlist);
  delete playlist.artistName;
  playlist;
  console.log(playlist);
  return playlist;
}
function removeFromPlaylist(meals , dinner){

  delete meals[dinner];
  return meals;
}
