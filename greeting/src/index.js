import react from "react";
import ReactDOM from "react-dom";
import './index.css';



let curDate = new Date(2021,4,18,21);
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

ReactDOM.render(
    <>
    <div style={{Width:"50px"}}>
    <h1>
        Hello Sir! <span style={cssStyle}>{greet} </span>
    </h1>
    </div>
    </>
    ,document.getElementById('root')
);