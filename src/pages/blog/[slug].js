import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // Simuliamo il contenuto dinamico dei post
  const posts = {
    welcome: 'Benvenuto in StoryWeave! Questa è una piattaforma di blogging collaborativa.',
    'collaborative-blog': 'Scopri come creare un blog condiviso e coinvolgente.',
    'writing-tips': 'Scrivere storie accattivanti richiede tecnica, pratica e ispirazione.',
    'monetize-blog': 'Ecco alcune strategie per guadagnare dai tuoi contenuti nel 2024.',
    'writing-tools': 'Esplora gli strumenti migliori per la scrittura collaborativa.',
    'blog-community': 'Costruire una comunità intorno al tuo blog è fondamentale per il successo.',
    'seo-tips': 'Ottimizza il tuo blog per i motori di ricerca e aumenta il traffico.',
    'writers-block': 'Supera il blocco dello scrittore con questi consigli pratici.',
    'blog-layout': 'Progetta un layout accattivante per il tuo blog.',
  };

  const content = posts[slug] || 'Contenuto non trovato.';

  return (
    <div className="container">
      <h1>Post: {slug.replace('-', ' ').toUpperCase()}</h1>
      <p>{content}</p>
    </div>
  );
}
