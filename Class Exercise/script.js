var sng = document.getElementById('sng')
var timeBar = document.getElementById('timeBar')

var songList = {
    src: 'audio/30sec.mp3',
    title: 'Happy Birthday',
    artist: 'Justin B',
}

var songList2 = {
    src: 'audio/littlebit.mp3',
    title: 'Little Bit',
    artist: 'Baba Sheep',
}

function playSng() {
    sng.play();
}

function pauseSng() {
    sng.pause();
}

setInterval (checkTime, 1000);
function checkTime () {
    //console.log(sng.duration);
    //Math.round will round to the nearest whole number
    //Math.ceil will ALWAYS round up
    //Math.floor will ALWAYS round down
    //Math.random() get random number
    //(Math.random() * insertRangeHere).toFixed(insertDecimalPlaces)
    var songDuration = Math.ceil(sng.duration);
    var songCurrentTime = Math.ceil(sng.currentTime);

    // console.log("Song Duration: ", songDuration);
    // console.log("Song Current : ", sng.currentTime);

    var timeBarWidth = (songCurrentTime/songDuration) * 500;

    var clrR = (Math.random() * 255).toFixed(2);
    var clrG = (Math.random() * 255).toFixed(2);
    var clrB = Math.round( (Math.random() * 155) + 100);

    // console.log("R: " + clrR + ", G: " + clrG + ", B: " + clrB);

    // //template string;
    // console.log(`R: ${clrR}, G: ${clrG}, B: ${clrB}`);

    timeBar.style.width = timeBarWidth + 'px';
    timeBar.style.backgroundColor = `rgb(${clrR},${clrG},${clrB})`;

    //without rounding
    /*
        //this means that timeBarWidth will take up the percentage width of the seekbar
        var timeBarWidth = (sng.currentTime/sng.duration) * 100;
        timeBar.style.width = timeBarWidth + '%'
    */
}

function getSong(songData) {
    // if(songData == 'songList') {
    //     console.log(songList.src);
    // } else if(songData == 'songList2') {
    //     console.log(songList2.src);
    // }

    switch (songData) {
        case 'songList':
            console.log(songList.src)
            sng.src = songList.src;
            document.getElementById("titleText").innerHTML = songList.title;
            document.getElementById("artistText").innerHTML = songList.artist;
            break;
        case 'songList2':
            console.log(songList2.src);
            sng.src = songList2.src;
            document.getElementById("titleText").innerHTML = songList2.title;
            document.getElementById("artistText").innerHTML = songList2.artist;
            break;
        default:
            console.log("no song seleccted")
            break;
    }
}

