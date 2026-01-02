/* ================================================
   GUIDE: Comment ajouter vos propres projets
   ================================================ */

// ============================================
// 1. AJOUTER UN PROJET GRAPHIQUE
// ============================================

/**
 * Ouvrez script.js et trouvez la section "graphicPortfolio"
 * Ajoutez un nouveau projet avec cette structure:
 */

{
    id: 13,  // Numéro suivant (dernier + 1)
        category: 'beaute',  // Options: 'beaute', 'evenement', 'vente', 'streaming'
            title: 'Votre Titre',
                description: 'Description de votre projet',
                    image: 'assets/nom-de-votre-image.jpg'
}

/**
 * EXEMPLES COMPLETS:
 */

// Projet Beauté
{
    id: 13,
        category: 'beaute',
            title: 'Campagne Parfum Luxe',
                description: 'Visuels pour lancement de parfum premium',
                    image: 'assets/graphic-beaute-4.jpg'
}

// Projet Événement
{
    id: 14,
        category: 'evenement',
            title: 'Concert International',
                description: 'Affiche et communication pour grand concert',
                    image: 'assets/graphic-event-4.jpg'
}

// Projet Vente en ligne
{
    id: 15,
        category: 'vente',
            title: 'Black Friday Campaign',
                description: 'Bannières et animations pour vente flash',
                    image: 'assets/graphic-shop-4.jpg'
}

// Projet Streaming
{
    id: 16,
        category: 'streaming',
            title: 'Package Streamer Pro',
                description: 'Kit complet overlay, scenes, alerts',
                    image: 'assets/graphic-stream-4.jpg'
}


// ============================================
// 2. AJOUTER UN SITE WEB
// ============================================

/**
 * Dans script.js, trouvez "webPortfolio"
 * Ajoutez avec cette structure:
 */

{
    id: 7,  // Numéro suivant
        title: 'Nom du Site',
            description: 'Description courte du projet',
                image: 'assets/web-nom-projet.jpg',
                    link: 'https://url-du-site.com'  // ou '#' si pas de lien
}

/**
 * EXEMPLES:
 */

{
    id: 7,
        title: 'Cabinet Médical',
            description: 'Site avec prise de rendez-vous en ligne',
                image: 'assets/web-medical.jpg',
                    link: 'https://exemple-medical.com'
}

{
    id: 8,
        title: 'École de Musique',
            description: 'Plateforme de cours en ligne et inscriptions',
                image: 'assets/web-musique.jpg',
                    link: '#'
}


// ============================================
// 3. MODIFIER UN PROJET EXISTANT
// ============================================

/**
 * Trouvez le projet par son ID et modifiez les champs:
 */

// AVANT:
{
    id: 1,
        category: 'beaute',
            title: 'Ligne de Produits Beauté',
                description: 'Design d\'emballage pour une ligne de produits de beauté premium',
                    image: 'assets/graphic-beaute-1.jpg'
}

// APRÈS (modifié):
{
    id: 1,
        category: 'beaute',
            title: 'Mon Nouveau Projet Beauté',  // ← Modifié
                description: 'Ma nouvelle description personnalisée',  // ← Modifié
                    image: 'assets/ma-nouvelle-image.jpg'  // ← Modifié
}


// ============================================
// 4. SUPPRIMER UN PROJET
// ============================================

/**
 * Supprimez simplement l'objet entier du tableau
 * Attention: gardez les virgules correctement!
 */

// AVANT:
const graphicPortfolio = [
    {
        id: 1,
        category: 'beaute',
        title: 'Projet 1',
        description: 'Description 1',
        image: 'assets/image1.jpg'
    },
    {
        id: 2,  // ← À supprimer
        category: 'evenement',
        title: 'Projet à supprimer',
        description: 'Description',
        image: 'assets/image2.jpg'
    },
    {
        id: 3,
        category: 'vente',
        title: 'Projet 3',
        description: 'Description 3',
        image: 'assets/image3.jpg'
    }
];

// APRÈS:
const graphicPortfolio = [
    {
        id: 1,
        category: 'beaute',
        title: 'Projet 1',
        description: 'Description 1',
        image: 'assets/image1.jpg'
    },
    // Projet 2 supprimé!
    {
        id: 3,
        category: 'vente',
        title: 'Projet 3',
        description: 'Description 3',
        image: 'assets/image3.jpg'
    }
];


// ============================================
// 5. PRÉPARATION DES IMAGES
// ============================================

/**
 * Pour de meilleurs résultats:
 *
 * ✓ Format: JPG ou PNG
 * ✓ Dimensions recommandées: 800x1000px (format portrait)
 * ✓ Poids: moins de 500 KB par image
 * ✓ Nommage: utilisez des tirets (ex: mon-projet-1.jpg)
 *
 * Placez vos images dans le dossier assets/
 */


// ============================================
// 6. TESTER VOS MODIFICATIONS
// ============================================

/**
 * Après avoir modifié script.js:
 *
 * 1. Sauvegardez le fichier
 * 2. Rafraîchissez la page dans votre navigateur (F5)
 * 3. Vérifiez que vos projets s'affichent correctement
 * 4. Testez le filtrage par catégorie
 */


// ============================================
// ASTUCE RAPIDE
// ============================================

/**
 * Dupliquez un projet existant et modifiez-le!
 * C'est plus rapide que de tout taper:
 *
 * 1. Copiez un bloc { ... }
 * 2. Collez-le
 * 3. Modifiez id, title, description, image
 * 4. N'oubliez pas la virgule entre les projets!
 */

// ============================================
// BESOIN D'AIDE?
// ============================================

/**
 * Email: wappi.vignoly@gmail.com
 * WhatsApp: +237 671 170 671
 */
