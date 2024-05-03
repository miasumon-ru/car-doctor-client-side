import About from "../../components/About";
import Banner from "../../components/Banner";
import Services from "../../components/Services";



const Home = () => {
    return (
        <div className="my-10">

            <Banner></Banner>

            <About></About>

            <Services></Services>
            
        </div>
    );
};

export default Home;