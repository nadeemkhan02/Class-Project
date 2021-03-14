import React from 'react';
import {IFrame} from "./Test";


const Chapter = () => {
    const chapterData = require("./Chapter.json")
    return ( 
        <>
            <IFrame style={{width:"30%", height:"500px"}}>
               {
                   chapterData.map((data)=>
                   <>
                   <input type="checkbox" id="vehicle1" name="vehicle1" value={data["S"]["N"]} /><p style={{display:"inline"}}>{data["S"]["N"]}) {data["Chapter Name"]}</p><br />
                   </>
                   )
               }
            </IFrame>
        </>
     );
}
 
export default Chapter;