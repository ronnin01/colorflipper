

function random_Hex_Num(){
    let hexNumbers = Math.floor(Math.random() * 0xfffff * 1000000).toString(16);

    return '#'+hexNumbers.slice(0,6);
}


const clickMe = document.getElementById('click');
const hexNumber = document.getElementById('hex-number');

clickMe.addEventListener("click", ()=>{
    hexNumber.innerHTML = random_Hex_Num(); 
    document.body.style.backgroundColor = random_Hex_Num();
});

// space bar
document.addEventListener("keyup", function keyPress(e){

    if(e.code === 'Space'){
        hexNumber.innerHTML = random_Hex_Num(); 
        document.body.style.backgroundColor = random_Hex_Num();
    }
});

