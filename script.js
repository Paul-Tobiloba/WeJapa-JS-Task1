const btn = document.getElementById("generate");
const userInput = document.getElementById("input");

console.log(userInput.value)
const generateRandomNumber =()=>{
    const hue = 'rgb(' + (Math.floor(Math.random() * userInput.value)) + ',' + (Math.floor(Math.random() * userInput.value)) + ',' + (Math.floor(Math.random() * userInput.value)) + ')';
    const shape = document.getElementById("shape");

    if (userInput.value === '') {
        alert('Please enter a number');
    } else if (userInput.value < 0 || userInput.value > 255) {
        alert('Please enter a number ranging from 0 to 255');
    } else {
        return shape.style.backgroundColor = hue;
    }
};

// Event listener to the button
// btn.addEventListener("click", generateRandomNumber());