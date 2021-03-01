var image = null;

function init() {
    image = document.getElementById('Redball');
    image.style.position = 'relative';
    image.style.left = '0px';    
}

function moveImage(){ 
    let image = document.getElementById('Redball');
        if (image.style.left == '0px') {
        image.style.left = '800px';
        console.log("if")
    }  else {
        image.style.left = '50px';
        console.log("else")
    }
}

window.onload = init;