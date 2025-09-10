export default function Navbar() {
  return (
    <header className="bg-orange-500 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="font-bold text-xl">Papaz Spot</h1>
      <nav>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Menu</li>
          <li>Orders</li>
        </ul>
      </nav>
    </header>
  )
}
