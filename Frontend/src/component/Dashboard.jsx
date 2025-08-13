import SmartSellSection from "./SmartSellSection";
import ExploreCategories from "./ExploreCategories";
import TestimonialsSection from "./TestimonialsSection";
import BidAiPromo from "./BidAiPromo";
import Imgbanner from "../assets/11.png";
import Carousel from "./Carousel";
import carData from "../utilis/CarData.json";
import bikeData from "../utilis/BikeData.json";
import CarList from "./CarList";
import BikeList from "./BikeList";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      < SmartSellSection />
      <ExploreCategories />
      <Carousel
        items={[
          { src: "https://ik.imagekit.io/naklrvhu8/image%20340.png?updatedAt=1755063318896", alt: "Item 1" },
          { src: "https://ik.imagekit.io/naklrvhu8/Screenshot%202025-08-13%20114026.jpg?updatedAt=1755065579276", alt: "Item 2" },
          { src: "https://ik.imagekit.io/naklrvhu8/Screenshot%202025-08-13%20114058.jpg?updatedAt=1755065579295", alt: "Item 3" },
          { src: "https://ik.imagekit.io/naklrvhu8/Screenshot%202025-08-13%20114122.jpg?updatedAt=1755065579328", alt: "Item 4" },
          { src: "https://ik.imagekit.io/naklrvhu8/Screenshot%202025-08-13%20114144.jpg?updatedAt=1755065579366", alt: "Item 5" },
          { src: "https://ik.imagekit.io/naklrvhu8/Screenshot%202025-08-13%20114204.jpg?updatedAt=1755065579265", alt: "Item 6" },
        ]} />
      <div className="flex-1 p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4">Newly listed cars</h2>
        {
          carData.map((car, index) => (
            <button key={index} className="text-black border-2 m-2 font-semibold border-t-blue-600 border-l-blue-600 border-b-black border-r-black px-4 py-2 rounded-lg mb-4 hover:bg-blue-600 hover:text-white transition">
              {car.name}
            </button>
          ))
        }

      </div>

     <CarList />

      <div className="flex-1 p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4">Newly listed budget Bikes</h2>
        {
          bikeData.map((bike, index) => (
            <button key={index} className="text-black border-2 m-2 font-semibold border-t-blue-600 border-l-blue-600 border-b-black border-r-black px-4 py-2 rounded-lg mb-4 hover:bg-blue-600 hover:text-white transition">
              {bike.brand}
            </button>
          ))
        }

      </div>

      <BikeList />

      <BidAiPromo />
      <div className="w-full m-0 p-0">
        <img
          src={Imgbanner}
          alt="Banner"
          className="w-full h-auto object-cover"
        />
      </div>
      <TestimonialsSection />
    </div>
  );
}

export default Dashboard;
