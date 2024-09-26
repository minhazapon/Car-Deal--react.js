


const Add = () => {

    
    return (
        <div className=" mt-10 mb-10 ml-5 mr-5"> 

          <div>


              <div className=" bg-no-repeat bg-cover  p-24 rounded-xl"
               style={{
                backgroundImage: "url(  https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1727348751~exp=1727352351~hmac=2efc71bd6dcb55e003e8be2d1ce32bac9d9133b18a3d6c187d34466d12c56ccf&w=740  )",
               }}   
               >
              <p className=" bg-gradient-to-r from-black p-5 text-5xl font-thin text-white">Add Products</p>
              </div>


            {/* ------------------------------------------------------------------- */}

           


            {/* <div className=" flex justify-center mt-10">


            <div className=" border-[1px] border-[#00CCDD] w-[800px] rounded-xl p-2">

            <div className=" mt-10 flex justify-center ">
                <div className=" grid  md:grid-cols-2 gap-5 ">
                  <input className=" w-[380px] p-2 rounded-lg  border-[1px] border-[#00CCDD] " placeholder="First Name" type="text" name="name" />
                  <input className=" w-[380px] p-2 rounded-lg  border-[1px] border-[#00CCDD] " placeholder="Last Name" type="text" name="name" />
                  <input className=" w-[380px] p-2 rounded-lg  border-[1px] border-[#00CCDD] " placeholder="Number"  type="number" name="number" id="" />
                  <input className=" w-[380px] p-2 rounded-lg  border-[1px] border-[#00CCDD] " placeholder="Email" type="email" name="email" id="" />
                </div>
            </div> 
            
        
            <div className=" flex justify-center mt-5">
            <textarea className=" w-full  p-5 rounded-lg  border-[1px] border-[#00CCDD] " placeholder="Message" name="Message" id=""></textarea>
            </div>
            <div className=" mb-10 flex justify-center">
                <input className=" btn  w-full mt-5 bg-black border-[1px] border-[#00CCDD] text-white " type="submit" value="Submit" />
            </div>
            </div>    
            </div>         */}
             

             <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
      <form action="#">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                  <input className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "  placeholder="Type product name" required type="text" name="Products Name" />
                  {/* <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""> */}
              </div>
              <div class="w-full">
                  <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                  <input type="text" />
                  {/* <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""> */}
              </div>
              <div class="w-full">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  {/* <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""> */}
              </div>
              <div>
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select category</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                  </select>
              </div>
              <div>
                  <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Weight (kg)</label>
                  {/* <input type="number" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required=""> */}
              </div> 
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div>
          </div>
          <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Add product
          </button>
      </form>
  </div>
</section>
           



          </div>
            
        </div>
    );
};

export default Add;