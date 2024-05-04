import { Navigate, useLocation } from "react-router-dom";
import CustomAuth from "../custom/CustomAuth";
import PropTypes from 'prop-types';



const PrivateRoute = ({children}) => {

    const {user, loading} = CustomAuth()

    const location = useLocation()
    console.log(location)

    if(loading){
        
        return <progress className="progress w-full"></progress>
    }

    if(user){
        return children
    }
    
    return <Navigate to={"/login"} state={location.pathname}> </Navigate>
};

PrivateRoute.propTypes = {
    children : PropTypes.node
}

export default PrivateRoute;