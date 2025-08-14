import './index.css'


const App = () => {
    return <div>
        
        <div className=" flex items-center justify-center h-screen">
            <div className="h-[600px] w-[1200px] flex">
                <div className="w-[600px]">
                    <h1 className="mt-0 ml-0 font-[800] text-[108px] leading-none">YOUR FEET DESERVE THE BEST</h1>
                    <div className="w-[380px]">
                        <h6 className="mt-[50px] text-[#5A5959]">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</h6>
                    </div>
                    <div className=" w-[250px] flex justify-between h-[30px] mt-[50px]">
                        <button className="bg-[#D01C28] w-[110px] font-semibold text-white">Shop Now</button>
                        <button className=" w-[110px] border-black border-[1px] font-semibold text-[#5A5959]">Category</button>
                    </div>
                    <div className="mt-[30px]">
                        <h2 className="font-[400] text-[#5A5959]">Also Available On</h2>
                        <div className="mt-[10px]">
                            <img src="/images/shops.png" alt="picture" />
                        </div>
                    </div>
                </div>
                <div className="content-center mt-[100px]">
                    <img src="/images/shoe_image.png" alt="picture" />
                </div>
            </div>
                
        </div>

    </div>

 }


 export default App; 