var sng = document.getElementById('sng');
var timeBar = document.getElementById('time-bar');
var vol = 1;
var isPlaying = false;
var i = 0;
var heartFilled = false;

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
        artist: "Unknown",
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

    if (i == 0) {
        document.getElementById("title-up-next1").innerHTML = tracks[i + 1].title;
        document.getElementById("artist-up-next1").innerHTML = tracks[i + 1].artist;
        document.getElementById("title-up-next2").innerHTML = tracks[i + 2].title;
        document.getElementById("artist-up-next2").innerHTML = tracks[i + 2].artist;
    } else if (i == 1)  {
        document.getElementById("title-up-next1").innerHTML = tracks[i + 1].title;
        document.getElementById("artist-up-next1").innerHTML = tracks[i + 1].artist;
        document.getElementById("title-up-next2").innerHTML = tracks[i - 1].title;
        document.getElementById("artist-up-next2").innerHTML = tracks[i - 1].artist;
    } else if (i == 2) {
        document.getElementById("title-up-next1").innerHTML = tracks[i - 2].title;
        document.getElementById("artist-up-next1").innerHTML = tracks[i - 2].artist;
        document.getElementById("title-up-next2").innerHTML = tracks[i - 1].title;
        document.getElementById("artist-up-next2").innerHTML = tracks[i - 1].artist;
    }
}

function fillHeart() {
    if (heartFilled == false) {
        heartFilled = true;
        document.getElementById("heart").style.color = 'red';
        document.getElementById("heart").innerHTML = '<i class="fas fa-heart"></i>'; 
    } else if (heartFilled == true) {
        heartFilled = false;
        document.getElementById("heart").style.color = 'white';
        document.getElementById("heart").innerHTML = '<i class="far fa-heart"></i>';
    }    
}

setInterval (checkTime, 1000);
function checkTime () {
    var songDuration = Math.ceil(sng.duration);
    var songCurrentTime = Math.ceil(sng.currentTime);

    var timeBarWidth = (songCurrentTime/songDuration) * 300;
    timeBar.style.width = timeBarWidth + 'px';
}
