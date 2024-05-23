import { useState, useEffect } from "react";
import ItemsCard from "../Components/ItemsCard";
function Shimmer() {
  return (
    <div className="h-64 w-64 relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 rounded-full bg-blue-400 animate-ping"></div>
      </div>
    </div>
  );
}

function MainPage() {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCards(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const cameraImgSrc =
    "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const lensImgSrc =
    "https://images.unsplash.com/photo-1582994254571-52c62d96ebab?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      {!showCards && <Shimmer />}
      {showCards && (
        <div className="flex flex-col sm:flex-col lg:flex-row gap-10 lg:w-fit lg:h-fit">
          <ItemsCard
            items={"Camera"}
            imgSrc={cameraImgSrc}
            details={"From sony to Fujifilm to RED all the cameras"}
          />
          <ItemsCard
            items={"Lens"}
            imgSrc={lensImgSrc}
            details={"From Cinematic to Photographic all the Lenses"}
          />
        </div>
      )}
    </div>
  );
}

export default MainPage;
