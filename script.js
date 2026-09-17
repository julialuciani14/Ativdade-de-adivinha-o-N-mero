function adivinheNumero(){
    alert("Pensei em um número entre 1 a 100. Tente adivinha o número!")
    const num1 = Math.floor(Math.random() * 100) + 1
    let resposta = prompt("Palpite")
    let tentativa = 0

    while(resposta  != num1){
        tentativa++

    if(num1 > resposta ){
     alert ("Muito Baixo!!")


    }else{
        alert ("Muito Alto!!")

    }
        resposta = prompt ("Palpite: ")
        tentativa++
    }
         alert("Vocé acertou " + tentativa + "Tentativas")

    }
        