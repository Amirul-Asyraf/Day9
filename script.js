var sng = document.getElementById('sng');
var timeBar = document.getElementById('time-bar');
var vol = 1;
var isPlaying = false;
var i = 0;

const tracks = [
    {
        src: "audio/littlebit.mp3",
        title: "Little Bit",
        artist: "Lykke Li",
        banner: "images/littlebit.jpg",
    },

    {
        src: "audio/30sec.mp3",
        title: "Happy Birthday",
        artist: "Uknown",
        banner: "images/cake.jpeg",
    }, 

    {
        src: "audio/bgmusic.mp3",
        title: "Piano Recital",
        artist: "Piano Man",
        banner: "images/piano.jpeg",
    }
]

function switchClick() {
    //check isPlaying true/false
    if(isPlaying == false) {
        sng.play();
        isPlaying = true;
        document.getElementById("play-btn").innerHTML = "<i class='fas fa-pause'></i>";
    } else if(isPlaying == true) {
        sng.pause();
        isPlaying = false;
        document.getElementById("play-btn").innerHTML = "<i class='fas fa-play-circle'></i>";
    }
}

function updateVol(volUpdate) {
    vol += volUpdate;
    
    if (vol >= 1) {
        vol = 1;
    } else if (vol <= 0){
        vol = 0;
    } 

    console.log(vol);
    sng.volume = vol;
}

function skipTrack(num) {
    i += num;

    if (i > 2) {
        i = 0;
    } else if (i < 0) {
        i = 2;
    }

    isPlaying = false;
    switchClick();

    document.getElementById("sng").src = tracks[i].src;
    document.getElementById("titleText").innerHTML = tracks[i].title;
    document.getElementById("artistText").innerHTML = tracks[i].artist;
    document.getElementById("img-album").src = tracks[i].banner;
}