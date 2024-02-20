var pontinhos = 0;
function boaresposta() {
    pontinhos = pontinhos + 1;
    console.log(pontinhos);
    document.getElementById('pontosvar').innerText = pontinhos;
}
botao.addEventListener('boaresposta', boaresposta()) ;
    // Aqui você pode colocar o que deseja que aconteça quando o botão for pressionado

