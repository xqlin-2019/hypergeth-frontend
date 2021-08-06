import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";

const reconcile_transactions = [
    {
        recon_id:1,
        reconcile_status: "success",
        quantity: 100,
        trade_date: "210719",
        isin: "SG2F48989824",
        buy_sell: "B",
        account:"765aa1a943a5aa1d0cae8b5c97b68a17785179e6ef13aaaf1b99b78c2387dd09",
        counter_party: "Q7SGX",
        settlement_date:"20210722",
        status:"A",
        trade_id:"106",
        price:0.265,
        net_amount:26.5,
        price_currency:"SGD"

    },
    {
      recon_id:2,
        reconcile_status: "fail",
        quantity: 60,
        trade_date: "210719",
        isin: "SG2F48989824",
        buy_sell: "B",
        account:"765aa1a943a5aa1d0cae8b5c97b68a17785179e6ef13aaaf1b99b78c2387dd09",
        counter_party: "Q7SGX",
        settlement_date:"20210722",
        status:"A",
        trade_id:"106",
        price:0.265,
        net_amount:26.5,
        price_currency:"SGD"

    },
    {
      recon_id:3,
        reconcile_status: "fail",
        quantity: 80,
        trade_date: "210719",
        isin: "SG2F48989824",
        buy_sell: "B",
        account:"765aa1a943a5aa1d0cae8b5c97b68a17785179e6ef13aaaf1b99b78c2387dd09",
        counter_party: "Q7SGX",
        settlement_date:"20210722",
        status:"A",
        trade_id:"106",
        price:0.265,
        net_amount:26.5,
        price_currency:"SGD"

    },
    {
      recon_id:4,
      reconcile_status: "success",
      quantity: 100,
      trade_date: "210719",
      isin: "SG2F48989824",
      buy_sell: "B",
      account:"765aa1a943a5aa1d0cae8b5c97b68a17785179e6ef13aaaf1b99b78c2387dd09",
      counter_party: "Q7SGX",
      settlement_date:"20210722",
      status:"A",
      trade_id:"106",
      price:0.265,
      net_amount:26.5,
      price_currency:"SGD"

  }
]


export default class ReconcileTransactions extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      records: [],
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
    this.setState({records: reconcile_transactions});
  }


  searchTitle() {
    TutorialDataService.findByTitle(this.state.searchTitle)
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
    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;

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
        <h1>Reconciled Transactions</h1>
        <table class="table table text-center table-image">
            <thead>
                <tr>
                <th class="col">Status</th>
                <th class="col">Recon ID</th>
                <th class="col">buy / Sell</th>
                <th class="col">Client ID</th>
                <th class="col">ISIN</th>
                <th class="col">Price</th>
                <th class="col">Cumulative Quanty</th>
                <th class="col">Reconcile Date</th>
                </tr>
            </thead>
            <tbody>
                {reconcile_transactions && 
                    reconcile_transactions.map((transaction) => (
                        <tr class="transaction-row ">
                            <th scope="row">{transaction.reconcile_status}</th>
                            <td class="col">
                              <Link to={"/transaction/" + transaction.recon_id} className="link">
                              {transaction.recon_id}
                              </Link>
                            </td>
                            <td class="col">{transaction.buy_sell}</td>
                            <td class="col">{transaction.account.substring(0,8) + "..."}</td>
                            <td class="col">{transaction.isin}</td>
                            <td class="col">{transaction.price}</td>
                            <td class="col">{transaction.quantity}</td>
                            <td class="col">{transaction.trade_date}</td>
                        </tr> 
                    ))} 
            </tbody>
        </table>
      </div>
    );
  }
}