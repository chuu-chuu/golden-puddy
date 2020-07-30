import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
  
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import List from './component/List';
import Detail from './component/Detail';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function App() { 
 
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={List} />
        {/* <Route  path="/:id" render={(props) => <Detail {...props}/>} /> */}
        <Route path="/:id" component={Detail} />
        
      </Switch>
    </Router>
  )

}
export default App;