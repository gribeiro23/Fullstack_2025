let x = Math.random() * 100;
let result = Math.floor(x);
console.log(result)

 function verificação(){
    let verific = parseInt(document.getElementById("num").value)
    if (verific < result){
        console.log("O número é menor")
        document.getElementById("Resultado").innerHTML = "Número menor que o sorteado!"
        document.getElementById("Resultado").style.setProperty("background-color", "red")
    }
    if (verific > result){
        console.log("O número é maior")
        document.getElementById("Resultado").innerHTML = "Número maior que o sorteado!"
        document.getElementById("Resultado").style.setProperty("background-color", "red")
    }
    if (verific == result){
        console.log("Número igual ao sorteado")
        document.getElementById("Resultado").innerHTML = "Número igual ao sorteado!"
        document.getElementById("Resultado").style.setProperty("background-color", "green")
    }
 }
