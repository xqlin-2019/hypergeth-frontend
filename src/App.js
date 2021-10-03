import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ReconcileTransactions from "./components/reconcile-transactions.component";
import PrimoTransactions from "./components/primo-transactions.component";
import SgxTransactions from "./components/sgx-transactions.component";
import Transaction from "./components/transaction.component";
import Upload from "./components/upload.component";
import FailedSgxTransactions from "./components/fail-sgx-transactions.component";
import FailedPrimoTransactions from "./components/fail-primo-transactions.component";
import SuccessSgxTransactions from "./components/success-sgx-transactions.component";
import SuccessPrimoTransactions from "./components/success-primo-transactions.component";


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/home" className="navbar-brand">
            HYPERGETH
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/primo"} className="nav-link">
                PRIMO
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/sgx"} className="nav-link">
                SGX
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/sgx_fail"} className="nav-link">
                FAILED SGX
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/sgx_success"} className="nav-link">
                SUCCESS SGX
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/primo_fail"} className="nav-link">
                FAILED PRIMO
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/primo_success"} className="nav-link">
                SUCCESS PRIMO
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            {/* <Route exact path={["/", "/home"]} component={ReconcileTransactions} /> */}
            <Route exact path="/primo" component={PrimoTransactions} />
            <Route exact path="/sgx" component={SgxTransactions} />
            <Route exact path="/sgx_fail" component={FailedSgxTransactions} />
            <Route exact path="/sgx_success" component={SuccessSgxTransactions} />
            <Route exact path="/primo_fail" component={FailedPrimoTransactions} />
            <Route exact path="/primo_success" component={SuccessPrimoTransactions} />
            <Route exact path={["/", "/home"]} component={Upload} />
            <Route path="/transaction/:id" component={Transaction} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;