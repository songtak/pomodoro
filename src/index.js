import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import RootStore from "Stores";
// import ls from 'local-storage';
// import * as serviceWorker from "./serviceWorker";

import RootStore from "./Stores/index";
const store = new RootStore();

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById("root")

  <Provider {...store}>
    {/*<React.StrictMode>*/}
    <App />
    {/*</React.StrictMode>*/}
  </Provider>,
  document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
