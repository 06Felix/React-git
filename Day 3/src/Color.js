import React, { useState } from "react";

const Color = ()=>{
    const [bl,setBl] = useState(0);
    const incData = ()=>{
        setBl(bl + 1);
    }
    const decData = ()=>{
        setBl(bl - 1);
    }
    return(
        <div>
            <button onClick={incData}>Increase</button>
            <button>{bl}</button>
            <button onClick={decData}>Decrease</button>
        </div>
    );
};
export default Color;