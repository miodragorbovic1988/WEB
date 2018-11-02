(function addClassToOneLi() {
  var oneLi = document.querySelectorAll("#secondUl li");


    oneLi[1].className = "active";
  
})();

var initiallyActive = document.querySelector('.active');
initiallyActive.className = '';

var firstUl = initiallyActive.parentElement.parentElement;

firstUl.previousElementSibling.firstElementChild.firstElementChild.className='active';




// select element with class active
// 