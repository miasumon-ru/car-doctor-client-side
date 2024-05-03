
import img1 from '../assets/images/banner/1.jpg'
import img2 from '../assets/images/banner/2.jpg'
import img3 from '../assets/images/banner/3.jpg'
import img4 from '../assets/images/banner/4.jpg'
import img5 from '../assets/images/banner/5.jpg'
// import img6 from '../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">

            <div id="slide1" className="carousel-item relative w-full lg:h-[600px] p-2">
                <img src={img1} className="w-full" />

                <div className="absolute p-6 lg:p-24 top-0 flex items-center h-full left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]  ">

                <div className='max-w-xl space-y-4'>
                        <h2 className=" text-4xl lg:text-6xl text-white font-bold"> Affordable <br /> Price For Car <br /> Servicing </h2>
                        <p className='text-[#FFFFFF]'> There are many variations of passages of  available, but the majority have suffered alteration in some form </p>

                        <div className=''>
                            <button className='btn bg-orange-500 text-white  mr-6'> Discover More </button>
                            <button className='btn btn-outline text-white '> Latest Project </button>
                        </div>
                    </div>

                </div>

                <div className="absolute flex transform -translate-y-1/2 bottom-2 lg:bottom-6 right-2 lg:right-5 ">

                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle mr-6">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full lg:h-[600px] p-2">
                <img src={img2} className="w-full" />

                <div className="absolute p-6 lg:p-24 top-0 flex items-center h-full left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]  ">

                <div className='max-w-xl space-y-4'>
                        <h2 className=" text-4xl lg:text-6xl text-white font-bold"> Affordable <br /> Price For Car <br /> Servicing </h2>
                        <p className='text-[#FFFFFF]'> There are many variations of passages of  available, but the majority have suffered alteration in some form </p>

                        <div className=''>
                            <button className='btn bg-orange-500 text-white  mr-6'> Discover More </button>
                            <button className='btn btn-outline text-white '> Latest Project </button>
                        </div>
                    </div>

                </div>

                <div className="absolute flex transform -translate-y-1/2 bottom-2 lg:bottom-6 right-2 lg:right-5 ">

                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle mr-6">❯</a>
                </div>

            </div>
            <div id="slide3" className="carousel-item relative w-full lg:h-[600px] p-2">
                <img src={img3} className="w-full" />

                <div className="absolute p-6 lg:p-24 top-0 flex items-center h-full left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]  ">

                <div className='max-w-xl space-y-4'>
                        <h2 className=" text-4xl lg:text-6xl text-white font-bold"> Affordable <br /> Price For Car <br /> Servicing </h2>
                        <p className='text-[#FFFFFF]'> There are many variations of passages of  available, but the majority have suffered alteration in some form </p>

                        <div className=''>
                            <button className='btn bg-orange-500 text-white  mr-6'> Discover More </button>
                            <button className='btn btn-outline text-white '> Latest Project </button>
                        </div>
                    </div>

                </div>

                <div className="absolute flex transform -translate-y-1/2 bottom-2 lg:bottom-6 right-2 lg:right-5 ">

                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle mr-6">❯</a>
                </div>

            </div>
            <div id="slide4" className="carousel-item relative w-full lg:h-[600px] p-2">
                <img src={img4} className="w-full" />

                <div className="absolute p-6 lg:p-24 top-0 flex items-center h-full left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]  ">

                <div className='max-w-xl space-y-4'>
                        <h2 className=" text-4xl lg:text-6xl text-white font-bold"> Affordable <br /> Price For Car <br /> Servicing </h2>
                        <p className='text-[#FFFFFF]'> There are many variations of passages of  available, but the majority have suffered alteration in some form </p>

                        <div className=''>
                            <button className='btn bg-orange-500 text-white  mr-6'> Discover More </button>
                            <button className='btn btn-outline text-white '> Latest Project </button>
                        </div>
                    </div>

                </div>

                <div className="absolute flex transform -translate-y-1/2 bottom-2 lg:bottom-6 right-2 lg:right-5 ">

                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle mr-6">❯</a>
                </div>

            </div>
            <div id="slide5" className="carousel-item relative w-full lg:h-[600px] p-2">
                <img src={img5} className="w-full" />

                <div className="absolute p-6 lg:p-24 top-0 flex items-center h-full left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]  ">

                <div className='max-w-xl space-y-4'>
                        <h2 className=" text-4xl lg:text-6xl text-white font-bold"> Affordable <br /> Price For Car <br /> Servicing </h2>
                        <p className='text-[#FFFFFF]'> There are many variations of passages of  available, but the majority have suffered alteration in some form </p>

                        <div className=''>
                            <button className='btn bg-orange-500 text-white  mr-6'> Discover More </button>
                            <button className='btn btn-outline text-white '> Latest Project </button>
                        </div>
                    </div>

                </div>

                <div className="absolute flex transform -translate-y-1/2 bottom-2 lg:bottom-6 right-2 lg:right-5 ">

                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle mr-6">❯</a>
                </div>

            </div>


        </div>
    );
};

export default Banner;