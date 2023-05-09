import 'bootstrap/dist/css/bootstrap.min.css';
const Upload=(prop)=>{
    return(
        <>
            <div>
                <div className="text-center">
                    <button style={{marginTop:'100px',width:'70%',height:'80px'}}>
                        Fetch
                    </button>
                </div>
                <div className="text-center">
                <button style={{marginTop:'195px',width:'70%',height:'80px'}}>
                    <label for="files" style={{marginTop:'13px'}} className="btn">Select Image</label>
                    <input id="files" style={{visibility:'hidden'}} onChange={(e)=>{displayImage1(e,prop)}} type="file"/>
                    </button>
                </div>
                
            </div>
        </>
    )
}
function displayImage1(event,prop)
{
    var file=event.target.files[0];
    var reader= new FileReader();

    reader.onload=function(e){
        var imgElement=prop.nag.current;
        imgElement.src=e.target.result;

   };
   reader.readAsDataURL(file);
}
export default Upload;


