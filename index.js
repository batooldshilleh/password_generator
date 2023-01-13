const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", 
"5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let firstEl = document.getElementById("first")
let secondEl = document.getElementById("last")
let size = characters.length

function gener(){
    let password = ""
  for (let i = 1 ; i < 16 ; i++){
    password += characters[Math.floor(Math.random()*size)]
  }
  return password
}

function gen(){
    firstEl.textContent = "  "+ gener()
    secondEl.textContent = "  "+ gener()
}
