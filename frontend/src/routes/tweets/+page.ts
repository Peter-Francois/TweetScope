export async function load({ fetch }: { fetch: typeof globalThis.fetch }) {
    try {
      const res = await fetch('http://localhost:8000/tweets');
      if (!res.ok) {
        throw new Error('Failed to fetch tweets');
      }
      const tweets = await res.json();
      return { tweets };
    } catch (error) {
      console.error('Error loading tweets:', error);
      return { tweets: [] }; // Retourne un tableau vide en cas d'erreur
    }
  }