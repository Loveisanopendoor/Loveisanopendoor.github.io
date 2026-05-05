function Navbar() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'International', href: '#international' },
    { label: 'Awards', href: '#awards' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="navbar">
      <span className="navbar-name">Jaemin Kim</span>
      <div className="navbar-links">
        {links.map((link, i) => (
          <a key={i} href={link.href}>{link.label}</a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar