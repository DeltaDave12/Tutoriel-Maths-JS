var NR = Math.floor(Math.random()*30) // Notre premier nombre "x", sera un nombre entier entre 0 et 30  
NR = NR - Math.floor(Math.random()*5) // On inclu la fonction x - y où y est un nombre entier entre 0 et 5
var resultat = '' // Notre resultat est pour l'instant vide
console.log(NR) // Affichera le nombre obtnue de la fonction
function Premier (){ // Nous creeons la fonction Premier permettant de savoir si "NR" est un nombre premier
    if ([2,3, 5, 7, 11, 13, 17, 19, 23, 29].includes(NR)){ //Si NR inclu un nombre premier, alors le resultat est qu'il est premier
        resultat = NR + ' est un nombre premier'
        return resultat
    }
    else{                                                 //Si NR inclu un nombre non premier, alors le resultat est qu'il n'est pas premier
        resultat = NR + ' n est pas un nombre premier'
        return resultat
    }
   
}
console.log(Premier(resultat)) // Affiche le resultat
