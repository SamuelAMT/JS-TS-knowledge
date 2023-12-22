let username;

document.getElementById("Submit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("text").textContent = `Welcome ${username}`
}