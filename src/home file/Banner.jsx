


const Banner = () => {


    return (
        <div className=" ">

            <div className=" bg-no-repeat bg-cover  p-52 "
             style={{
                backgroundImage: "url(https://img.freepik.com/premium-photo/ai-generated-ai-generative-vintage-retro-classic-car-road-mist-fog-forest-tree-nature-outdoor_95211-16470.jpg?w=996)",
              }}
            
            >
                <div className=" bg-gradient-to-r from-black p-10 rounded-md ">
                    <p className="  text-5xl font-thin text-yellow-400 text-center">Welcome To Auction</p>
                    <p className=" mt-5 text-white text-6xl font-thin text-center">Find Your Dream Car</p>
                </div>
            </div>


            {/* -----------banner2----------------- */}

           
            <div className=" flex justify-center bg-no-repeat bg-cover p-10"
            
            style={{
                backgroundImage: "url(   https://img.freepik.com/premium-photo/electric-futuristic-car-illuminated-dark-background-ecology-concept-generative-ai_888418-11026.jpg?w=826  )",
              }}
            
            >

              
              <div className=" grid  md:grid-cols-4 gap-10">


                <div  className=" bg-gradient-to-r from-black border-[1px] border-[#49e6f5] w-[200px] h-[100px] rounded-xl p-2">
                    <p className=" text-[#49e6f5] text-xl font-mono">Whicles In Stock</p>
                    <div className=" flex items-center gap-12">
                        <img className=" h-[50px]" src="https://cdn-icons-png.flaticon.com/128/4879/4879886.png" alt="" />
                        <p className=" mt-2 text-[#49e6f5] font-mono  text-4xl">5001</p>
                    </div>
                </div>


                <div  className=" bg-gradient-to-r from-black border-[1px] border-[#49e6f5] w-[200px] h-[100px] rounded-xl p-2">
                    <p className=" text-[#49e6f5] text-xl font-mono">Clear Service</p>
                    <div className=" flex items-center gap-12">
                        <img className=" h-[50px]" src="https://cdn-icons-png.flaticon.com/128/4879/4879886.png" alt="" />
                        <p className=" mt-2 text-[#49e6f5] font-mono  text-4xl">5001</p>
                    </div>
                </div>


                <div  className=" bg-gradient-to-r from-black border-[1px] border-[#49e6f5] w-[200px] h-[100px] rounded-xl p-2">
                    <p className=" text-[#49e6f5] text-xl font-mono">Happy Customers</p>
                    <div className=" flex items-center gap-12">
                        <img className=" h-[50px]" src="https://cdn-icons-png.flaticon.com/128/4879/4879886.png" alt="" />
                        <p className=" mt-2 text-[#49e6f5] font-mono  text-4xl">5001</p>
                    </div>
                </div>


                <div  className=" bg-gradient-to-r from-black border-[1px] border-[#49e6f5] w-[200px] h-[100px] rounded-xl p-2">
                    <p className=" text-[#49e6f5] text-xl font-mono">Service</p>
                    <div className=" flex items-center gap-12">
                        <img className=" h-[50px]" src="https://cdn-icons-png.flaticon.com/128/4879/4879886.png" alt="" />
                        <p className=" mt-2 text-[#49e6f5] font-mono  text-4xl">5001</p>
                    </div>
                </div>



              </div>


            </div>
            
        </div>
    );
};

export default Banner;