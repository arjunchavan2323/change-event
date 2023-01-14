//alert("hello")
let cl=console.log
//dom
const selectcolor=document.getElementById("selectcolor")
const all=Array.from(document.querySelectorAll(".all"))
const green=Array.from(document.querySelectorAll(".green"))
const black=Array.from(document.querySelectorAll(".black"))
const orange=Array.from(document.querySelectorAll(".orange"))
const yellow=Array.from(document.querySelectorAll(".yellow"))


//function
/*const selectcoloron=(eve)=>{
   //cl(eve.target.value)
   let getColor=eve.target.value;
   //hide all divs
   //cl(getColor)
   all.forEach(div => div.classList.add('d-none'))
   //getcolor claas orange add karayacha
   let getdivs=Array.from(document.querySelectorAll("."+getColor))
   getdivs.forEach(div=>div.classList.remove('d-none'))



}*/
const selectcoloron=(eve)=>{
   //cl(eve.target.value)
   //divhide
   let getColor=eve.target.value;
   all.forEach(div => div.classList.add('d-none'))
   //select color
   let getdivs=Array.from(document.querySelectorAll("."+getColor))
   getdivs.forEach(div=>div.classList.remove('d-none'))



}







//addeventlisner
selectcolor.addEventListener('change',selectcoloron)














//galary

const shivray=document.getElementById("shivray")
const all1=Array.from(document.querySelectorAll(".all"))
const chhatrapati=Array.from(document.querySelectorAll(".chhatrapati"))
const maharastra=Array.from(document.querySelectorAll(".maharastra"))
const kohali=Array.from(document.querySelectorAll(".kohali"))
const car=Array.from(document.querySelectorAll(".car"))


//function
const changein=(eve)=>{
  // cl(eve.target.value)
  let img=eve.target.value;
  //cl(img)
  all1.forEach(div => div.classList.add("d-none"))
  let getimg=document.querySelectorAll("."+img)
  getimg.forEach(div => div.classList.remove("d-none"))

}




//event
shivray.addEventListener('change',changein)







