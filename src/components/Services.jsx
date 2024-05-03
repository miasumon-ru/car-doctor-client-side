import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {


    const [services, setServices] = useState([])


    useEffect(()=>{

        fetch('services.json')
        .then(res => res.json())
        .then( data => setServices(data))

    }, [])


    return (
        <div>

            <div className="text-center max-w-2xl mx-auto ">
                <h2 className="text-2xl text-[#FF3811]">Service</h2>

                <h1 className="text-5xl font-bold"> Our Service Area</h1>

                <p className=" mt-4 font-medium">The majority have suffered alteration in some form, by injected humour, or randomised words which don nott look even slightly believable. </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard> )
                }
            </div>


            
        </div>
    );
};

export default Services;