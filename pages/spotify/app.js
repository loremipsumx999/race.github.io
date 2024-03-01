var songs = [
    {title: "David Guetta, Bebe Rexha & J Balvin - Say My Name", youtubeLink: "https://www.youtube.com/watch?v=ft4jcPSLJfY&ab_channel=DavidGuetta", mood: "boldog"},
    {title: "Rihanna - Don't Stop The Music", youtubeLink: "https://www.youtube.com/watch?v=yd8jh9QYfEs&ab_channel=RihannaVEVO", mood: "boldog"},
    {title: "Welcome To St Tropez", youtubeLink: "https://www.youtube.com/watch?v=Txr0KPfEUq4&ab_channel=DJAntoine-Topic", mood: "boldog"},
    {title: "Panic! At The Disco - Vegas Lights", youtubeLink: "https://www.youtube.com/watch?v=aIs7QtCsUAg&ab_channel=Panic%21AtTheDisco", mood: "szomoru"},
    {title: "Edward Maya & Vika Jigulina - Stereo Love", youtubeLink: "https://www.youtube.com/watch?v=p-Z3YrHJ1sU&ab_channel=Spinnin%27Records", mood: "szomoru"},
    {title: "Groovehouse - Hajnal", youtubeLink: "https://www.youtube.com/watch?v=OWGHPF5YYfg&ab_channel=zsocsjo", mood: "szomoru"},
    {title: "Shaggy - It Wasn't Me", youtubeLink: "https://www.youtube.com/watch?v=2g5Hz17C4is&ab_channel=TimelessSounds", mood:"utazos"},
    {title: "AlunaGeorge - Best Be Believing (Shadow Child Remix)", youtubeLink: "https://www.youtube.com/watch?v=mZPJfU4ZiQY&ab_channel=AlunaGeorge", mood: "utazos"},
    {title: "Desire (Play & Win Radio Edit)", youtubeLink: "https://www.youtube.com/watch?v=rr1l3UoEozw&ab_channel=Morris-Topic", mood: "utazos"},
    {title: "ATB - 9PM (Till I Come) ", youtubeLink: "https://www.youtube.com/watch?v=5A9OIIapSko&ab_channel=85KasiaD85", mood: "idokapszula"},
    {title: "Earth, Wind & Fire - Boogie Wonderland ", youtubeLink: "https://www.youtube.com/watch?v=god7hAPv8f0&ab_channel=EarthWindandFireVEVO", mood: "idokapszula"},
    {title: "Ace of Base - Happy Nation", youtubeLink: "https://www.youtube.com/watch?v=HWjCStB6k4o&ab_channel=AceofBase", mood: "idokapszula"},
    {title: "ATB - 9PM (Till I Come) ", youtubeLink: "https://www.youtube.com/watch?v=5A9OIIapSko&ab_channel=85KasiaD85", mood: "techno"},
    {title: "Sounding A Bit 90's", youtubeLink: "https://www.youtube.com/watch?v=_kmtBXTNuDI&ab_channel=LukeDean-Topic", mood: "techno"},
    {title: "Celebrate the love", youtubeLink: "https://on.soundcloud.com/Qe6Bg", mood: "techno"},
    {title: "Bëlga - Gérvágó", youtubeLink: "https://www.youtube.com/watch?v=k9uyf9zausE&ab_channel=B%C3%ABlga", mood: "karneval"},
    {title: "Bëlga - Balaton dance", youtubeLink: "https://www.youtube.com/watch?v=Yf-VlN7GcAQ&ab_channel=1GMusicChannel", mood: "karneval"},
    {title: "Faithless - Insomnia", youtubeLink: "https://www.youtube.com/watch?v=P8JEm4d6Wu4&ab_channel=FaithlessVEVO", mood: "karneval"}
];

function getSongsByMood(){
    var mood = document.getElementById("mood").value.toLowerCase();
    var filteredSongs = songs.filter(function(song){
        return song.mood === mood;
    });
    clearSongList();
    displaySongs(filteredSongs);
}

function clearSongList(){
    var songList = document.getElementById("song-list");
    songList.innerHTML = "";
}

function displaySongs(songs){
    var songList = document.getElementById("song-list");
    songList.InnerHTML = "";
    songs.forEach(function(song){
        var songDiv = document.createElement("div");
        songDiv.classList.add("song");
        var link = document.createElement("a");
        link.textContent = song.title;
        link.href = song.youtubeLink;
        link.target = "_blank"; //Ha új fület akarsz megnyitni
        songDiv.appendChild(link);
        songList.appendChild(songDiv);
    });
}