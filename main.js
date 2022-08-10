const preResult = Number(document.getElementById("pre-result").value);
const totalCgpa = Number(document.getElementById("totalCgpa").value);
const nscredit = Number(document.getElementById("nscredit").value);
const nsresult = Number(document.getElementById("nsresult").value);



const display = preResult + totalCgpa + nscredit + nsresult


document.getElementById("result").addEventListener("click", display)

function display(){
    document.getElementById("display").innerHTML = display
}
