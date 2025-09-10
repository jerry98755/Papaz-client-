import Navbar from './components/Navbar'
import BannerCarousel from './components/BannerCarousel'
import RestaurantList from './components/RestaurantList'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BannerCarousel />
        <RestaurantList />
      </main>
      <Footer />
    </div>
  )
}