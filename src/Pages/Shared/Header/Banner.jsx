
const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[560px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/MSXYfV8/unsplash1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-left mt-32 mr-96 text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-8 text-5xl font-bold text-black">Let&apos;s Celebrate your day to <span className="text-pinkbright1"> make more memories!</span></h1>
            <button className=" mt-5 btn bg-pinkdark1 border-none text-white hover:text-black hover:bg-pinkbright1">Booked Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
