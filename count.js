let num =0;
num = Number(num);
document.getElementById("decrease").onclick = function(){
    num--;
    document.getElementById("result").textContent = num;
}
document.getElementById("increase").onclick = function(){
    num++
    document.getElementById("result").textContent = num;
}
document.getElementById("reset").onclick = function(){
    num =0;
    document.getElementById("result").textContent = num;
}
document.getElementById("mySubmit").onclick = function(){
    num = document.getElementById("ext").value;
    document.getElementById("result").textContent = num;
}
