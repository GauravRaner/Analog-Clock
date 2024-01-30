let hr=document.querySelector("#hr");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");

function getTime(){
  let date=new Date();
  let hh=date.getHours();
  let mm=date.getMinutes();
  let ss=date.getSeconds();

  let hRotation=30*hh + mm/2;
  let mRotation=6*mm;
  let sRotation=6*ss;

  hr.style.transform=`rotate(${hRotation}deg)`;
  min.style.transform=`rotate(${mRotation}deg)`;
  sec.style.transform=`rotate(${sRotation}deg)`;

}
setInterval(getTime,1000);


let btn=document.querySelector('#btn');
const clock=document.querySelector('.clock');
let currentMode="dark";

btn.addEventListener("click",()=>{
 if(currentMode=="dark"){
  currentMode="light";
  document.body.style.backgroundColor="white";
  clock.style.backgroundColor="skyblue";
 }else{
  currentMode="dark";
  document.body.style.backgroundColor="";
  clock.style.backgroundColor="";
 }
})




