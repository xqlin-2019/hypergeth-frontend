import React, { Component } from "react";
import TransactionDataService from "../services/transaction.service_3000";
import { Link } from "react-router-dom";


export default class SgxTransactions extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    this.retrieveRecords();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveRecords() {
    // this.setState({transactions: sgx_transactions});
    TransactionDataService.getAllSgx()
      .then(response => {
        this.setState({
          transactions: response.data
        });
        //console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  searchTitle() {
    TransactionDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, transactions} = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <h1>SGX Transactions</h1>
        <table class="table table text-center table-image">
            <thead>
                <tr>
                <th class="col">ID</th>
                <th class="col">Status</th>
                <th class="col">Recon ID</th>
                <th class="col">Quantity</th>
                <th class="col">Execution Date</th>
                <th class="col">ISIN</th>
                <th class="col">RT</th>
                <th class="col">ClINO</th>
                <th class="col">Settlement Price</th>
                </tr>
            </thead>
            <tbody>
                {transactions && 
                    transactions.map((transaction) => (
                      <tr class="transaction-row ">
                            <td class="col">{transaction.Record.ID}</td>
                            <div>
                            {transaction.Record.Status == 'pending' ? <button type="button" class="btn btn-warning btn-sm" id="status">{transaction.Record.Status}</button> : null}
                            {transaction.Record.Status == 'fail' ?  <button type="button" class="btn btn-danger btn-sm" id="status">{transaction.Record.Status}</button> : null}
                            {transaction.Record.Status == 'success' ? <button type="button" class="btn btn-success btn-sm" id="status">{transaction.Record.Status}</button> : null}
                            </div>
                            <td class="col">
                              <Link to={"/transaction/" + transaction.Record.Block_ID} className="link">
                              {transaction.Record.Block_ID}
                              </Link>
                            </td>
                            <td class="col">{transaction.Record.Quantity}</td>
                            <td class="col">{transaction.Record.Execution_Date}</td>
                            <td class="col">{transaction.Record.ISIN}</td>
                            <td class="col">{transaction.Record.RT}</td>
                            <td class="col">{transaction.Record.CLINO.substring(0,8) + "..."}</td>
                            <td class="col">{transaction.Record.Settlement_price}</td>
                        </tr> 
                    ))} 
            </tbody>
        </table>
      </div>
    );
  }
}