document.addEventListener("DOMContentLoaded", (e)=> {

    const audio = document.getElementById("audio-bar");
    const playTime = document.getElementsByClassName("player__play-time")[0];
    const playBtn = document.getElementsByClassName("player__play-btn")[0];
    const curTime = document.getElementById("cur-time");
    const volume = document.getElementById("volume");
    const icoVolume = document.getElementById("icoVolume");
    var isPlaying = false;
    
    audio.onloadedmetadata = function() {
        curTime.max = audio.duration;
    };

    audio.ontimeupdate=function() {
        var sec = audio.currentTime;
        var hours = Math.floor(sec / 3600);
        var minutes = Math.floor((sec - (hours * 3600)) / 60);
        var seconds = sec - (hours * 3600) - (minutes * 60);
        seconds = Math.round(seconds);
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        playTime.innerHTML = minutes + ':' + seconds;
        if(isPlaying) {
            curTime.value = audio.currentTime;
        }
    };

    audio.addEventListener("ended", function() {
        isPlaying = false;
        playBtn.innerHTML = "&#9658;";
    });

    volume.onchange=function() {
        audio.volume = volume.value / 10;
    };

    curTime.onchange=function() {
        audio.pause();
        audio.currentTime = curTime.value;
        audio.play();
        playBtn.innerHTML = "&#10074;&#10074;";
        isPlaying = true;
    };

    icoVolume.onclick=function() {
        if(volume.value == 0) {
            icoVolume.innerHTML = "&#128266;";
            volume.value = 10;
            audio.volume = 1;
        } 
        else {
            icoVolume.innerHTML = "&#128263;";
            volume.value = 0;
            audio.volume = 0;
        }
    };

    playBtn.addEventListener("click", (a)=> {
        if(isPlaying)
        {
            audio.pause();
            isPlaying = false;
            playBtn.innerHTML = "&#9658;";
        }
        else {
            audio.play();
            isPlaying = true;
            playBtn.innerHTML = "&#10074;&#10074;";
        }
    });
});