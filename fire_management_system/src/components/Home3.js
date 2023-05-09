import Models from "./Models.js";
import Carosal from "./Carosal.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Upload from './Upload.js'
import Des from './Des.js'

import SRes from './SRes.js'
import Fields from './Fields.js'
function Home3()
{
    return (
        <div className="row container-fluid m-0 border">
            <div className="col-md-4 m-0">
                <Fields />
            </div>
            <div className="col-md-8 m-0">
                <SRes/>
            </div>

        </div>
    )

}
export default Home3;