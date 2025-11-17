import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "12px 16px", background: "#f5f5f5" }}>
      <nav>
        <ul style={{ display: "flex", gap: "16px", listStyle: "none" }}>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/posts">Posts</Link></li>
        </ul>
      </nav>
    </header>
  );
}
