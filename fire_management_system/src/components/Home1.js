import Models from "./Models.js";
import Carosal from "./Carosal.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Upload from './Upload.js';
import Des from './Des.js';
import Screenshot from "./Screenshot.js";
import {useRef} from "react";
function Home1()
{
    const x=useRef();
    
    return (
        <div className="row container-fluid m-0 border">
            <div className="col-md-4 m-0">
                <Upload nag={x}/>
            </div>
            <div className="col-md-8 m-0">
                <Screenshot  pra={x}/>
            </div>
            

        </div>
    )

}
export default Home1;