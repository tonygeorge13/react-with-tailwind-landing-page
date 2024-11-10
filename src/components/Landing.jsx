

const Landing = () => {
  return (
      <section className="mt-[120px]" >
          

          <div className=" container flex flex-col items-center justify-center mx-auto pt-40 ">
              <div className="max-w-full-width"
              ><img className="w-full h-fit " src="landing-img.png" alt="" /></div>
              <div className="text-white text-center ">
                  <h1 className=" text-[30px]  md:text-{60px} mb-[15px]">All your files in one secure location,
                      <br />
                      accessible anywhere.</h1>
                  
                  <p className="text-white font-normal text-md px-[15px] md:w-[600px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam
                  </p>
              </div>

              <button className="pt-3 pb-3 px-20  mt-10  rounded-[60px] text-center  bg-[#54b9d5e7] hover:bg-[#20a8cef8]" >Get started</button>
          </div>


          




          <div>
              <img src="bg-curvy-desktop.svg" className="w-full h-[200px] mt-10" alt="" />
          </div>




    </section>
  )
}

export default Landing