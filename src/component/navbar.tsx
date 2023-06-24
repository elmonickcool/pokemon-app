export default function Navbar() {
return(
    <nav className="flex items-center justify-between bg-red-500 py-4 px-8">
    <div className="flex items-center">
      <img src="/path/to/pokemon-logo.png" alt="Pokemon Logo" className="h-8" />
    </div>
    <ul className="flex space-x-4">
      <li className="nav-link">
        <a href="/" className="text-white">Home</a>
      </li>
      <li className="nav-link">
        <a href="/pokedex" className="text-white">Pokedex</a>
      </li>
      <li className="nav-link">
        <a href="/battle" className="text-white">Battle</a>
      </li>
      <li className="nav-link">
        <a href="/team" className="text-white">Team</a>
      </li>
    </ul>
  </nav>
)
}