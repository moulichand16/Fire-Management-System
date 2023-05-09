import 'bootstrap/dist/css/bootstrap.min.css';
const Quest=()=>{
    return(
        <>
            <div  style={{
                marignTop:'15px',

            }}>
            <h5 className="text-center"style={{marginTop:'5px'}}>Selection</h5>
            <div>
                <div className="" style={{border:"2px solid grey"}}>
                <h4 className="text-center"style={{marginTop:'50px'}}>
                    Do you want to test this image?
                    
                </h4>
                <button style={{marignTop:'50px',marginLeft:'60px',width:'30%',height:'80px'}}>
                    Yes 
                </button>
                <button style={{marginTop:'50px', marginLeft:'30px',marginBottom:'20px',width:'30%',height:'80px'}}>
                    No
                </button>
                </div>
                <div style={{border:"2px solid grey",marginTop:'30px'}}>
                    <h6 style={{margin:'66px'}}>
                       The Result will be displayed here
                    </h6>

                </div>
            </div>
                
            </div>
        </>
    )
}
export default Quest;


