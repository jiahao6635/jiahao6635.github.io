import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "博客" },
  { href: "/about", label: "关于我" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand">
          00后程序员日拱一卒
        </Link>
        <nav aria-label="主导航" className="nav-menu">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
