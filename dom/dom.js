document.querySelector('#secondUl').className = 'backgroundColor';

(function addClassToLi() {
    var allLi = document.querySelectorAll('ul li');

    for (var i = 0; i < allLi.length; i++) {
        allLi[i].className = 'allLiElements';
    }
})();


(function addUpper() {
    var allThirdUlLi = document.querySelectorAll('#thirdUl li');

    for (var i = 0; i < allThirdUlLi.length; i++) {
        allThirdUlLi[i].className = 'allThirdLiElements';
    }
})();



