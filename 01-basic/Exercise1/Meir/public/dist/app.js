alert("#connect");
var boxs = document.querySelectorAll('.box');
console.dir(boxs);
boxs[0].style.backgroundColor = 'blue';
boxs.forEach(function (element) {
    element.style.backgroundColor = getRamdomColor();
    element.style.top = randomNumber();
});
function getRamdomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var divsize = ((Math.random() * 100) + 50), toFixed;
();
var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
function randomNumber() {
    Math.floor(((Math.random() * 100)));
}
