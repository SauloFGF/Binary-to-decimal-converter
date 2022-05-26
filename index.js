let numeroB = document.getElementById("binary"),
numeroD = document.getElementById("decimal"),
num = document.querySelectorAll("#valor"),
limpar = document.getElementById("clear"),
converter = document.getElementById("convert"),
binary = "",
binaryA = []

let binario = function () {
    binary += this.getAttribute("data-num")
    numeroB.value += this.getAttribute("data-num")
    binaryA.unshift(this.getAttribute("data-num"))
}

let convercao = function (){
    let total = 0

    for (let i = 0, l = binaryA.length; i < l; i++){
        total = total + binaryA[i] * (2 ** i)
    }

    numeroD.value = total
}

let limpa = function (){
    binary = ""
    numeroB.value = ""
    numeroD.value = ""
    binaryA = []
}

num.onclick = binario
for (let i = 0, l = num.length; i < l; i++) {
    num[i].onclick = binario;
}

converter.onclick = convercao

limpar.onclick = limpa





