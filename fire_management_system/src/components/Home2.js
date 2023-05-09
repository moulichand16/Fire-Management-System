import ForFetch from './ForFetch';
import Screenshots1 from './Screenshots1';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRef} from "react";
function Home2()
{
    const x=useRef();
    return (
        <div className="row container-fluid m-0 border">
            <div className="col-md-4 m-0">
                <ForFetch nag={x}/>
            </div>
            <div className="col-md-8 m-0">
                <Screenshots1 pra={x}/>
            </div>

        </div>
    )

}
export default Home2;