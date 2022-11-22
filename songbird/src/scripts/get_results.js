

document.addEventListener("DOMContentLoaded", (e)=> {
    let lvlScore = localStorage.getItem(0);
    document.querySelector('.main__result-score').innerHTML = `${lvlScore} / 30`
    if(Number(lvlScore) === 30){
        document.querySelector('.main__btn').innerHTML = "Congratulations!!!"
    }
});

const toOtherPage = document.querySelector('.main__btn')
toOtherPage.onclick = function() {
    let lvlScore = localStorage.getItem(0);
    if(Number(lvlScore) === 30){
        window.location.href = 'index.html';
    }
    else {
        window.location.href = 'quiz.html';
    }
};