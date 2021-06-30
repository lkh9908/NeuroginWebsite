var icon1 = document.querySelector('#tech1');
var icon2 = document.querySelector('#tech2');
var icon3 = document.querySelector('#tech3');
var icon4 = document.querySelector('#tech4');

var part1 = document.querySelector('.part1');
var part2 = document.querySelector('.part2');
var part3 = document.querySelector('.part3');
var part4 = document.querySelector('.part4');

icon1.onclick = function(event){
    part1.style.display = 'block';

    part2.style.display = 'none';
    part3.style.display = 'none';
    part4.style.display = 'none';
}

icon2.onclick = function(event){
    part2.style.display = 'block';

    part1.style.display = 'none';
    part3.style.display = 'none';
    part4.style.display = 'none';
}

icon3.onclick = function(event){
    part3.style.display = 'block';

    part1.style.display = 'none';
    part2.style.display = 'none';
    part4.style.display = 'none';
}

icon4.onclick = function(event){
    part4.style.display = 'block';

    part1.style.display = 'none';
    part2.style.display = 'none';
    part3.style.display = 'none';
}