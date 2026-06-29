// Serveur Node.js minimal pour servir le site statique "Retour a ses racines".
// Hostinger (et tout hebergeur Node) lance "npm start" puis ecoute sur process.env.PORT.
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sert les fichiers statiques (index.html, images, etc.) depuis ce dossier.
app.use(express.static(__dirname));

// Pour toute autre route, on renvoie la page principale.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log("Site Retour a ses racines en ligne sur le port " + PORT);
});
