import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";

const reconcile_transaction = {
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

}

const primo_transaction = {
  recon_id:1,
  reconcile_status: "success",
  transactions: [
  {
      primo_id:1,
      quantity: 20,
      execution_date: "210719",
      reut: "SG2F48989824",
      buy_sell: "B",
      account:"765aa1a943a5aa1d0cae8b5c97b68a17785179e6ef13aaaf1b99b78c2387dd09",
      counter_party: "Q7SGX",
      settlement_date:"20210722",
      status:"A",
      trade_id:"106",
      settlement_price:0.265,
      principle:26.5,
      price_currency:"SGD"

  },
  {
      primo_id:2,
      quantity: 20,
      execution_date: "210719",
      reut: "SG2F48989824",
      buy_sell: "B",
      account:"765aa1a943a5aa1d0cae8b5c97b68a17785179e6ef13aaaf1b99b78c2387dd09",
      counter_party: "Q7SGX",
      settlement_date:"20210722",
      status:"A",
      trade_id:"106",
      settlement_price:0.265,
      principle:26.5,
      price_currency:"SGD"

  },
  {
    primo_id:3,
    quantity: 20,
    execution_date: "210719",
    reut: "SG2F48989824",
    buy_sell: "B",
    account:"765aa1a943a5aa1d0cae8b5c97b68a17785179e6ef13aaaf1b99b78c2387dd09",
    counter_party: "Q7SGX",
    settlement_date:"20210722",
    status:"A",
    trade_id:"106",
    settlement_price:0.265,
    principle:26.5,
    price_currency:"SGD"

  },
  {
    primo_id:4,
    quantity: 20,
    execution_date: "210719",
    reut: "SG2F48989824",
    buy_sell: "B",
    account:"765aa1a943a5aa1d0cae8b5c97b68a17785179e6ef13aaaf1b99b78c2387dd09",
    counter_party: "Q7SGX",
    settlement_date:"20210722",
    status:"A",
    trade_id:"106",
    settlement_price:0.265,
    principle:26.5,
    price_currency:"SGD"

  },
  {
    primo_id:5,
    quantity: 20,
    execution_date: "210719",
    reut: "SG2F48989824",
    buy_sell: "B",
    account:"765aa1a943a5aa1d0cae8b5c97b68a17785179e6ef13aaaf1b99b78c2387dd09",
    counter_party: "Q7SGX",
    settlement_date:"20210722",
    status:"A",
    trade_id:"106",
    settlement_price:0.265,
    principle:26.5,
    price_currency:"SGD"

  }]
}

const sgx_transaction = {
  recon_id:1,
  reconcile_status: "success",
  transactions:[
  {
      recon_id:1,
      reconcile_status: "success",
      quantity: 100,
      execution_date: "210719",
      isin: "SG2F48989824",
      rt: "B",
      clino:"765aa1a943a5aa1d0cae8b5c97b68a17785179e6ef13aaaf1b99b78c2387dd09",
      settlement_price:0.265,
  }]
}

export default class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    this.retrieveTransactions();
  }

  retrieveTransactions() {
    this.setState({transactions: reconcile_transaction});
  }


  render() {
    const { transactions } = this.state;

    return (
      <div className="list row">
        <h1>Reconcile ID: {this.props.match.params.id}</h1>
        <table >
            <thead>
                <tr>
                </tr>
            </thead>
            <tbody>
              <tr>
                    <th scope="row">Account (CLINO):</th>
                    <td class="col" colspan="3">{reconcile_transaction.account}</td>
                </tr> 
                <tr>
                    <th scope="row">Cumulative Quantity:</th>
                    <td class="col">{reconcile_transaction.quantity}</td>
                    <th scope="row">Reconcile Status:</th>
                    <td class="col">{reconcile_transaction.reconcile_status}</td>
                </tr> 
                <tr>
                    <th scope="row">ISIN (REUT:</th>
                    <td class="col">{reconcile_transaction.isin}</td>
                    <th scope="row">Buy/Sell (RT):</th>
                    <td class="col">{reconcile_transaction.buy_sell}</td>
                </tr> 
                <tr>
                    <th scope="row">Trade Date:</th>
                    <td class="col">{reconcile_transaction.trade_date}</td>
                    <th scope="row">Counter Party:</th>
                    <td class="col">{reconcile_transaction.counter_party}</td>
                </tr> 
                <tr>
                    <th scope="row">Settlement Date:</th>
                    <td class="col">{reconcile_transaction.settlement_date}</td>
                    <th scope="row">Status:</th>
                    <td class="col">{reconcile_transaction.status}</td>
                </tr> 
                <tr>
                    <th scope="row">Trade ID:</th>
                    <td class="col">{reconcile_transaction.trade_id}</td>
                    <th scope="row">Price:</th>
                    <td class="col">{reconcile_transaction.price}</td>
                </tr> 
                <tr>
                    <th scope="row">New Amount:</th>
                    <td class="col">{reconcile_transaction.net_amount}</td>
                    <th scope="row">Pricing Currency:</th>
                    <td class="col">{reconcile_transaction.price_currency}</td>
                </tr> 
            </tbody>
        </table>
        <h2 class="h2 text-center">PRIMO Transactions</h2>
        <table class="table table text-center table-image">
            <thead>
                <tr>
                <th class="col">Quantity</th>
                <th class="col">Execution Date</th>
                <th class="col">REUT</th>
                <th class="col">Buy / Sell</th>
                <th class="col">Account</th>
                <th class="col">Counter Party</th>
                <th class="col">Settlement Date</th>
                <th class="col">Status</th>
                <th class="col">Trade_ID</th>
                <th class="col">Settlement Price</th>
                <th class="col">Principle</th>
                <th class="col">Price Currency</th>
                </tr>
            </thead>
            <tbody>
                {primo_transaction.transactions && 
                    primo_transaction.transactions.map((transaction) => (
                        <tr class="transaction-row ">
                            <td class="col">{transaction.quantity}</td>
                            <td class="col">{transaction.execution_date}</td>
                            <td class="col">{transaction.reut}</td>
                            <td class="col">{transaction.buy_sell}</td>
                            <td class="col">{transaction.account.substring(0,8) + "..."}</td>
                            <td class="col">{transaction.counter_party}</td>
                            <td class="col">{transaction.settlement_date}</td>
                            <td class="col">{transaction.trade_id}</td>
                            <td class="col">{transaction.status}</td>
                            <td class="col">{transaction.settlement_price}</td>
                            <td class="col">{transaction.principle}</td>
                            <td class="col">{transaction.price_currency}</td>
                        </tr> 
                    ))} 
            </tbody>
        </table>
        <h2 class="h2 text-center">SGX Transactions</h2>
        <table class="table table text-center table-image">
            <thead>
                <tr>
                <th class="col">Quantity</th>
                <th class="col">Execution Date</th>
                <th class="col">ISIN</th>
                <th class="col">RT</th>
                <th class="col">ClINO</th>
                <th class="col">Settlement Price</th>
                </tr>
            </thead>
            <tbody>
                {sgx_transaction.transactions && 
                    sgx_transaction.transactions.map((transaction) => (
                        <tr class="transaction-row ">
                            <td class="col">{transaction.quantity}</td>
                            <td class="col">{transaction.execution_date}</td>
                            <td class="col">{transaction.isin}</td>
                            <td class="col">{transaction.rt}</td>
                            <td class="col">{transaction.clino.substring(0,8) + "..."}</td>
                            <td class="col">{transaction.settlement_price}</td>
                        </tr> 
                    ))} 
            </tbody>
        </table>
      </div>
    );
  }
}