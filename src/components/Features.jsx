const Features = () => {
  return (
    <section className="mt-10">
      <div className="container mx-auto   ">
        <div className=" grid grid-cols-1  md:grid-cols-2 ">
          <div className="box  text-white flex flex-col items-center justify-center text-center my-8  ">
            <img
              className="w-[80px] h-[80px] object-contain"
              src="icon-access-anywhere.svg"
            />
            <h1 className="text-xl font-semibold my-[15px]">
              Acces your files,anywhere
            </h1>
            <p className="font-normal text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing
            </p>
          </div>
          <div className="box  text-white flex flex-col items-center justify-center text-center my-8   ">
            <img
              className="w-[80px] h-[80px] object-contain"
              src="icon-security.svg"
            />
            <h1 className="text-xl font-semibold my-[15px]">
            Security you can trust
            </h1>
            <p className="font-normal text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing
            </p>
          </div>

          <div className="box   text-white flex flex-col items-center justify-center text-center my-8   ">
            <img
              className="w-[80px] h-[80px] object-contain"
              src="icon-collaboration.svg"
            />
            <h1 className="text-xl font-semibold my-[15px]">
            Real-time collaboration

            </h1>
            <p className="font-normal text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing
            </p>
          </div>
          <div className="box  text-white flex flex-col items-center justify-center text-center  my-8  ">
            <img
              className="w-[80px] h-[80px] object-contain"
              src="icon-any-file.svg"
            />
            <h1 className="text-xl font-semibold my-[15px]">
            Store any type of file
            </h1>
            <p className="font-normal text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
