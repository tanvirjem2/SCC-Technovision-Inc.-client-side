import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Pm59NbN/bg.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Enhancing task management skills empowers individuals to navigate their responsibilities with efficiency and grace, fostering a pathway to success and accomplishment.</p>
                    <Link to={"/login"}><button className="btn rounded-full">Let’s Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;