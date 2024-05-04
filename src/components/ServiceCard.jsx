import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const {img, title, price, _id} = service

  
    return (
        <div className="card  bg-base-100 shadow-md mt-10">

            <figure><img className="" src={img} /></figure>

            <div className="card-body">
                <h2 className="card-title text-bold"> {title } </h2>
                <p className="text-[#FF3811] font-semibold"> Price :  {price} </p>
                <div className="card-actions mt-4 ">
                    <Link to={`/book/${_id}`}><button className="btn btn-primary"> Book Now </button></Link>
                </div>
            </div>

        </div>
    );
};

ServiceCard.propTypes = {
    service : PropTypes.object.isRequired
}


export default ServiceCard;