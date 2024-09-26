



const Order = () => {
    return (
        <div>
              <div className=" mt-10 mb-10 ml-5 mr-5"> 

                <div>
                
                
                    <div className=" bg-no-repeat bg-cover  p-24 rounded-xl"
                     style={{
                      backgroundImage: "url(  https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1727348751~exp=1727352351~hmac=2efc71bd6dcb55e003e8be2d1ce32bac9d9133b18a3d6c187d34466d12c56ccf&w=740  )",
                     }}   
                     >
                    <p className=" bg-gradient-to-r from-black p-5 text-5xl font-thin text-white">Order Form</p>
                    </div>
                  {/* ------------------------------------------------------------------- */}
                
                   <section class="bg-black dark:bg-gray-900 mt-10 border-[1px] border-[#00CCDD] rounded-xl ">
                <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-[#00CCDD] dark:text-white  ">Order Form</h2>
                <form action="#">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="sm:col-span-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Product Name</label>
                        <input className=" bg-gray-50 border border-gray-300 text-[#00CCDD] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "  placeholder="Type product name" required type="text" name="Products Name" />
                        {/* <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-[#00CCDD] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""> */}
                    </div>
                    <div class="w-full">
                        <label for="brand" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Brand</label>
                        <input  name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-[#00CCDD] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required="" type="text" />
                        {/* <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""> */}
                    </div>
                    <div class="w-full">
                        <label for="price" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Price</label>
                        <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-[#00CCDD] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""  />
                        {/* <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""> */}
                    </div>
                    <div>
                        <label for="category" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Category</label>
                        <select id="category" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Select category</option>
                            <option value="TV">Premium</option>
                            <option value="PC">General</option>
                          
                        </select>
                    </div>
                    <div>
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Series Name</label>
                        <input name="series" id="item-weight" class="bg-gray-50 border border-gray-300 text-[#00CCDD] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="series" required="" type="text" />
                        {/* <input type="number" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required=""> */}
                    </div> 
                    <div class="sm:col-span-2">
                        <label for="description" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Description</label>
                        <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-[#00CCDD] bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                    </div>
                </div>
                <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-black btn rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 border-[1px] border-[#00CCDD] ">
                Order Form
                </button>
                </form>
                </div>
                </section>
                 
                
                
                
                </div>
                  
                </div>
            
        </div>
    );
}; 

export default Order;