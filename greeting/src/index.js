import react from "react";
import ReactDOM from "react-dom";

let curDate = new Date();
curDate = curDate.getTime();


ReactDOM.render(
    <h1>Hello Sir, Good Morning!. Its currently {curDate}</h1>,
    document.getElementById('root')
);