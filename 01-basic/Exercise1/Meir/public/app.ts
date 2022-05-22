alert("#connect")

const boxs:any = document.querySelectorAll('.box');

console.dir(boxs);
boxs[0].style.backgroundColor = 'blue';
boxs.forEach(element => {
    element.style.backgroundColor = getRamdomColor()
    element.style.top = randomNumber() 
});

function getRamdomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i<6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let divsize = ((Math.random()*100) + 50)toFixed();
let color = '#'+ Math.round(0xffffff * Math.random()).toString(16);

function randomNumber() {
    Math.floor(((Math.random() * 100)));
}

