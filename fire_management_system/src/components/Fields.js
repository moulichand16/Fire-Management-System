import 'bootstrap/dist/css/bootstrap.min.css';
import { Label } from 'reactstrap';
const Fields=()=>{
    return(
        <>
            <div>
                <div>
                    <Label style={{marginTop:'5px'}}>
                        Temperature 
                    </Label>
                    <input type="name" style={{width:'100%'}}></input>
                </div>
                <div>
                    <Label style={{marginTop:'5px'}}>
                        Wind speed 
                    </Label>
                    <input type="name" style={{width:'100%'}}></input>
                </div>
                <div>
                    <Label style={{marginTop:'5px'}}>
                        Fine Fuel Moisture Code
                    </Label>
                    <input type="name" style={{width:'100%'}}></input>
                </div>
                <div>
                    <Label style={{marginTop:'5px'}}>
                        Duff Moisture Code
                    </Label>
                    <input type="name" style={{width:'100%'}}></input>
                </div>
                <div>
                    <Label style={{marginTop:'5px'}}>
                        Initial Spread Index
                    </Label>
                    <input type="name" style={{width:'100%'}}></input>
                </div>
                
            </div>


            <div className="container-fluid m-0 border" >
            <div >
                <button style={{margin:'30px',marginLeft:'75px',marginTop:'15px'}}>
                    Go Back
                </button>
                <button style={{margin:'30px',marginTop:'45px'}}>
                    Submit
                </button>
            </div>
          

            </div>
        </>
    )
}
export default Fields;


