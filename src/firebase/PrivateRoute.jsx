import { useContext } from "react";
import { fireContext } from "./AuthContext";
import { Navigate } from "react-router-dom";



const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(fireContext)

 
    if(loading){

      return <div>    


          <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>


      </div>

    }

    if(user){

      return children

    }

    return <Navigate to='/login' ></Navigate>

};

export default PrivateRoute;