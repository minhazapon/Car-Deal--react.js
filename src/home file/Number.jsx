


const Number = () => {


    return (
        <div className=" mt-10 mb-10 ml-5 mr-5">

            <div className=" bg-no-repeat bg-cover p-36 " 
             style={{
                backgroundImage: "url( https://img.freepik.com/free-photo/photorealistic-view-off-road-car-with-nature-terrain-weather-conditions_23-2151430037.jpg?t=st=1727327217~exp=1727330817~hmac=d50e3df63ed43b432d036813e49ae448a8ee6afd3ad81c695c5d285afc947239&w=740  )",
              }}
            
            >
                
                 <div className=" bg-gradient-to-r from-black  p-5   ">
                 <div>
                    <p className=" text-white  text-xl font-mono text-center">Contact With Us</p>
                    <p className=" text-white  mt-5 text-3xl font-mono text-center" >01950374409</p>
                 </div>

                 <div className=" flex-col md:flex-row lg:flex-row  flex justify-center items-center gap-2 mt-5">
                    <button className=" btn border-[1px] border-yellow-400 w-[100px] bg-black text-white ">Order</button>
                    <button className=" btn border-[1px] border-yellow-400 w-[100px] bg-black text-white ">Add</button>
                 </div>
                 </div>




            </div>
            
        </div>
    );
};

export default Number;