import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from "../src/context/context"
import { StateProvider } from "./component/Search/stateProvider";
import { initialState } from './component/Search/reducer';
import reducer from "./component/Search/reducer"
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ContextProvider>
        <StateProvider initialState={initialState} reducer={reducer}>
                 <App />
        </StateProvider>
     </ContextProvider>
    
  </React.StrictMode>
);
//      
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
