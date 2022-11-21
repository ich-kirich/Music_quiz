import { musicBar } from './music_bar_inform.js'
import { updateMusic } from './music_bar.js'
var level = 0
var resultScore = 0

generateMultipalChoise(level)

function generateMusic(nameMusic){
    const music = document.querySelectorAll('.player__music')
    let num1 = Math.floor(Math.random() * (6 - 0)) + 0;
    music[0].src = './src/music/' + nameMusic[num1] + '.mp3'
    return num1
}

function generateMultipalChoise(level) {
    const musicsArray = [
        [
            "blues",
            "jazz",
            "rock",
            "classical_music",
            "rap",
            "folk_music"
        ],
        [
            "english",
            "irish",
            "german",
            "russian",
            "spanish",
            "turkish"
        ],
    ]
    const massDescript = [
        [
        "Blues (рус. Блюз) is a type of African-American secular music. A characteristic feature of the blues is the use of the blues scale, which includes lowered III, V and VII steps in the natural major scale (the so-called 'blues notes').",
        "Jazz (рус. Джаз) is a direction in music that originated in the United States at the very beginning of the 20th century. Rhythms, ritual chants and work songs of African Americans are closely intertwined in it, as well as the harmonic component inherent in the music of white settlers.",
        "Rock (рус. Рок) is a generalized name for a number of areas of popular music. Most often, rock is performed using drum kits, as well as overdriven electric guitars and bass guitars.",
        "Classical music (рус. Классическая музыка) is music performed on classical instruments and written in classical musical forms. Classics, like nothing else, are able to express feelings and thoughts, lead into frustration or infect with euphoria.",
        "Rap (рус. Рэп) - rhyming, freestyle - a musical form of vocal delivery, including 'rhyme, rhythmic speech and street jargon', which is performed or sung in a variety of ways, usually to a background beat or musical accompaniment.",
        "Folk or folk music (рус. Народная музыка) is a musical genre that includes traditional folk music and modern folk music, which developed from traditional folk music during the revival of folk music in the 20th century."
        ],
        [
            "English music (рус. Английская народная музыка) is traditional English music and music based on it. Often resonates with spiritual, and later - with non-academic music. An important part of English folk music is the sea songs of shanty, jig, hornpipe, ritual dance Morris.",
            "Irish folk music (рус. Ирландская народная музыка) is the traditional music of the Irish people and is part of Irish folk culture. The music is diverse: from lullabies to drinking songs, from slow instrumental melodies to fast fiery dances",
            "German music (рус. Немецкая народная музыка) - the achievements of the musical culture of the German people, regardless of the country of residence; the result of a centuries-old historical process of formation and development of peculiar traditions.",
            "Russian folk music (рус. Русская народная музыка) is the traditional music of the Russian people and is part of Russian folk culture. Russian folk music is the basis for all Russian professional music.",
            "Spain music (рус. Испанская народная музыка) has a long history. It has played an important role in the development of Western music, and has greatly influenced Latin American music. Spanish music is often associated with traditional styles such as flamenco and classical guitar.",
            "Turkish folk music (рус. Турецкая народная музыка) is the traditional music of Turkish people living in Turkey influenced by the cultures of Anatolia and former territories in Europe and Asia. Its unique structure includes regional differences under one umbrella.",
        ],
    ]
    const music = document.querySelectorAll('.player__music')
    var answers = document.querySelectorAll('.answers__item')
    let score = 5
    let isWin = false
    let audioRight = new Audio()
    audioRight.src = './src/music/right.mp3'
    let audioWrong = new Audio()
    audioWrong.src = './src/music/wrong.mp3'
    const audio = document.getElementById("audio-bar")
    let num = generateMusic(musicsArray[level]);
    updateMusic();

    answers.forEach(answer => answer.addEventListener('click', function handler(e) {
        console.log("asdasad")
        e.preventDefault()
        answers = Array.from(answers)
        answers.indexOf(answer)
        musicBar();
        let pict = document.querySelector('.underinf__pict')
        for(let i = 0; i < musicsArray[level].length; i++){
            pict.classList.remove(musicsArray[level][i]);
        }
        pict.classList.add(musicsArray[level][answers.indexOf(answer)])
        document.querySelector('.inform__description').style.display = 'block'
        document.querySelector('.inform__description').innerText = massDescript[level][answers.indexOf(answer)]
        const playBtn = document.getElementsByClassName("player__play-btn")[1];
        playBtn.innerHTML = "&#9658;";
        console.log(num + " " + answers.indexOf(answer) + " ")
        if(answers.indexOf(answer) === num) {
            const playBtn = document.getElementsByClassName("player__play-btn")[0];
            if(!isWin){
                audioRight.play();
                audio.pause();
                playBtn.innerHTML = "&#9658;";
                toNextLevel(num, level);
            }
            for(let i = 0; i < musicsArray[level].length; i++){
                answer.classList.remove(musicsArray[level][i]);
            }
            music[1].src = './src/music/' + musicsArray[level][answers.indexOf(answer)] + '.mp3'
            answer.querySelector('.answers__li-btn').style.background = "#00D678"
            console.log("ass")
            document.querySelector('.panel-music__pict').classList.add(musicsArray[level][num])
            let str = musicsArray[level][num].charAt(0).toUpperCase() + musicsArray[level][num].slice(1)
            let find = '_'
            let re = new RegExp(find, 'g')
            str = str.replace(re, ' ')
            document.querySelector('.inform__name').innerText = str
            document.querySelector('.next-level__to-next').classList.add("active")
            if(score > 0){
                resultScore += score
            }
            document.querySelector('.panel-top__score').innerText = `Score: ${resultScore}`
            document.querySelector('.inform__text').style.display = 'none'
            document.querySelector('.inform__underinf').style.display = 'flex'
            document.querySelector('.underinf__name').innerText = str
            isWin = true
        }
        else {
            music[1].src = './src/music/' + musicsArray[level][answers.indexOf(answer)] + '.mp3'
            if(!isWin){
                score--
                answer.querySelector('.answers__li-btn').style.background = "#ff0000"
                audioWrong.play();
            }
            let str = musicsArray[level][answers.indexOf(answer)].charAt(0).toUpperCase() + musicsArray[level][answers.indexOf(answer)].slice(1)
            let find = '_'
            let re = new RegExp(find, 'g')
            str = str.replace(re, ' ')
            document.querySelector('.inform__text').style.display = 'none'
            document.querySelector('.inform__underinf').style.display = 'flex'
            document.querySelector('.underinf__name').innerText = str
        }
    }));
}

function toNextLevel(num1, level){
    const toNextLevel = document.querySelector('.next-level__to-next')
    const answersTolevels = [
        [
            "Blues",
            "Jazz",
            "Rock",
            "Classical music",
            "Rap",
            "Folk music",
        ],
        [
            "English folk music",
            "Irish folk music",
            "German folk music",
            "Russian folk music",
            "Spanish folk music",
            "Turkish folk music",
        ],
    ]

    const musicsArray = [
        [
            "blues",
            "jazz",
            "rock",
            "classical_music",
            "rap",
            "folk_music"
        ],
        [
            "english",
            "irish",
            "german",
            "russian",
            "spanish",
            "turkish"
        ],
    ]
    toNextLevel.onclick = function() {
        document.querySelector('.panel-music__pict').classList.remove(musicsArray[level][num1])
        for(let r = 0; r < musicsArray[level].length; r++){
            document.querySelector('.underinf__pict').classList.remove(musicsArray[level][r])
        }
        level++
        document.querySelector('.next-level__to-next').classList.remove("active")
        document.querySelector('.inform__name').innerText = "* * *"
        document.querySelector('.inform__text').style.display = 'block'
        document.querySelector('.inform__underinf').style.display = 'none'
        document.querySelector('.inform__description').style.display = 'none'
        const liBtn = document.querySelectorAll('.answers__li-btn')
        let audio = document.getElementById("audio-bar")
        audio.pause();
        audio = document.getElementById("audio-bar-inform")
        audio.pause();
        for(let i = 0; i < liBtn.length; i++){
            liBtn[i].style.background = "#444"
        }
        const levelsMusic = document.getElementsByClassName('questions__item')
        levelsMusic[level - 1].classList.remove("active")
        levelsMusic[level].classList.add("active")
        const answers = document.querySelectorAll('.answers__text')
        for(let i = 0; i < answers.length; i++){
            answers[i].innerText = answersTolevels[level][i]
        }
        var answersToDelListener = Array.from(document.querySelectorAll('.answers__item'))
        for(let z = 0; z < answersToDelListener.length; z++){
            answersToDelListener[z].outerHTML = answersToDelListener[z].outerHTML
        }
        generateMultipalChoise(level)
    };
}