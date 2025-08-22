export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>
        © {year} • Built with React + Vite • <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </footer>
  )
}


