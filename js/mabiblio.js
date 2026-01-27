const notes = [9,15,4,20,11,14,12,15,8,7,0,16,18,2];

//1

console.table(notes);

//2

let cpt = 0;
for (i in notes){
    if (notes[i]>=10) cpt += 1;
}
console.log(cpt + " étudiants ont eu 10 et plus");

//3

let moy = 0;
let cptMoy = 0;
for (i in notes){
    moy += notes[i];
    cptMoy += 1;
}
moy = moy / cptMoy;
console.log("Moyenne : " + moy.toFixed(2));

//4

let max = -1;
for (i in notes){
    if (notes[i]>max) max = notes[i];
};
console.log("Note maximale : " + max);

//5

function recherche(elm){
    let presence = 0;
    for (i in notes){
        if (notes[i] == elm) presence = 1;
    }
    return presence;
}

let elm = 16;
if (recherche(elm)){
    console.log(elm + " est présent dans les notes");
}else{
    console.log(elm + " n'est pas présent dans les notes");
}