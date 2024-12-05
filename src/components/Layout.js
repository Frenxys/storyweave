import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link> | <Link href="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 StoryWeave</p>
      </footer>
    </div>
  );
}
