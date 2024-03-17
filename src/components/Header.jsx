import { TfiSearch } from "react-icons/tfi";
import { TfiShoppingCart } from "react-icons/tfi";

const Header = () => {
    return (
        <header className="w-full px-2">
            <div className="w-full flex lg:justify-end justify-center 
            items-center px-2 mt-1">
                <p className="px-4 py-2 font-extralight text-sm text-[#333333]">Home</p>
                <p className="px-4 py-2 font-extralight text-sm text-[#333333]">Orders & Returns</p>
                <p className="px-4 py-2 font-extralight text-sm text-[#333333]">Hi, </p>
            </div>

            <nav className="w-full flex justify-evenly items-center flex-col 
                sm:flex-row mt-2 sm:mt-0 ">
                <div className="w-full">
                    <h1 className="text-[2rem] font-bold text-center">ECOMMERCE</h1>
                </div>
                <div className="w-full flex justify-evenly items-center gap-2 mt-4 sm:mt-0">
                    <p className="font-montserrat text-l font-semibold">Categories</p>
                    <p className="font-montserrat text-l font-semibold">Sale</p>
                    <p className="font-montserrat text-l font-semibold">Clearance</p>
                    <p className="font-montserrat text-l font-semibold">New stock</p>
                    <p className="font-montserrat text-l font-semibold">Trending</p>
                </div>
                <div className="w-full flex justify-end items-center mt-4 sm:mt-0"> 
                    <p className="px-4"><TfiSearch /></p>
                    <p className="px-4"><TfiShoppingCart /></p>
                </div>
            
            </nav>
        </header>
    );
}

export default Header;
