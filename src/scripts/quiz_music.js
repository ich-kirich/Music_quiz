document.addEventListener("DOMContentLoaded", (e)=> {
    const music = document.querySelector('.player__music')
    let nameMusicWarmUp = ["minnie_the_moocher", "tennessee_whiskey", "natural", "dance_knights", "mockingbird", "greensleeves"]

    function generateMusic(){
        let num = Math.floor(Math.random() * (5 - 0)) + 0;
        music.src = './src/music/' + nameMusicWarmUp[num] + '.mp3'
    }
    generateMusic();
});