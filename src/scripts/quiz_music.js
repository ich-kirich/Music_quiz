import { musicBar } from './music_bar_inform.js'
document.addEventListener("DOMContentLoaded", (e)=> {
    const music = document.querySelectorAll('.player__music')
    let nameMusicWarmUp = ["tennessee_whiskey", "minnie_the_moocher", "natural", "dance_knights", "mockingbird", "greensleeves"]
    let pictMusicWarmUp = ["blues", "jazz", "rock", "classical_music", "rap", "folk_music"]
    let massDescript = [
        "Блюз (англ. Blues) — вид афроамериканской светской музыки. Характерной особенностью блюза является использование блюзового лада, включающего в себя пониженные III, V и VII ступени в звукоряде натурального мажора(так называемые «блюзовые ноты»).",
        "Джаз (англ. Jazz) – это направление в музыке, которое возникло в США в самом начале XX века. В нем тесно переплетаются ритмы, обрядовые песнопения и рабочие песни афроамериканцев, а также гармоническая составляющая, присущая музыке белых переселенцев.",
        "Рок (англ. Rock) — обобщающее название ряда направлений популярной музыки. Чаще всего рок исполняется с использованием ударных установок, а также перегруженных электрогитар и бас-гитар.",
        "Классическая музыка (англ. Classical music) — это музыка, исполняемая на классических инструментах и написанная в классических музыкальных формах. Классика, как ничто другое, способна выразить чувства и мысли, ввести в фрустрацию или заразить эйфорией.",
        "Рэп (англ. Rap) - рифмование, фристайл — музыкальная форма вокальной подачи, включающая в себя «рифму, ритмичную речь и уличный жаргон», которая исполняется или произносится нараспев различными способами, как правило, под фоновый бит или музыкальный аккомпанемент.",
        "Фолк или фолк-музыка (англ. Folk music) — музыкальный жанр, включающий традиционную народную музыку и современную фолк-музыку, которая развилась из традиционной во время возрождения народной музыки в XX веке."
    ]
    var answers = document.querySelectorAll('.answers__item')
    let score = 5
    let isWin = false
    let audioRight = new Audio()
    audioRight.src = './src/music/right.mp3'
    let audioWrong = new Audio()
    audioWrong.src = './src/music/wrong.mp3'
    const audio = document.getElementById("audio-bar")
    let num = Math.floor(Math.random() * (6 - 0)) + 0;
    music[0].src = './src/music/' + nameMusicWarmUp[num] + '.mp3'

    answers.forEach(answer => answer.addEventListener('click', function(e) {
        e.preventDefault()
        answers = Array.from(answers)
        answers.indexOf(answer)
        musicBar();
        let pict =  document.querySelector('.underinf__pict')
        for(let i = 0; i < pictMusicWarmUp.length; i++){
            pict.classList.remove(pictMusicWarmUp[i]);
        }
        pict.classList.add(pictMusicWarmUp[answers.indexOf(answer)])
        document.querySelector('.inform__description').style.display = 'block'
        document.querySelector('.inform__description').innerText = massDescript[answers.indexOf(answer)]
        const playBtn = document.getElementsByClassName("player__play-btn")[1];
        playBtn.innerHTML = "&#9658;";
        if(answers.indexOf(answer) === num) {
            audioRight.play();
            audio.pause();
            const playBtn = document.getElementsByClassName("player__play-btn")[0];
            playBtn.innerHTML = "&#9658;";
            for(let i = 0; i < pictMusicWarmUp.length; i++){
                answer.classList.remove(pictMusicWarmUp[i]);
            }
            music[1].src = './src/music/' + nameMusicWarmUp[answers.indexOf(answer)] + '.mp3'
            answer.querySelector('.answers__li-btn').style.background = "#00D678"
            document.querySelector('.panel-music__pict').classList.add(pictMusicWarmUp[num])
            let str = pictMusicWarmUp[num].charAt(0).toUpperCase() + pictMusicWarmUp[num].slice(1)
            let find = '_'
            let re = new RegExp(find, 'g')
            str = str.replace(re, ' ')
            document.querySelector('.inform__name').innerText = str
            document.querySelector('.next-level__to-next').style.backgroundColor = "rgba(77, 71, 244, 0.744)"
            document.querySelector('.panel-top__score').innerText = `Score: ${score}`
            document.querySelector('.inform__text').style.display = 'none'
            document.querySelector('.inform__underinf').style.display = 'flex'
            document.querySelector('.underinf__name').innerText = str
            isWin = true
        }
        else {
            music[1].src = './src/music/' + nameMusicWarmUp[answers.indexOf(answer)] + '.mp3'
            if(!isWin){
                score--
                answer.querySelector('.answers__li-btn').style.background = "#ff0000"
                audioWrong.play();
            }
            let str = pictMusicWarmUp[answers.indexOf(answer)].charAt(0).toUpperCase() + pictMusicWarmUp[answers.indexOf(answer)].slice(1)
            let find = '_'
            let re = new RegExp(find, 'g')
            str = str.replace(re, ' ')
            document.querySelector('.inform__text').style.display = 'none'
            document.querySelector('.inform__underinf').style.display = 'flex'
            document.querySelector('.underinf__name').innerText = str
        }
    }));
});