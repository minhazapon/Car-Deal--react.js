import { Link } from "react-router-dom";
import Swal from "sweetalert2";




const Details = ({carUser}) => {

    
    const {_id, name, brand, category, price,  photourl} = carUser


    const handleDelete = delete_id =>{

       console.log(_id)


       Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/carData/${delete_id}`, {
             
                method: 'DELETE',
                
            })
            .then( res => res.json())
            .then(data => {
                console.log(data)

                if(data.deletedCount  > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });


                }


            })
          
        }
      });



    }
    

    return (


        <div>


        <div className=" ">
                
            
                
                <div className="overflow-x-auto text-white ">
        <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
              
              </label>
            </th>
          
            <th></th>
          </tr>
        </thead>
        <tbody>
          
        
        
            <tr>
            <th className=" flex items-center gap-2">
              <label>
              <button onClick={()=> handleDelete(carUser._id)}> <img className=" btn h-[35px] rounded-xl " src="https://cdn-icons-gif.flaticon.com/8948/8948328.gif" alt="" /></button>
              </label>
              <label>
                <Link to={`/update/${carUser._id}`} >
                <button > <img className=" btn h-[35px] rounded-xl " src="https://cdn-icons-gif.flaticon.com/17122/17122352.gif" alt="" /></button>
                </Link>
              
             
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12 ">
                    <img className=" "
                      src={photourl}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold"></div>

                  <div className="text-sm opacity-50">Name: {name} </div>
                  <div className="text-sm opacity-50">Brand: {brand} </div>
                </div>
              </div>
            </td>
            <td>
              Price: {price}
              <br />
           
            </td>
            <td> Category: {category}  </td>
            <th>
              <button className="btn btn-ghost btn-xs"></button>
            </th>
          </tr>  
        
    
        
        </tbody>
        {/* foot */}
        
        </table>
        </div>
        
        
        
        </div>
        
        
        
            
        </div>
    );
};

export default Details;