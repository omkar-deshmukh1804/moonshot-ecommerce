
const CategoryList = ({products}) => {
    return (
        <section className='w-full mt-4 flex justify-center items-center'>
            <div className='w-[90%] sm:w-2/5 h-[100%] 
                border-[#C1C1C1] border rounded-md flex flex-col justify-center items-center'
            >
                <h3 className='text-center 
                    sm:text-2xl text-xl font-bold mt-6 leading-normal'
                >
                    Please mark your interests!
                </h3>
                <p className="text-center text-sm mt-4 font-normal">We will keep you notified.</p>

                <div className='w-full px-10 flex flex-1 
                flex-col justify-center items-start mt-5 mb-4'
                >
                    <p className='text-lg 
                        font-semibold leading-normal'
                        >My saved interests!
                    </p>

                    {
                        products.map((product) => (
                            <div className="flex flex-1 justify-start items-center 
                                w-full mt-3 mb-2"
                                key={product.productId}
                            >
                                <input type="checkbox" id="1"
                                    className=" checked:accent-black 
                                    w-[20px] h-[20px]"/>
                                <label htmlFor="1"
                                    className="px-2 text-l"
                                >
                                    {product.productName}
                                </label>
                            </div>
                        ))
                    }
                    

                </div>
            
            </div>
            
            
        </section>
    );
}

export default CategoryList;
