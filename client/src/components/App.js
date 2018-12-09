import React from "react";
import Chatbot from "./chatbot/Chatbot";
import Info from "./Info";

const App = () => (
  <div className="container" >
    <div id="info">
  		<div className="row">
  			<div className="col s12 m8">
  				<Info />
  			</div>
  		</div>
  	</div>
    <Chatbot />
  </div>
);

export default App;
