function CameraCard(props) {
  function handleClick() {
    console.log("button Clicked");
  }
  return (
    <div className="border-2 shadow-l shadow-white bg-white rounded-2xl shadow h-300 w-300 flex flex-col justify-center items-center">
      <div className="overflow-hidden rounded-2xl h-100 w-full">
        <img
          className="w-full object-cover h-full"
          src={props.imgSrc}
          alt={props.name}
        />
      </div>
      <div className="p-3 text-black flex flex-col flex-wrap items-center">
        <h5 className="mb-1 text-xl font-bold tracking-tight">{props.name}</h5>
        <p className="mb-1 text-sm font-normal text-gray-800">
          {props.details}
        </p>
        <p className="mb-1 text-m font-bold  text-gray-800">₹{props.price}</p>
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none bg-blue-600 focus:ring-blue-800 mt-2"
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CameraCard;
