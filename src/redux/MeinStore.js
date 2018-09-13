import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';



//hier importiere ich die jeweiligen Reducer übergebe gleichzeitig den namen reducer an die neue Bezeichnung 
//z.b. reducer as NavReducer, könnte auch reducer as PeterPanReducer heißen
import {reducer as index} from './reducer/index';
import {reducer as indexzwei} from './reducer/indexzwei';

//hier wird reducer an den combineReducer übergeben und diese beinhaltet, dann die jeweiligen Sub Reducers
//einfaerben ist das object im initialState des Reducers der unter':/reducer/index' zu finden ist
const reducer = combineReducers({
    einfaerben: index,
    einfaerbenzwei:indexzwei
});



//wichtig: zuerst der reducer dann der initialState = createStore(initialState, reducer, ...)
//für redux thunk musste ich erste ein Objekt erstellen composeEnhancer u. diese die dev tools übergeben,
//der grund ist das ich bei der übergabe vom store einen Enhancer(Erweiterung) nur an der dritte stelle darf
//somit kann man die applyMiddleware & thunk als props weitergeben

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk) ) )

