import person from '../assets/images/about_us/person.jpg'
import parts from '../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero min-h-screen">

            <div className="hero-content flex-col-reverse md:flex-col-reverse lg:flex-row gap-10 md:gap-10 lg:gap-4">

                <div className='lg:w-1/2 relative '>
                    <img className='w-3/4 ' src={person} />
                    <img className='absolute w-1/2 -bottom-10 md:-bottom-20 md:right-20 right-10  border-8 border-white rounded-lg' src={parts} />

                </div>

                <div className='lg:w-1/2'>
                    <h2 className="text-2xl text-[#FF3811] my-10">About Us</h2>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-orange-500 text-white">Get More Info</button>
                </div>

            </div>
        </div>
    );
};

export default About;