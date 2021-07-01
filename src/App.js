import React,{ useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import Login from './views/pages/login/Login';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}


function App() {

  const [isloggedin,setIsloggedin] = useState(
    getSessionStorageOrDefault('terms', false)
  );

  useEffect(() => {
    sessionStorage.setItem('terms', JSON.stringify(isloggedin));
  }, [isloggedin]);

  if(!isloggedin){
    return (
      <>
    
      <Login setIsloggedin={setIsloggedin}/>
      </>
    )
  }
  else{

    return (

      <>
    
     
      <HashRouter>

          <React.Suspense fallback={loading}>
      
            <Switch>
              
                <Route path="/" name="Home" render={props => <TheLayout {...props}
               
                />} />
      
            </Switch>
          
          </React.Suspense>
      </HashRouter>
      
     
      </>
    );
  }

}

export default App;

