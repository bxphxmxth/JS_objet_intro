// ## Exo 1 
// ### Créez un objet avec vos valeurs
// ### 'Nom', 'prenom', 'age', 'taille'
// ### Affichez votre age via un console.log()

// let personne = {
//     nom : "Aala",
//     prenom : "Nasila",
//     age : 24,
//     taille : "166 cm",
// }

// console.log(personne.age);

// ## Exo 2 
// ### Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

// let personne2 = {
//     nom : "Luypaert",
//     prenom : "Justine",
//     age : 23,
//     taille : "170 cm",

// }

// let personne3 = {

//     nom : personne.nom,
//     age : personne2.age,
//     taille : "200 cm",
// }

// console.log(personne3.nom);
// console.log(personne3.age);




// ## Exo 3
// ### Remplir les propriétées du 3eme personnage
// ### Son nom doit valoir le nom du personnage1
// ### Son age doit valoir celui du personnage2
// ### Et sa taille doit être rempli avec la valeur que vous souhaitez


// ## Exo 1
// ### Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

let perso = {
    nom : "Uchiha",
    prenom : "Sasuke",
    sePresenter(prenom,nom){
        console.log(`Bonjour je m'appelle ${this.prenom} ${this.nom}`);
    }
}

// console.log(`Bonjour je m'appelle ${prenom} ${nom}`);
perso.sePresenter();


// ## Exo 2
// ### Créer un objet avec un nom et une méthode
// ### La méthode de votre objet lance un prompt permetant de changer son age
// ### Une alert renvoi "[objet] a [age de l'objet] ans"

let objet = {

    nom : "Sasuke",
    changeAge(age){
        prompt("Inserer un âge");

    }

}