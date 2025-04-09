const body= document.getElementsByTagName("body")[0];

function setColor(name) {
    body.style.backgroundColor = name;
}
function setTextColor(color) {
    body.style.color = color;
}
function setFontSize(size) {
    body.style.fontSize = size;
}

function randomColor() { 
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;
    body.style.color = color;
    body.style.fontSize = "20px";
    body.style.fontFamily = "Arial, sans-serif";
    body.style.fontWeight = "bold";
    body.style.textAlign = "center";
    body.style.padding = "20px";
    body.style.margin = "0";  


   }


