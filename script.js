// console.log('hello');
let body = document.querySelector('body');

body.style.background = "#222";
body.style.color = "#fff";
// body.style.height = 200 + "vh";
// let position = window.scrollY;
// console.log(position);




// // let ScrollPosition = 0;
// // let ticking = false;

// // function dosomething(scrollpos){
// //     body.style.background = "#fff";
// // }

// // document.addEventListener('scroll', (e) => {
// //     ScrollPosition = window.scrollY;

// //     if(!ticking){
// //         window.requestAnimationFrame(() => {
// //             dosomething(ScrollPosition);
// //             ticking = false;
// //         });
// //         ticking = true;
// //     }
// // })

// // function goTo(selector, timeout, cb) {
// //     var $el = $(selector);
// //     if (!$el[0]) return;
// //     var $par = $el.parent();
// //     if ($par.is("body")) $par = $("html, body");
// //     setTimeout(() => {
// //       $par.stop().animate({scrollTop: $el.offset().top}, 1000, cb && cb.call($el[0]));
// //     }, timeout || 0);
// //   }
  
  
// //   // USE LIKE:
// //   goTo("#testimonials", 3000, function() {
  
// //     // You can use `this` to reference #testimonials! yey
// //     $(this).append("<br>Going to #contact in 3sec!");
// //     goTo("#contact", 3000);
  
// //   });
  
// //   // Alternatively, without using callbacks you can do
// //   // goTo("#testimonials", 3000);
// //   // goTo("#contact", 6000);
  
// //   // Reuse function for elements click!
// //   $(document).on("click", function(e) {
// //     // e.preventDefault();
// //     goTo($(this).attr("href"));
// //   });

// function randomNum(min , max){
//     return Math.floor(Math.random() * (max - min)) +min;
// }
let btnColors = ['#2a9d8f', "#e63946", "#8338ec", "#fb8500"];
let bodyColors = ['#222', "#540b0e", "#0f4c5c", "#5f0f40"]
let btn = document.getElementById("btn");
function randomNum(min , max){
    return Math.floor(Math.random() * (max - min));
}


// function clickMe(){
//     let Num = randomNum(0,4);
//     document.getElementById("demo").innerHTML = Num;
//     let color = btnColors[Num];
//     let bodyColor = bodyColors[Num];
//     body.style.background = bodyColor;
//     btn.style.background = color;
// }
var darkmode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
    body.style.background = "#000";
    localStorage.setItem("darkMode" , "enabled");
}

const disableDarkMode = () => {
    body.style.background = "#fff";
    localStorage.setItem("darkMode" , null);
}

if(darkmode === "enabled"){
    enableDarkMode();
}else{
    disableDarkMode();
}

function clickMe(){
    darkmode = localStorage.getItem("darkMode");
    if(darkmode !== "enabled"){
        enableDarkMode();
        console.log(darkmode)
    }else{
        disableDarkMode();
        console.log(darkmode)
    }
}

// if(counter){
    //     // text. = counter;
    // }
    
    // function add(){
        //     counter++;
        //     text.innerHTML = counter;
        //     localStorage.setItem('counter', counter);
        //     // text.innerHTML += 1;
        // }
        
let i = 0;
var demo = document.getElementById("demo");
        
var counter = localStorage.getItem("counter");

if(counter === 0){
    document.getElementById("demo").value = i;
}else{
    demo.value = counter;
}


function add(){
    if(counter => 0){
        counter++;
        localStorage.setItem("counter", counter);
        document.getElementById("demo").value = counter;
    }else{
        i++;
        localStorage.setItem("counter", i);
        document.getElementById("demo").value = counter;
    }
}

function remove(){
    if(counter > 0){
        counter--;
        localStorage.setItem("counter", counter);
        document.getElementById("demo").value = counter;
    }else{
        i--;
        localStorage.setItem("counter", i);
        document.getElementById("demo").value = counter;
    }
}

function clearBtn(){
    console.log('hi');
    localStorage.removeItem("counter");
    counter = 0;
    i = 0;
    document.getElementById("demo").value = i;
}