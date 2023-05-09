import Models from "./Models.js";
import Carosal from "./Carosal.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import sat from './images/one.jpg'

function TestImageShow(prop)
{
    
    return (
        <div className="row container-fluid m-0 border">
            <div className="col-md-12 m-0">
                <h5 className="text-center"style={{marginTop:'5px'}}>Uploaded image</h5>
            <img style={{marginTop:'10px'}}
                className="d-block w-100 h-30"
               

                src={sat}

                alt="First slide"
            />
            
            </div>
           
           
        </div>
    )

}
export default TestImageShow;