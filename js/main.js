//1

document.addEventListener('mouseover', function(e) {
    if (e.target.tagName == 'IMG') {
        document.documentElement.style.background = 'red';
        for (const elm of document.getElementsByTagName('H1')){
            elm.style.fontFamily = "Arial";
        }
        for (const elm of document.getElementsByTagName('p')){
            elm.style.fontFamily = "Arial";
        }
    }
});


document.addEventListener('mouseout', function(e) {
    if (e.target.tagName == 'IMG') {
        document.documentElement.style.background = '#c9daeb';
    }
});


//2

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener('input', function(e) {
    if (checkbox.checked) {
        for (const elm of document.getElementsByTagName('div')){
            elm.hidden = true;
        }
    }else{
        for (const elm of document.getElementsByTagName('div')){
            elm.hidden = false;
        }
    }
});


//3

const couleur = document.getElementById("couleurs");
let couleurs = ["white","red","blue","green"];
let indice = 0;
couleur.addEventListener('click', function(e) {
    indice += 1;
    if (indice > 3) indice = 0;
    couleur.style.background = couleurs[indice];
});


//4

document.getElementById("suiviSouris").addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.getElementById("coord").innerHTML = "X : "+ x.toFixed(0) +"    Y : " + y.toFixed(0);
});

