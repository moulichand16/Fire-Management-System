import 'bootstrap/dist/css/bootstrap.min.css';
import sat from './images/one.jpg'

function Screenshots1(prop)
{
    
    return (
        <div className="row container-fluid m-0 border">
            <div className="col-md-6 m-0">
                <h5 style={{marginTop:'90px'}}>Example for Camera image</h5>
            <img style={{marginTop:'20px',height:'180px',width:'50px'}}
                className="d-block w-100"
                src={sat}
                alt="First slide"
            />
            <p style={{marginTop:'10px'}}>
                image will be Captured from the Camera to test 
                wheather any region is under danger
                </p>
            </div>
            <div className="col-md-6 m-0">
            <h5 style={{marginTop:'90px'}}>Example for Uploding image</h5>
                <img style={{marginTop:'20px',height:'180px',width:'50px'}}
                   className="d-block w-100"
                   ref={prop.pra}
                   src={sat}
                   alt="First slide"
                />
                <p style={{marginTop:'10px'}}>
                image will be fetched from the satilite to test 
                wheather any region is under danger
                </p>
            </div>
            <div  className="text-center">
                    <button style={{width:'190px',height:'75px'}} >
                    <a href="TestPage"> Next</a>
                    </button>
                    </div>
        </div>
    )

}
export default Screenshots1;