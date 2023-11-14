import { useLoaderData } from "react-router-dom";


const Home = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div className="container">
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;