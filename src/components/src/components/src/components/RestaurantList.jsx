const restaurants = [
  { name: "Burger Hub", food: "Cheesy Burgers", img: "/banners/burger.jpg" },
  { name: "Pizza Palace", food: "Hot Pizzas", img: "/banners/pizza.jpg" },
  { name: "Chicken King", food: "Fried Chicken", img: "/banners/chicken.jpg" }
]

export default function RestaurantList() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Popular Restaurants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {restaurants.map((r, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden">
            <img src={r.img} alt={r.name} className="h-40 w-full object-cover"/>
            <div className="p-2">
              <h3 className="font-semibold">{r.name}</h3>
              <p className="text-gray-600">{r.food}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
