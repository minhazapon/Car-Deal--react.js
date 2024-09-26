import Banner from "./home file/Banner";
import CarLogo from "./home file/CarLogo";
import Lates from "./home file/Lates";
import Number from "./home file/Number";
import PopularCar from "./home file/PopularCar";
import Service from "./home file/Service";
import Types from "./home file/Types";



const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Types></Types>
            <Service></Service>
            <Number></Number>
            <PopularCar></PopularCar>
            <CarLogo></CarLogo>
            <Lates></Lates>
            
        </div>
    );
};

export default Home;