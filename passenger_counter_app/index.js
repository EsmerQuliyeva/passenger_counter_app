const countEl=document.getElementById("count")
const adding=document.getElementById("adding")
let count=0
function increment(){
    count=count+1
    countEl.textContent=count
}

function save(){
    let result = count;
    adding.innerHTML+=result+"-"
    
}