import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  try {
    const res = await fetch('http://localhost:8000/tweets');
    if (!res.ok) {
      // Lancez une erreur ici pour que SvelteKit puisse la gérer
      throw new Error(`Failed to fetch tweets: ${res.statusText}`);
    }
    const tweets = await res.json();
    // Le console.log ici s'exécutera côté serveur ou lors du fetch côté client
    // console.log('Tweets loaded:', tweets);
    return { tweets: tweets || [] }; // Assurez-vous de retourner un tableau
  } catch (error) {
    console.error('Error loading tweets:', error);
    // Vous pouvez aussi retourner un objet d'erreur spécifique
    return { tweets: [], error: 'Could not load tweets.' };
  }
};