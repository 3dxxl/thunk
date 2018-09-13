import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//Die Seiten
import {StartConnect} from './StartSeite';
import ZweiteSeite from './ZweiteSeite';
import DritteSeite from './DritteSeite';

//semantic UI
import 'semantic-ui-css/semantic.min.css';

//devExtrem
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';


//Routes als Navigation
import Routes from './Routes';

//React Router
import {HashRouter, Route} from 'react-router-dom'

//redux
import {store} from './redux/MeinStore';
import {Provider} from 'react-redux';




ReactDOM.render(

<Provider store={store}>
    <HashRouter>
        <div>
            
        <Routes/>

        <Route exact={true} path={"/"} component={StartConnect}/>
        <Route path={"/ZweiteSeite"} component={ZweiteSeite}/>
        <Route path={"/DritteSeite"} component={DritteSeite}/>

        </div>


    </HashRouter>
</Provider>

, document.getElementById('root'));
registerServiceWorker();


