

const Banner = () => {
    return (
        <div className="px-4 md:px-24 bg-teal-100 flex items-center">
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 py-40">
                {/* Lift side */}
                <div className="md:w-1/2 h-full space-y-8">
                    <h2 className="text-5xl font-bold leading-snug text-black">Buy And Sell Your Books <span className="text-blue-700">for the best prices</span></h2>
                    <p className="md:w-5/6">Turn the Page, Find Your Story. Whether you are seeking the latest bestseller or parting ways with a well-loved classic, our platform is your destination. Buy and sell books hassle-free, fostering a community that cherishes the magic of storytelling.</p>
                    <div className="">
                        <input className=" py-2 px-2 rounded-s-lg outline-none" type="search" name="search" id="search" placeholder="Search a book..." />
                        <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-e-lg">Search</button>
                    </div>
                </div>

                {/* Right Side */}
                <div>Right Side</div>
            </div>
        </div>
    );
};

export default Banner;