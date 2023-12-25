import Banner from "./Banner";
import Footer from "./Footer";
import Beneficiaries from "./Beneficiaries"


const Home = () => {
    return (
        <div>
            <div className="my-28">
                <Banner />
            </div>
            <div className="my-28">
                <Beneficiaries />
            </div>
            <Footer />
        </div>
    );
};

export default Home;