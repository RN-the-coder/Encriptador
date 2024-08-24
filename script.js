function encriptar() {
    let texto = document.getElementById("inputText").value;
    if (!validarTexto(texto)) {
        alert("Solo se permiten letras minúsculas y sin caracteres especiales.");
        return;
    }
    let textoCifrado = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    document.getElementById("outputText").value = textoCifrado;
}

function desencriptar() {
    let texto = document.getElementById("inputText").value;
    if (!validarTexto(texto)) {
        alert("Solo se permiten letras minúsculas y sin caracteres especiales.");
        return;
    }
    let textoDescifrado = texto.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");
    document.getElementById("outputText").value = textoDescifrado;
}

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function copiarTexto() {
    let textoCopiado = document.getElementById("outputText");
    textoCopiado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
