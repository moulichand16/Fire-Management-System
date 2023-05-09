import { useState } from 'react';
import Home from './Home.js';
import Home1 from './Home1.js';
import TestPage from './TestPage.js';
import Home2 from './Home2.js'
import Home3  from './Home3.js'
function Homes(prop)
{
  const x=prop.nag;
  var content="";
  console.log(x);
  if (x===0){
    content=<Home m={prop.pra}/>
  }
  else if(x===1){
    content=<Home1/>
  }
  else if(x===2){
    content=<TestPage/>

  }
  else if(x==3)
  {
    content=<Home2/>
  }
  else if(x==4)
  {
    content=<Home3 />
  }
  else if(x==5)
  {
    content=<TestPage/>
  }
 return(
    <>
        {content}
    </>
 )


}
export default Homes;

