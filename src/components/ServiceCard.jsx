import PropTypes from 'prop-types';

const ServiceCard = ({service}) => {

    const {img, title, price} = service

  
    return (
        <div className="card  bg-base-100 shadow-md mt-10">

            <figure><img className="" src={img} /></figure>

            <div className="card-body">
                <h2 className="card-title text-bold"> {title } </h2>
                <p className="text-[#FF3811] font-semibold"> Price :  {price} </p>
                <div className="card-actions mt-4 ">
                    <button className="btn btn-primary"> Book Now </button>
                </div>
            </div>

        </div>
    );
};

ServiceCard.propTypes = {
    service : PropTypes.object.isRequired
}


export default ServiceCard;