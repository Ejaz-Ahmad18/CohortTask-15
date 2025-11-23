// var a=document.createElement("h1")
// a.innerHTML="hello"
// var body=document.querySelector("body")
// body.appendChild(a)



var main=document.querySelector('main')
var btn=document.querySelector('button')

btn.addEventListener("click", ()=>{
var div=document.createElement('div')
var x=Math.random()*100
var y=Math.random()*100
var c1=Math.floor(Math.random()*256)
var c2=Math.floor(Math.random()*256)
var c3=Math.floor(Math.random()*256)
var c4=Math.floor(Math.random()*256)



div.style.backgroundColor=`rgb(${c1},${c2},${c3},${c4})`
div.style.height='100px'
div.style.width='100px'
div.style.position='absolute'


div.style.top=x+'%'
div.style.left=y+'%'



main.appendChild(div)


})