import Models from "./Models.js";
import Carosal from "./Carosal.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import TestImageShow from './TestImageShow.js'
import Quest from './Quest.js'
import {useRef} from "react";
function TestPage()
{
    
    return (
        <div className="container-fluid">
        <div className="row m-0 border">
            <div className="col-md-4 m-0">
                happy
                <Quest />
               
            </div>
            <div className="col-md-8 m-0">
            <TestImageShow />
               
                
            </div>

        </div>
        </div>
    )

}
export default TestPage;