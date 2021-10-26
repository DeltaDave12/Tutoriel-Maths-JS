function testNum(a) { // On créé la fonction "testNum" contenant le paramètre "a"
        var result; // On cree la varibale "result" qui nous affichera si le nombre est negatif ou positif
        if (a > 0) {
          result = 'positif';  // Si le nombre est superieur à 0, alors il est positif 
        }
        else {
          result = 'negatif'; // Si le nombre n'est pas superieur à 0, alors il est negatif
        }
        return result; // "return" pour dire que nous renvoyons la fonction (fin de la fonction)
      }
      
      console.log(testNum(5));  // Enfin, l'utilisateur tape le paramètre "a" et le console.log pour afficher dans le terminal le resultat
    