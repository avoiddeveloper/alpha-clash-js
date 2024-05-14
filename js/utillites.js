function hidden(redwan) {
    document.getElementById(redwan).classList.add('hidden');
};

function show(mim) {
    document.getElementById(mim).classList.remove('hidden');
};

function setBgColorById(redwan){
    const element = document.getElementById(redwan);
    element.classList.add('bg-orange-400');
}

function removeBgColorById(mim){
    const element = document.getElementById(mim);
    element.classList.remove('bg-orange-400');
}
function getARandomAlphabet() {
    const alphabetString = 'abcdefghijknmopqurstwvyx';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
};

function setTextElementValueById( mim, value) {
    const element = document.getElementById(mim);
    element.innerText = value;
}

