var btn1 = document.getElementById('clicker1');
var img = document.getElementById('esquilo');
var btn2 = document.getElementById('clicker2');
btn1.onclick = function x(){
    if(btn1.value === 'mostrar') {
        esquilo.src = './imagens/img1.png';
        btn1.style.backgroundColor='rgb(155, 6, 6)';
        btn2.style.backgroundColor='rgb(44, 160, 53)';
        // btn1.value = 'esconder';
        // btn1.innerHTML = 'Esconder';
    } 
    // else {
    //     esquilo.src = './imagens/img1.jpg';
    //     // btn1.value = 'mostrar';
    //     // btn1.innerHTML = 'Mostrar';
    // }
}
btn2.onclick = function y(){
     if (btn2.value === 'esconder') {
        esquilo.src = './imagens/img2.png';
        btn2.style.backgroundColor='rgb(155, 6, 6)';
        btn1.style.backgroundColor='rgb(44, 160, 53)';
    } 
    // else {
//         btn1.value = 'esconder';
//         btn1.innerHTML = 'Esconder';
//     }
// }
}
