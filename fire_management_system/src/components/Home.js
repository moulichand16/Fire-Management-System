import Models from "./Models.js";
import Carosal from "./Carosal.js";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home(prop)
{
    console.log(prop.m)
    return (
        <div className="row container-fluid m-0 p-0 border">
            <div className="col-md-4 m-0">
                <Models par={prop.m}/>
            </div>
            <div className="col-md-8 m-0 p-0">
                <Carosal/>
            </div>

        </div>
    )

}
export default Home;