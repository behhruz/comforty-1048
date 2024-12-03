import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className=" w-[1536px] p-[20px]n px-[200px] bg-[rgb(39,35,67)] ">
                <div className="">

                    <div className="text-[rgb(143,141,157)] p-[10px]  flex justify-between ">
                        <p>Free shipping on all orders over $50</p>
                        <div className="flex gap-[20px]">

                            <details>
                                <summary>eng</summary>
                                <ul className="bg-base-100 rounded-t-none p-2 bg-[rgb(39,35,67)] ">
                                    <li><a>uzb</a></li>
                                    <li><a>rus</a></li>
                                </ul>
                            </details>
                            <p>Faqs</p>
                            <p>Need Help</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className=" w-[1536px] p-[20px]n px-[200px] bg-[#f0f2f3] ">
                    <div className="flex justify-between items-center p-[20px]">
                        <img src="Logo (1).png" alt="" />
                        <input
                            className='p-[10px] w-[400px] border-none rounded-[4px] '
                            placeholder='Search here...' type="text" />
                        <div className="flex items-center gap-[20px]">
                            <div className="w-[100px] bg-white p-[10px] border-none rounded-[4px]  flex gap-[5px]">
                                <img src="Info.png" alt="" />
                                <div className="border-none rounded-[50%] w-[20px] h-[20px] bg-[rgb(0,117,128)] flex justify-center items-center  ">
                                    <p className='text-white' >1</p>
                                </div>
                            </div>
                            <div className="w-[50px] bg-white p-[10px] border-none rounded-[4px] items-center  justify-center flex gap-[5px]">
                                <img src="Heart 1.svg" alt="" />
                            </div>
                            <div className="w-[50px] bg-white p-[10px] border-none rounded-[4px] items-center justify-center flex gap-[5px]">
                                <img src="Group (2).png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-[1536px] border px-[200px]">
                <div className="flex justify-between items-center p-[20px]">
                    <div className="flex gap-[20px] items-center">
                        <div className="border p-[10px]">
                            All Categories
                        </div>
                        <a href='' className=' hover:text-blue-400' >
                            Home
                        </a>
                        <a href='' className=' hover:text-blue-400' >Shop</a>
                        <a href='' className=' hover:text-blue-400' >Product</a>
                        <a href='' className=' hover:text-blue-400' >Pages</a>
                        <a href='' className=' hover:text-blue-400' >About</a>
                    </div>
                    <p>Contact: (808) 555-0111</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar