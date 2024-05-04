import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const CustomAuth = () => {

    const all = useContext(AuthContext)
    return all
};

export default CustomAuth;