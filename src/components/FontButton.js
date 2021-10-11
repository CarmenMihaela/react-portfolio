import Homepage from "./Homepage";
import { useState } from "react";
import About from "../pages/About";

const FontButton = () => {
    const [fontSize, setFontSize] = useState(16);

    return (
      <>
        <div className="container">
          <div className="exampleParagraph">
            <div className="fontButtons">
              <button
                 className="fontButton" 
                 onClick={() => setFontSize(fontSize + 2)} 
                
               >  
                bigger +
              </button>
              <button
                className="fontButton" 
                onClick={() => setFontSize(fontSize - 2)}
              > 
                smaller -
              </button>
             
            </div>
         
            <About
                          style={{
                fontSize: `${fontSize}px`,
                
              }}>

  
              </About>
        </div>
        </div>
              </>)
  
}

export default FontButton
