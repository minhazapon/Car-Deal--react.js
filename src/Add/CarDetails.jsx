import { useEffect, useState } from "react";
import Details from "./Details";



const CarDetails = () => {


    const [carUser, setCarUsers] = useState([])

    useEffect( () =>{

     fetch('http://localhost:5000/carData')
     .then(res => res.json())
     .then(data => setCarUsers(data))


    } , [])




    return (
        <div className=" mt-10 mb-10 ml-5 mr-5">

            <div className=" bg-no-repeat bg-cover  p-24 rounded-xl"
             style={{
              backgroundImage: "url(  https://citycarcleanz.com/wp-content/uploads/2022/11/Car-Detailing-Service-Dubai.jpg  )",
             }}   
             >
            <p className=" bg-gradient-to-r from-black p-5 text-5xl font-thin text-white"> Car Details </p>
            </div>

            {/* //------------------------------------- */}


            
            <div className=" mt-20">
                <div>

                     {
                        carUser.map( carUser=> <Details key={carUser._id} carUser={carUser} ></Details> )
                     }

                </div>
            </div>

         
            
        </div>
    );
}; 

export default CarDetails;