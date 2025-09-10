import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function BannerCarousel() {
  const banners = [
    "/banners/burger.jpg",
    "/banners/pizza.jpg",
    "/banners/chicken.jpg"
  ]

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="my-4">
      <Slider {...settings}>
        {banners.map((img, idx) => (
          <img key={idx} src={img} alt="banner" className="w-full h-64 object-cover rounded-lg" />
        ))}
      </Slider>
    </div>
  )
}
