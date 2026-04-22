import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Our Website</h1>

      <div className="card">
        <p>
          This is a multi-page Next.js application built using TypeScript.
          It demonstrates routing, reusable components, and styling.
        </p>

        <Link href="/about" className="btn">
          Learn More
        </Link>
      </div>

      <div className="card">
        <h2>Features</h2>
        <ul>
          <li>Fast Navigation using Next.js Link</li>
          <li>Reusable Header & Footer</li>
          <li>Modern UI with CSS</li>
        </ul>
      </div>
    </div>
  );
}