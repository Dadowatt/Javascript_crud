let nom_produit = document.querySelector("#produit");
let categorie = document.querySelector("#categorie");
let quantity = document.querySelector("#quantite");
let prixUnitaire = document.querySelector("#prix");
let tableau = document.querySelector(".tableau");
let table = document.querySelector(".table");
let statusSelect = document.querySelector("#status");
let btn = document.querySelector(".bouton");
let valeurs = [];

btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Récupérer les valeurs des champs
    let quantiteValue = quantity.value;
    let statut = quantiteValue > 0 ? "En stock" : "Rupture de stock"; // Définir le statut automatiquement

    let newValeur = {
        nomProduit: nom_produit.value,
        category: categorie.value,
        quantite: quantity.value,
        prix_unitaire: prixUnitaire.value,
        details: "Ce produit est de haute qualité",
        statut: statut // Statut défini en fonction de la quantité
    };

    valeurs.push(newValeur);

    let trProduit = document.createElement("tr");
    trProduit.innerHTML = `
        <td>${newValeur.nomProduit}</td>
        <td>${newValeur.category}</td>
        <td>${newValeur.quantite}</td>
        <td>${newValeur.prix_unitaire}</td>
        <td class="text-center">
            <a href="#" class="btn btn-success voirplus"><i class="bi bi-plus-lg"></i></a>
            <a href="#" class="btn btn-warning modifier"><i class="bi bi-pencil-square"></i></a>
            <a href="#" class="btn btn-danger supprimer"><i class="bi bi-trash"></i></a>
        </td>
    `;

    let trDetail = document.createElement("tr");
    trDetail.style.display = "none"; 
    trDetail.innerHTML = `
        <td colspan="5">
            <strong>Détails :</strong> ${newValeur.details}
            </br>
            Statut: ${newValeur.statut}
        </td>
    `;

    tableau.appendChild(trProduit);
    tableau.appendChild(trDetail);

    table.classList.remove("d-none");

    nom_produit.value = "";
    categorie.value = "";
    quantity.value = "";
    prixUnitaire.value = "";

    trProduit.querySelector(".voirplus").addEventListener("click", (e) => {
        e.preventDefault();
        if (trDetail.style.display === "none") {
            trDetail.style.display = "table-row";  
        } else {
            trDetail.style.display = "none"; 
        }
    });

    trProduit.querySelector(".modifier").addEventListener("click", (e) => {
        e.preventDefault();
        nom_produit.value = newValeur.nomProduit;
        categorie.value = newValeur.category;
        quantity.value = newValeur.quantite;
        prixUnitaire.value = newValeur.prix_unitaire;
        tableau.removeChild(trProduit);
        tableau.removeChild(trDetail);
    });

    trProduit.querySelector(".supprimer").addEventListener("click", (e) => {
        e.preventDefault();
        if(confirm("voulez-vous vraiment supprimer?")) {
            tableau.removeChild(trProduit);
            tableau.removeChild(trDetail);
        }
    });

});
