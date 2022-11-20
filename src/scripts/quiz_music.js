document.addEventListener("DOMContentLoaded", (e)=> {
    const music = document.querySelector('.player__music')
    let nameMusicWarmUp = ["tennessee_whiskey", "minnie_the_moocher", "natural", "dance_knights", "mockingbird", "greensleeves"]
    let pictMusicWarmUp = ["blues", "jazz", "rock", "classical_music", "rap", "folk_music"]
    var answers = document.querySelectorAll('.answers__item')
    let score = 5

    let num = Math.floor(Math.random() * (6 - 0)) + 0;
    music.src = './src/music/' + nameMusicWarmUp[num] + '.mp3'

    answers.forEach(answer => answer.addEventListener('click', function(e) {
        e.preventDefault()
        answers = Array.from(answers)
        answers.indexOf(answer)
        if(answers.indexOf(answer) === num) {
            answer.querySelector('.answers__li-btn').style.background = "#00D678"
            document.querySelector('.panel-music__pict').classList.add(pictMusicWarmUp[num])
            str = pictMusicWarmUp[num].charAt(0).toUpperCase() + pictMusicWarmUp[num].slice(1)
            var find = '_'
            var re = new RegExp(find, 'g')
            str = str.replace(re, ' ')
            document.querySelector('.inform__name').innerText = str
            document.querySelector('.next-level__to-next').style.backgroundColor = "rgba(77, 71, 244, 0.744)"
            document.querySelector('.panel-top__score').innerText = `Score: ${score}`
        }
        else {
            answer.querySelector('.answers__li-btn').style.background = "#ff0000"
            score--
        }
    }));
});