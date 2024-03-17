import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const SaleBanner = () => {
    return (
        <section className="w-full flex justify-center items-center py-2 bg-[#F4F4F4] mt-4">
            <TfiAngleLeft />
            <p className="text-center font-semibold text-sm mx-2">
                Get 10% off on business sign up
            </p>
            <TfiAngleRight />
        </section>
    );
}

export default SaleBanner;
