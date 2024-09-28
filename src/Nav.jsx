import { Link, NavLink } from "react-router-dom";




const Nav = () => {


    const navz = <>
       
       <div className=" flex-col md:flex-row lg:flex-row flex items-center gap-3 ">
         
       <li className=" rounded-md border-[1px] border-[#00CCDD] text-white font-mono"><NavLink to='/' >Home</NavLink></li>
       <li className=" rounded-md border-[1px] border-[#00CCDD] text-white font-mono"><NavLink to='/order' >Order</NavLink></li>
       <li className=" rounded-md border-[1px] border-[#00CCDD] text-white font-mono"><NavLink to='/add' >Add</NavLink></li>
       <li className=" rounded-md border-[1px] border-[#00CCDD] text-white font-mono"><NavLink to='/details' >Car Details</NavLink></li>
       <li className=" rounded-md border-[1px] border-[#00CCDD] text-white font-mono"><NavLink to='/manage' >Manage All Orders</NavLink></li>
       <li className=" rounded-md border-[1px] border-[#00CCDD] text-white font-mono"><NavLink to='/contact' >Contact</NavLink></li>
 
       </div>
      
    
    </>


    return (
        <div>

<div className="navbar bg-black p-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" btn btn-ghost lg:hidden">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 text-white w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navz}
      </ul>
    </div>
    <div className=" flex items-center gap-2">
    <img className=" h-[80px]  " src="https://cdn-icons-png.flaticon.com/128/13312/13312257.png" alt="" />
    <a className="  text-4xl  text-[#00CCDD] font-thin "> Car Deal</a>
    </div>
       
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navz}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login' >
    <a className="btn bg-black text-[#00CCDD]  border-[1px] border-[#00CCDD]">login</a>
    </Link>
  
  </div>
</div>
            
        </div>
    );
};

export default Nav;