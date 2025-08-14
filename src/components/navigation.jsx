import logo from '/images/brand_logo.png'

const Navigation = () => {
    return (
        <nav className="flex justify-between pt-[1rem] pb-[1rem]">
            <div className="ml-[100px]">
                <img src={logo} alt="Logo" />
            </div>
            <div className="flex flex-row">
                    <p className="px-[1rem] font-bold" href="#">Menu</p>
                    <p className="px-[1rem] font-bold" href="#">Loaction</p>
                    <p className="px-[1rem] font-bold" href="#">About</p>
                    <p className="px-[1rem] font-bold" href="#">Contact</p>
            </div>

            <button className="h-[30px] w-[75px] bg-red-500 text-white rounded-2xl mr-[100px]">
                <b>login</b>
            </button>
        </nav>
    )
}

export default Navigation;