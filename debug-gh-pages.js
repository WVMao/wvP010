(function () {
    // Diagnostic Script pour GitHub Pages
    console.log("🔍 Démarrage du diagnostic des images...");

    const checkImage = 'assets/graphic-2025-1.jpg';

    const img = new Image();
    img.onload = function () {
        console.log("✅ L'image test a été trouvée ! Le chemin 'assets/' est correct.");
        // Si ça marche, on ne fait rien ou on affiche un petit succès discret
        showStatus("✅ Diagnostic: Les images sont accessibles. Si vous ne les voyez pas, videz le cache de votre navigateur.", "green");
    };
    img.onerror = function () {
        console.error("❌ L'image test n'a pas été trouvée.");
        // Si ça échoue, on affiche une bannière d'aide
        showStatus(`
            ⚠️ <strong>Problème détecté :</strong> Le site n'arrive pas à trouver le dossier <code>assets</code>.<br><br>
            <strong>Solutions possibles :</strong><br>
            1. Vérifiez sur GitHub que le dossier <code>assets</code> est bien présent et contient les images.<br>
            2. Vérifiez que les noms de fichiers sont bien en minuscules (ex: <code>graphic-2025-1.jpg</code> et pas <code>Graphic...</code>).<br>
            3. Assurez-vous d'attendre 2 minutes après le "git push".
        `, "#ff4757");
    };
    img.src = checkImage;

    function showStatus(message, color) {
        const div = document.createElement('div');
        div.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: ${color};
            color: white;
            padding: 15px;
            text-align: center;
            z-index: 99999;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            font-family: sans-serif;
            font-size: 14px;
            line-height: 1.5;
        `;
        div.innerHTML = message + '<br><button onclick="this.parentElement.style.display=\'none\'" style="margin-top:10px; background:white; color:black; border:none; padding:5px 10px; cursor:pointer; border-radius:4px;">Fermer</button>';
        document.body.appendChild(div);
    }
})();
