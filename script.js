/*const elemento = document.getElementById('meuBotao')

elemento.addEventListener("click", minhaFuncao)


function minhaFuncao(){
    document.getElementById('texto').innerHTML = "Òla Mundo!"
}
*/
function lampada(){

let lampada = false

  
if(lampada){
    document.getElementById('lampada').src = 'imagens/MicrosoftTeams-image (1).png'
    lampada = false;

} else {
    document.getElementById('lampada').src = 'imagens/MicrosoftTeams-image.png'

    lampada = true;
}
}
document.getElementById("lampada").addEventListener("click", lampada)