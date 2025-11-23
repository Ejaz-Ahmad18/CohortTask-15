// var a=document.createElement("h1")
// a.innerHTML="hello"
// var body=document.querySelector("body")
// body.appendChild(a)



// var main=document.querySelector('main')
// var btn=document.querySelector('button')

// btn.addEventListener("click", ()=>{
// var div=document.createElement('div')
// var x=Math.random()*100
// var y=Math.random()*100
// var c1=Math.floor(Math.random()*256)
// var c2=Math.floor(Math.random()*256)
// var c3=Math.floor(Math.random()*256)
// var c4=Math.floor(Math.random()*256)



// div.style.backgroundColor=`rgb(${c1},${c2},${c3},${c4})`
// div.style.height='100px'
// div.style.width='100px'
// div.style.position='absolute'


// div.style.top=x+'%'
// div.style.left=y+'%'



// main.appendChild(div)


// })

// var main=document.querySelector('main')
// var btn=document.querySelector('button')

// btn.addEventListener("click", ()=>{
// var h1=document.createElement('h1')
// var x=Math.random()*100
// var y=Math.random()*100
// var r=Math.random()*360

// var c1=Math.floor(Math.random()*256)
// var c2=Math.floor(Math.random()*256)
// var c3=Math.floor(Math.random()*256)
// var c4=Math.floor(Math.random()*256)



// h1.style.backgroundColor=`rgb(${c1},${c2},${c3},${c4})`
// // h1.style.height='100px'
// // h1.style.width='100px'
// h1.style.color='white'
// h1.innerHTML='Hello'
// h1.style.position='absolute'
// h1.style.padding='10px'


// h1.style.top=x+'%'
// h1.style.left=y+'%'
// h1.style.rotate=r+'deg'



// main.appendChild(h1)


// })

 var main=document.querySelector('main')
 var btn=document.querySelector('button')

let arr=["Hey! I am Ejaz","I am Student of Sheryians","Now I Learn How To Coding","Now I am Implementing Code","And The Code Are Executing Properly"]


btn.addEventListener('click', function(){

    var h1=document.createElement('h1')
    var ran=Math.floor(Math.random()*arr.length)
h1.innerHTML=arr[ran]

 var c1=Math.floor(Math.random()*256)
 var c2=Math.floor(Math.random()*256)
 var c3=Math.floor(Math.random()*256)
 var c4=Math.floor(Math.random()*256)

 var x=Math.random()*100
 var y=Math.random()*100
 var r=Math.random()*360
 
 h1.style.position='absolute'
h1.style.top=x+'%'
h1.style.left=y+'%'
h1.style.rotate=r+'deg'
 h1.style.color=`rgb(${c1},${c2},${c3},${c4})`

main.appendChild(h1)

})