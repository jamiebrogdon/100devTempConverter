//Write your pseduo code first! 
//0 -> 32

document.querySelector('#clickHere').addEventListener('click', convert)
  
function convert() {
    //need the value that is in C
    let temp = document.querySelector('#celsius').value
   //convert from C to F
    temp = temp *9/5 + 32
    //show it
    document.querySelector('#placeToYell').innerText = temp
}