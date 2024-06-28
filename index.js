//method 1:
//var drums=document.querySelectorAll(".drum").length;
//for (let x=0;x<drums;x++){
//    document.querySelectorAll(".drum")[x].addEventListener("click",function fgh(){
 //alert("drum drum drum drum drum !");
 //   });
//} 


/*
//method 3:
var drums=document.querySelectorAll(".drum").length;
for (let x=0;x<drums;x++){
    document.querySelectorAll(".drum")[x].addEventListener("click",()=>{
 alert("drum drum drum drum drum !");
    });
} 

//method 4:
var drums=document.querySelectorAll(".drum").length;
for (let x=0;x<drums;x++){
    document.querySelectorAll(".drum")[x].addEventListener("click",function (){
 alert("drum drum drum drum drum !");
    });
} 

//method 5:
var drums=document.querySelectorAll(".drum").length;
for (let x=0;x<drums;x++){
    document.querySelectorAll(".drum")[x].addEventListener("click",function (event){
 alert("drum drum drum drum drum !");
    });
}

//method 6:
var drums=document.querySelectorAll(".drum").length;
for (let x=0;x<drums;x++){
    document.querySelectorAll(".drum")[x].addEventListener("click",clicking);
    function clicking(){
 alert("drum drum drum drum drum !");
    };
} 

//method 7:
var drums=document.querySelectorAll(".drum").length;
for (let x=0;x<drums;x++){
    document.querySelectorAll(".drum")[x].addEventListener("click",function fgh(event){
 alert("drum drum drum drum drum !");
    });
} 
 */

//practice:
/*document.querySelectorAll(".drum").length;
for(let i=0;i<length;i++){
  document.querySelectorAll(".drum")[i].addEventListener('click',(e)=>{
    alert('prep');
  });
};*/



//method 2:
//detecting button press
var drums=document.querySelectorAll(".drum").length;
for (let x=0;x<drums;x++){
    document.querySelectorAll(".drum")[x].addEventListener("click",function (e){
 let b=this.innerHTML;
     makeSound(b);
     buttonAnimation(b);
     });
  } 
//detecting keyboard down press
document.addEventListener("keydown",function(event){
     makeSound(event.key);
     buttonAnimation(event.key);
     console.log(event);
});
document.addEventListener('keydown',function(e){
    alert('clicked!');
});

function makeSound(key){
    switch(key){
    case "w":
        var audio1=new Audio("./sounds/crash.mp3");
        audio1.play();
        break;
        case "a":
        var audio2=new Audio("./sounds/kick-bass.mp3");
        audio2.play();
        break;
        case "s":
        var audio3=new Audio("./sounds/snare.mp3");
        audio3.play();
        break;
        case "d":
        var audio4=new Audio("./sounds/tom-1.mp3");
        audio4.play();
        break;
        case "j":
        var audio5=new Audio("./sounds/tom-2.mp3");
        audio5.play();
        break;
        case "k":
        var audio6=new Audio("./sounds/tom-3.mp3");
        audio6.play();
        break;
        case "l":
        var audio7=new Audio("./sounds/tom-4.mp3");
        audio7.play();
        break;
        default:
            console.log(key);
        }

}

function buttonAnimation(currentKey){
      let activeButton=  document.querySelector('.'+currentKey);
    
      activeButton.classList.add('pressed');

    setTimeout((e)=>{
    activeButton.classList.remove('pressed');

    },4000);
}



















//this.style.color="blue";
//console.log(this);
//console.log(this.innerHTML);


