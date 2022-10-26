var btn = document.getElementById('click');
var img = document.getElementById('puppy');
var body = document.getElementById('corpo');

btn.onclick = function () {
    if(btn.value === 'showTheSnake'){   
        img.src='./img/snake.png';
        body.style.backgroundColor='rgb(236, 236, 135)';
        btn.style.backgroundColor='rgb(231, 53, 112)';
        btn.value = 'showTheDog';
        btn.innerHTML = 'Show the dog';
    } else {
        img.src='./img/puppy.png'; 
        body.style.backgroundColor='rgb(241, 158, 174)';
        btn.style.backgroundColor='rgb(228, 228, 15)';
        btn.value = 'showTheSnake';
        btn.innerHTML = 'Show the snake';
    }
}