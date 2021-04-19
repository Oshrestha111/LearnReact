import react from "react";
import './index.css';

function Greet() {

    let curDate = new Date();
    curDate = curDate.getHours();
    
    let greet = '';
    const cssStyle= {
        color:"",
        Width:""
    };
    
    if (curDate>=1 && curDate<12) {
        greet="Good Morning.";
        cssStyle.color="green";
    } else if(curDate>=12 && curDate<=19){
        greet="Good Afternoon.";
        cssStyle.color="Orange";
    } else{
        greet="Good Evening.";
        cssStyle.color="Brown";
    }
    

    return(
        <>
        
        <div style={{Width:"50px"}}>
    <h1>
        Hello Sir! <span style={cssStyle}>{greet} </span>
    </h1>
    </div>
    </>
    );
}

export default Greet;