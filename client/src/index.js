import React from "react";
import ReactDOM from "react-dom";
import "materialize-css/dist/css/materialize.min.css";
import App from "./components/App";
import './assets/app.css';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

  // <div className="col s12 m8 offset-m2 offset-l3">
  //   <div className="card-panel grey lighten-5 z-depth-1">
  //     <div className="row valign-wrapper">
  //       {props.speaks === "bot" && (
  //       )
  //       <div className="col s10">
  //         <span className="black-text">{props.text}</span>
  //       </div>
  //     </div>
  //   </div>
  // </div>
