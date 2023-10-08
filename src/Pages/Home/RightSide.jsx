const RightSide = ({event}) => {

    const { title, id, category, details, image } = event;
  return (
    <div> 
      <div className>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt=""
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions">
            <button className="btn bg-pinkbright1">See Packages</button>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default RightSide;
