const Models=(prop)=>{
    console.log(prop.par);
    return(
        <>
            <div clasName="row p-0" style={{border:"2px solid transparent",position:"relative",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
                <div className="m-2">
                     <button style={{width:"100%",height:"175px"}} onClick={()=>{prop.par(1)}}>
                        Satilite mode
                     </button>
                </div>
                <div className="m-2" >
                     <button style={{width:"100%",height:"175px"}} onClick={()=>{prop.par(3)}}>
                        Forest Mode
                     </button>
                </div>
                <div className="m-2" >
                    <button style={{width:"100%",height:"175px"}} onClick={()=>{prop.par(4)}}>
                        Weather mode
                    </button>
                </div>
            </div>
        </>
    )
}
export default Models;