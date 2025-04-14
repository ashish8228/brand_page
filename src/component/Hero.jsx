export default function Herosection(){
    return(
        <>
            <main className="mt-22 ml-38 flex ">
                <div className="max-w-[50%]">
                    <h1 className=" font-[800] text-8xl">YOUR FEET DESERVE THE BEST</h1>
                    <p className="mt-10 text-[#5A5959]">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="mt-5 flex gap-10">
                        <button className="bg-red-600 text-white py-2 px-4 cursor-pointer">Shop Now</button>
                        <button className="text-gray-500 border-2 py-2 px-4 cursor-pointer">Category</button>
                    </div>
                    <p className="text-gray-400 mt-5">Also Available On</p>
                    <div className="flex mt-5 gap-10 hover:pointer-fine">
                        <img src="/images/flipkart.png" alt="flipkart logo" />
                        <img src="/images/amazon.png" alt="amazon logo" />
                    </div>
                </div>

                <div className="max-w-[50%]">
                    <img src="/images/shoe_image.png" alt="shoe" />
                </div>
            </main>
        </>
    )
}