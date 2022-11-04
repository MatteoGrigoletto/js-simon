
const listNumber = [];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function generatorNumber(array, slotArray){ 
    while(array.length< slotArray){
       let number = getRandomInt(1,101);
        if(array.includes(number) === false){
            array.push(number);
        }
    }
}
generatorNumber(listNumber, 5);
console.log(listNumber)

document.getElementById(`container`).innerHTML =`questi sono i numeri da ricordare: ${listNumber}`


