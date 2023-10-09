
const Banner = () => {
  return (
    <div>
      <div
        className="hero lg:h-[560px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/MSXYfV8/unsplash1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center lg:text-left mt-16 lg:mt-32 lg:mr-96 lg:text-neutral-content">
          <div className="w-60 lg:max-w-md">
            <h1 className="mb-4 lg:mb-8 text-3xl lg:text-5xl font-bold text-black">Let&apos;s Celebrate your day to <span className="text-pinkbright1"> make more memories!</span></h1>
            <button className=" mt-1 md:mt-4 lg:mt-5 btn bg-pinkdark1 border-none text-white hover:text-black hover:bg-pinkbright1">Booked Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
