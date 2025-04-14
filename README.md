# TweetScoope

## 💡 Description

Ce projet affiche les derniers tweets des personnalités politiques, triés par date et filtrables par mot-clé. Il utilise **Deno** pour le backend et **SvelteKit** pour le frontend, permettant une gestion fluide des tweets, avec des fonctionnalités de recherche et de tri, ainsi que des tags thématiques.

## 🧠 Objectifs

- Afficher les tweets des personnalités politiques.
- Rechercher les tweets par mot-clé.
- Trier les tweets par date (croissante/décroissante).
- Simuler une classification thématique des tweets avec des tags (ex : économie, santé, etc.).

## 🧱 Technologies

- **Backend** : [Deno](https://deno.land/) (récupération des tweets via une API tierce ou simulation avec un fichier JSON)
- **Frontend** : [SvelteKit](https://kit.svelte.dev/) (affichage, recherche, filtrage)

## 🔧 Fonctionnalités

- **Liste de tweets** : Affichage des tweets avec texte, date et auteur.
- **Barre de recherche** : Filtrage des tweets en live par mot-clé.
- **Tri par date** : Tri des tweets par date croissante ou décroissante.
- **Tagging thématique** : Ajout de tags (économie, santé, etc.) pour simuler une classification des tweets.

## 📦 Installation

1. Clonez ce repository :

   ```bash
   git clone https://github.com/Peter-Francois/TweetScope.git
   cd TweetScope
   ```
2. Installez les dépendances pour le frontend (SvelteKit) :

   ```bash
   npm install
   ```
3. Démarrez l'application :

   ```bash
   npm run dev
   ```

4. Pour le backend (Deno), suivez les instructions de Deno pour installer et exécuter les scripts nécessaires.

## 📝 Contribuer
Les contributions sont les bienvenues ! Si vous souhaitez contribuer, veuillez forker le projet, créer une branche pour votre fonctionnalité, puis soumettre une pull request.
