import { musicBar } from './music_bar_inform.js'
import { updateMusic } from './music_bar.js'
var level = 0
var resultScore = 0

document.addEventListener("DOMContentLoaded", (e)=> {
    generateMultipalChoise(level)
});


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
        [
            "indie_rock",
            "heavy_metal",
            "speed_metal",
            "hard_rock",
            "punk_rock",
            "grunge"
        ],
        [
            "bebop",
            "cool_jazz",
            "swing",
            "latin_jazz",
            "electro_swing",
            "indo_jazz"
        ],
        [
            "jazz_rap",
            "cloud_rap",
            "gangsta_rap",
            "crunk",
            "trap",
            "mumble_rap"
        ],
        [
            "k_pop",
            "electropop",
            "j_pop",
            "q_pop",
            "disco",
            "traditional_pop_music"
        ]
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
            "Turkish folk music (рус. Турецкая народная музыка) is the traditional music of Turkish people living in Turkey influenced by the cultures of Anatolia and former territories in Europe and Asia. Its unique structure includes regional differences under one umbrella."
        ],
        [
            "Indie rock (рус. Инди-рок) is an umbrella term for a wide range of musicians and styles associated with the counterculture and related to rock music.",
            "Heavy metal (рус. Хэви-метал) is a genre of rock music, the first and original direction of metal. Usually this word refers to 'classic' metal in the form in which it was created in the 1970s.",
            "Speed metal (рус. Спид-метал) is a musical genre, one of the directions of metal, located at the junction of traditional heavy metal, thrash metal and power metal. Speed metal became an important stage in the development of metal music.",
            "Hard rock (рус. Хард-рок) or heavy rock is a genre of rock music characterized by a dedicated role of the rhythm section, mainly bass guitar and percussion instruments.",
            "Punk rock (рус. Панк-рок) is a music genre that emerged in the mid-1970s. Rooted in 1960s garage rock, punk bands rejected the perceived excesses of mainstream 1970s rock.",
            "Grunge (рус. Гранж) is an alternative rock sub-style that developed from hardcore punk and heavy metal in the mid-1980s in the US state of Washington, primarily in Seattle and nearby cities."
        ],
        [
            "Bebop or bop (рус. Бибоп) is a style of jazz developed in the early-to-mid-1940s in the United States. The style features compositions characterized by a fast tempo, complex chord progressions with rapid chord changes and numerous changes of key, instrumental virtuosity.",
            "Cool jazz (рус. Крутой джаз) is a style of modern jazz music that arose in the United States after World War II. It is characterized by relaxed tempos and lighter tone, in contrast to the fast and complex bebop style. Cool jazz often employs formal arrangements and incorporates elements of classical music.",
            "Swing music (рус. Свинг) is a style of jazz that developed in the United States during the late 1920s and early 1930s. It became nationally popular from the mid-1930s. The name derived from its emphasis on the off-beat, or nominally weaker beat.",
            "Latin jazz (рус. Латинский джаз) is a genre of jazz with Latin American rhythms. The two main categories are Afro-Cuban jazz, rhythmically based on Cuban popular dance music, with a rhythm section employing ostinato patterns or a clave, and Afro-Brazilian jazz, which includes samba.",
            "Electro swing (рус. Электро-свинг), or swing house, is an electronic dance music genre that combines the influence of vintage or modern swing and jazz mixed with house and hip hop.",
            "Indo jazz (рус. Индо-джаз) is a musical genre consisting of jazz, classical and Indian influences. Its structure and patterns are based on Indian music with typical jazz improvisation overlaid.",
        ],
        [
            "Jazz rap (рус. Джаз-рэп) is a trend in hip hop music that emerged in the late 1980s. Beats in jazz rap are jazz samples; texts are positivist",
            "Cloud rap (рус. Клауд-рэп) is a micro-genre of hip-hop music. Usually characterized by a hazy and lo-fi sound.",
            "Gangsta rap (рус. Гангста-рэп) is a style of hip hop characterized by themes and lyrics that usually emphasize the 'gangster', 'O.G', and 'Thug-Lif' lifestyle.",
            "Crunk (рус. Кранк) is a form of southern hip hop or southern rap. Crunk music is a mix of repetitive chants and drum machine rhythms, usually generated on the most popular of the drum machines.",
            "Trap (рус. Трэп) is a subgenre of hip hop. The music makes extensive use of multi-layer synthesizers, which lead the melody with a hard line; crunchy, dirty and rhythmic snare drums; deep drums-barrels.",
            "Mumble rap (рус. Мамбл-рэп) is a subgenre of trap music that emerged in the mid-2010s in the United States. It is characterized by an emphasis on expressiveness of sound, in contrast to traditional hip-hop, which is based on lyrics and rhymes.",
        ],
        [
            "K-pop (рус. K-поп) is a musical genre that originated in South Korea and incorporates elements of western electropop, hip-hop, dance music, and contemporary rhythm and blues.",
            "Electropop (рус. Электропоп) is a musical genre that combines elements of electronic and pop music. Usually described as a type of synthpop with a particular leaning towards electronica.",
            "J-pop (рус. J-поп) is Japanese popular music. In special cases, the term 'J-pop' is used by musicians for their music, close to rock, but for it the term J-rock is usually used.",
            "Q-pop (рус. Q-поп) is a musical subculture that originated in Kazakhstan and incorporates elements of Western electropop, hip-hop, dance music and modern rhythm and blues.",
            "Disco (рус. Диско) is one of the main genres of dance music of the 20th century, which emerged in the early 1970s.",
            "Traditional pop music (рус. Традиционная поп музыка) - in modern English terminology, popular music of the rock and roll era, that is, Western, primarily American, popular music in a style that was standard until it was superseded by rock and roll in the mid-1950s.",
        ]
    ]

    const answersTolevels = [
        [
            "Blues",
            "Jazz",
            "Rock",
            "Classical music",
            "Rap",
            "Folk music"
        ],
        [
            "English folk music",
            "Irish folk music",
            "German folk music",
            "Russian folk music",
            "Spanish folk music",
            "Turkish folk music"
        ],
        [
            "Indie rock",
            "Heavy metal",
            "Speed metal",
            "Hard rock",
            "Punk rock",
            "Grunge"
        ],
        [
            "Bebop",
            "Cool jazz",
            "Swing",
            "Latin jazz",
            "Electro swing",
            "Indo jazz"
        ],
        [
            "Jazz rap",
            "Cloud rap",
            "Gangsta rap",
            "Crunk",
            "Trap",
            "Mumble rap"
        ],
        [
            "K-pop",
            "Electropop",
            "J-pop",
            "Q-pop",
            "Disco",
            "Traditional pop music"
        ]
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

    const btnResult = document.querySelector('.next-level__to-next')
    if(level === 5) {
        btnResult.innerHTML = "Results"
    }

    answers.forEach(answer => answer.addEventListener('click', function handler(e) {
        e.preventDefault()
        answers = Array.from(answers)
        answers.indexOf(answer)
        let pict = document.querySelector('.underinf__pict')
        for(let i = 0; i < musicsArray[level].length; i++){
            pict.classList.remove(musicsArray[level][i]);
        }
        pict.classList.add(musicsArray[level][answers.indexOf(answer)])
        document.querySelector('.inform__description').style.display = 'block'
        document.querySelector('.inform__description').innerText = massDescript[level][answers.indexOf(answer)]
        const playBtn = document.getElementsByClassName("player__play-btn")[1];
        playBtn.innerHTML = "&#9658;";
        if(answers.indexOf(answer) === num) {
            const playBtn = document.getElementsByClassName("player__play-btn")[0];
            if(!isWin){
                audioRight.play();
                audio.pause();
                playBtn.innerHTML = "&#9658;";
                toNextLevel(num, level);
                isWin = true
            }
            for(let i = 0; i < musicsArray[level].length; i++){
                answer.classList.remove(musicsArray[level][i]);
            }
            music[1].src = './src/music/' + musicsArray[level][answers.indexOf(answer)] + '.mp3'
            musicBar();
            answer.querySelector('.answers__li-btn').style.background = "#00D678"
            document.querySelector('.panel-music__pict').classList.add(musicsArray[level][num])
            let str = musicsArray[level][num].charAt(0).toUpperCase() + musicsArray[level][num].slice(1)
            let find = '_'
            let re = new RegExp(find, 'g')
            str = str.replace(re, ' ')
            document.querySelector('.inform__name').innerText = answersTolevels[level][num]
            document.querySelector('.next-level__to-next').classList.add("active")
            if(score > 0){
                resultScore += score
            }
            document.querySelector('.panel-top__score').innerText = `Score: ${resultScore}`
            document.querySelector('.inform__text').style.display = 'none'
            document.querySelector('.inform__underinf').style.display = 'flex'
            document.querySelector('.underinf__name').innerText = str
        }
        else {
            music[1].src = './src/music/' + musicsArray[level][answers.indexOf(answer)] + '.mp3'
            musicBar();
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
        [
            "Indie rock",
            "Heavy metal",
            "Speed metal",
            "Hard rock",
            "Punk rock",
            "Grunge"
        ],
        [
            "Bebop",
            "Cool jazz",
            "Swing",
            "Latin jazz",
            "Electro swing",
            "Indo jazz"
        ],
        [
            "Jazz rap",
            "Cloud rap",
            "Gangsta rap",
            "Crunk",
            "Trap",
            "Mumble rap"
        ],
        [
            "K-pop",
            "Electropop",
            "J-pop",
            "Q-pop",
            "Disco",
            "Traditional pop music"
        ]
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
        [
            "indie_rock",
            "heavy_metal",
            "speed_metal",
            "hard_rock",
            "punk_rock",
            "grunge"
        ],
        [
            "bebop",
            "cool_jazz",
            "swing",
            "latin_jazz",
            "electro_swing",
            "indo_jazz"
        ],
        [
            "jazz_rap",
            "cloud_rap",
            "gangsta_rap",
            "crunk",
            "trap",
            "mumble_rap"
        ],
        [
            "k_pop",
            "electropop",
            "j_pop",
            "q_pop",
            "disco",
            "traditional_pop_music"
        ]
    ]
    toNextLevel.onclick = function() {
        if(level === 5) {
            btnResult.innerHTML = "Results"
        }
        else {
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
            toNextLevel.outerHTML = toNextLevel.outerHTML
        }
    };
}