import { useEffect, useState } from "react";
import LensData from "../Backend/Lensdetails.json";
import LensCard from "../Components/LensCard";
function Shimmer() {
  return (
    <div className="h-64 w-64 relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 rounded-full bg-blue-400 animate-ping"></div>
      </div>
    </div>
  );
}
function LensPage() {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCards(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {!showCards && <Shimmer />}
      {showCards && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-4 ">
          {LensData.map((camera, index) => (
            <LensCard
              key={index}
              name={camera.name}
              imgSrc={camera.imageURL}
              size={camera.size}
              details={camera.info}
              price={camera.price}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default LensPage;
