import Models from "./Models.js";
import Carosal from "./Carosal.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import sat from './images/one.jpg'

function SRes()
{
    return (
        <div className="row container-fluid m-0 border">
            <div className="col-md-12 m-0 border m-0">
                <h6 className='text-center' style={{fontSize:'32px'}}>
                    Result 
                    </h6>
            
            </div>
            <div className="col-md-12  border text-center" style={{marginTop:'10%'}}>
                <h5>
                    Your place is in safe state
                    </h5>
            </div>
            <div className="col-md-12 border text-center" style={{marginTop:'29%'}}>

                <h5 style={{fontSize:'22px'}}>

                    note: any change in these values result in abnormal situations.
                    keep checking with the updated values
                </h5>
            </div>
            
        </div>
    )

}
export default SRes;