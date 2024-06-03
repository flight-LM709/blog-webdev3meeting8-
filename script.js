// Changing Jumbotron Mini Text

function changeText() {
    var replaceText = document.getElementsByClassName('mini-text');
    replaceText[0].innerHTML = 'Scroll to see';

    document.getElementById('icon-up').style.display = 'none';

    document.getElementById('icon-down').style.display = 'block';
}

// Like & Dislike Feature
var btnLike = document.querySelector('#green');
var btnDislike = document.querySelector('#red');

btnLike.onclick = likeColor
btnDislike.onclick = dislikeColor

function likeColor(){
    if(btnDislike.classList.contains('red')){
        btnDislike.classList.remove('red')
    }
    this.classList.toggle('green')
}

function dislikeColor(){
    if(btnLike.classList.contains('green')){
        btnLike.classList.remove('green')
    }

    this.classList.toggle('red')
}

// Changing Jumbotron Image
function changeImage(element){
    element.setAttribute('src', 'assets/img-header2.png')
}

function changeImageBack(element){
    element.setAttribute('src', 'assets/img-header.png')
}

// Changing Jumbotron Text
function changeJumbotronText(element){
    element.innerText = 'Create Simple Game and Website'
}

function changeJumbotronTextBack(element){
    element.innerText = 'Get Programming Tips Here!'
}


// List Item Aside
var myList = document.getElementsByTagName('li');
var i;
for (i = 0; i < myList.length; i++){
    var span = document.createElement('span');
    span.innerHTML = 'x';
    myList[i].appendChild(span).setAttribute('class', 'close');
}

var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none'
    }
}

// List Item Aside - Add Element
function newElement(){
    var list = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;

    if(inputValue === '' || inputValue === ' '){
        alert('Data cannot be empty!');
    } else {
        console.log('this is my input')
        document.getElementById('myUL').appendChild(list).setAttribute('class', 'search-tags-item');

        list.innerText = inputValue
    }

    document.getElementById('myInput').value = '';

    var span = document.createElement('span');
    span.innerHTML = 'x'
    list.appendChild(span).setAttribute('class', 'close');

    for(i = 0; i < close.length; i++){
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = 'none'
        }
    }
}

/* ---------------------------------- Image Slider ---------------------------------- */
let slides = document.querySelectorAll(".slide");
let buttons = document.querySelectorAll(".slider-btn");
// console.log(buttons)
let currentSlide = 1;

/* ---------------------------------- Manual Image Slider ---------------------------------- */
let manualNav = function (manual) {
  /* add/delete class active on every item of array slides and buttons alternately*/
  slides.forEach(function (slide) {
    slide.classList.remove("active");

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  buttons[manual].classList.add("active");
};

// Call function to set event when class active is clicked
buttons.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    manualNav(i);
    currentSlide = i;
  });
});

/* ---------------------------------- Autoplay Image Slider ---------------------------------- */
let repeat = function () {
  let active = document.getElementsByClassName("active");
  let i = 1;

  let repeater = function () {
    //same as manualNav function, to add/delete class active alternately
    //but it has different condition to run, which is every 5s
    setTimeout(function () {
      [...active].forEach(function (activeSlide) {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      buttons[i].classList.add("active");
      i++;

      // console.log(i);
      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();

AOS.init()