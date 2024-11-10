const Productive = () => {
  return (
    <section>
      <div className=" container grid grid-cols-1 md:grid-cols-2 gap-10  place-items-center mx-auto mt-[90px] ">
        <div className="">
          <img
            src="illustration-stay-productive.png"
            alt=""
          />
        </div>

        <div className="text-white  mb-4 ml-[30px] my-[30px] ">
          <h1 className="my-[30px] ">Stay productive, wherever you are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            molestiae, quia unde incidunt corporis facere iusto illo,
          </p>
          <p className="my-[30px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            excepturi incidunt quo deserunt quidem accusamus iure ab earum
            reprehenderit debitis!
          </p>
          <a
            href="/"
            className=" text-[#0fcbff]  hover:text-[#42b0d1] hover:border-[#42b0d1] transition-all duration-200  border-b-2 border-primary border-solid pb-[5px] flex items-center gap-[15px] w-fit"
          >
            See how Fylo works
            <img
              src="icon-arrow.svg"
              alt="arrow-img"
              className="w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite] "
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Productive;
