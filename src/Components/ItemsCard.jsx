function ItemsCard(props) {
  return (
    <div className=" max-w-sm  bg-white border-2 shadow-xl shadow-white border-white rounded">
      <a href={"/" + props.items}>
        <img className="" src={props.imgSrc} alt={props.items} />
      </a>
      <div className="p-5 bg-black">
        <a href={"/" + props.items}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {props.items}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-400">{props.details}</p>
        <a
          href={"/" + props.items}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none bg-blue-600 focus:ring-blue-800"
        >
          See Items
        </a>
      </div>
    </div>
  );
}

export default ItemsCard;
