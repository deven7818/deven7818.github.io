import React from 'react';

import Navbar from './component/navbar/navbar.component';
import './App.css';
import { Switch, Route ,BrowserRouter as Router} from 'react-router-dom';
import Customised from './customised.component/customised.component';
import MobileApp from './mobile.component/mobile.component';
import Webpage from './webpage.component/webpage.component';
import Contact from './Contact.component/Contact.component';
import Footer from './Footer.component/footer.component';
import { Layout } from './component/Layout';

import abtslide from './about.component/abtslide';
import weofr from './weOffer.component/weOffer.component';

import retail from './product.component/retailclick.component';
import ERetail from './product.component/ERetail.component';
import Home from './images/home';
import Contpage from './contpage.component/contpage.component';
import Industry from './IndustryExpertise/industry.component';
import Cent from './product.component/centralized.component';
import NotFoundPage from './pages/NotFoundPage';
import Abo from './about.component/abtM';

function App() {
  return (
    <Layout>
    <Router>
      <React.Fragment className="App">
     
        <Navbar /> 
        <Switch>
         
          <Route exact path="/" component={Home} /> 
          <Route path="/weofr" component={weofr} />
          <Route path="/Industry" component={Industry} />
          
          <Route  path="/Customised" component={Customised}/>
          <Route  path="/MobileApp" component={MobileApp}/>
          <Route  path="/Webpage" component={Webpage}/>
          
          <Route path="/retail" component={retail} />
          <Route path="/Cent" component={Cent} />

          <Route path="/abtslide" component={abtslide} />
          <Route path="/about" component={Abo} />
       
          <Route path="/ERetail" component={ERetail} />
          
          <Route path="/Contact" component={Contact} />
         
          <Route component={NotFoundPage}/>
          
        </Switch>      
        <Contpage/>
        <Footer />

      </React.Fragment>
      
    </Router>
    </Layout>

  );
}
export default App;
