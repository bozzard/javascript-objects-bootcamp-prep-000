var playlist = {
john_bon_jovi : "armageddon",
sandra_nasic: "path"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist [artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  console.log('playlist = ', playlist);
  console.log('artistName = ', artistName);
console.log(playlist.artistName);
delete playlist.Kanye ;
//  delete playlist[artistName];
  playlist;
  console.log(playlist);
  return playlist;
}
