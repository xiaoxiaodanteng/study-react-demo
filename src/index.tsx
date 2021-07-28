import './wdyr'
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { loadServer, DevTools } from 'jira-dev-tool'
import 'antd/dist/antd.less'
import { AuthProviders } from 'context'

loadServer(() => ReactDOM.render(
  <React.StrictMode>
    <AuthProviders>
      <DevTools/>
      <App />
    </AuthProviders>
  </React.StrictMode>,
  document.getElementById("root")
));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 222
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
