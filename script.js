// DARK MODE
function toggleMode(){
let body=document.body;
body.classList.toggle("light");
body.classList.toggle("dark");
}

// SEARCH FILTER
document.getElementById("search").addEventListener("keyup",function(){
let value=this.value.toLowerCase();
let items=document.querySelectorAll("#jobList li");

items.forEach(function(item){
item.style.display =
item.innerText.toLowerCase().includes(value)
? "block" : "none";
});
});

// NOTIFICATION POPUP
window.onload=function(){
setTimeout(()=>{
alert("🔥 New Jobs Updated! Check Now");
},2000);
}
