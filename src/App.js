import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Registre from './Registre/Registre'
import formulaire from './Formulaire/Formulaire'
function App() {
  return (
   
     <Router>
            <div>
                <Route exact path="/" component={formulaire}/>
                <Route path="/registre" component={Registre}/>
            </div>
        </Router>
 
  );
}

export default App;
