import logo from './logo.svg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { Component } from 'react'
import { IoPrintOutline } from "react-icons/io5";

import Invoice from './Invoice/Invoice'


class App extends Component {

  constructor(props) {
    super(props)

    this.onChangeDatePicker = this.onChangeDatePicker.bind(this);

    this.onChangePayto01 = this.onChangePayto01.bind(this);

    this.onChangePayto02 = this.onChangePayto02.bind(this);

    this.onChangePayto03 = this.onChangePayto03.bind(this);

    this.onChangePayto04 = this.onChangePayto04.bind(this);

    this.onChangeinvoicedto_01 = this.onChangeinvoicedto_01.bind(this);

    this.onChangeinvoicedto_02 = this.onChangeinvoicedto_02.bind(this);

    this.onChangeinvoicedto_03 = this.onChangeinvoicedto_03.bind(this);

    this.onChangeinvoicedto_04 = this.onChangeinvoicedto_04.bind(this);

    this.onChangeinvoiced_no = this.onChangeinvoiced_no.bind(this);

    this.state = { 
      date: new Date(),
      invoice_no : "0001",
      payto_01 : "Koice Inc",
      payto_02 : "2705 N. Enterprise St",
      payto_03 : "Orange, CA 92865",
      payto_04 : "contact@koiceinc.com",
      invoicedto_01 : "Smith Rhodes",
      invoicedto_02 : "15 Hodges Mews, High Wycombe",
      invoicedto_03 : "HP12 3JL",
      invoicedto_04 : "United Kingdom"
    };
  }


  onChangeDatePicker(event){
    this.setState({date: event});
  }

  onChangeinvoiced_no(event){
     this.setState({invoice_no: event.target.invoice_no});
  }

  onChangePayto01(event){
    this.setState({payto_01: event.target.value});
  }

  onChangePayto02(event){
    this.setState({payto_02: event.target.value});
  }

  onChangePayto03(event){
    this.setState({payto_03: event.target.value});
  }

  onChangePayto04(event){
    this.setState({payto_04: event.target.value});
  }

  onChangeinvoicedto_01(event){
    this.setState({invoicedto_01 : event.target.value});
  }

  onChangeinvoicedto_02(event){
    this.setState({invoicedto_02 : event.target.value});
  }

  onChangeinvoicedto_03(event){
    this.setState({invoicedto_03 : event.target.value});
  }

  onChangeinvoicedto_04(event){
    this.setState({invoicedto_04 : event.target.value});
  }


  onClickPrint(){
    window.print();
  }
  

  render() {
    return (
      <div className="App">
          <div className="container-fluid invoice-container">
            <header>
                <div className="row align-items-center">
                  <div className="col-sm-7 text-center text-sm-left mb-3 mb-sm-0">
                    <img id="logo" src={logo} title="company_logo" alt="company_logo" style={{width: "100px"}}/>
                  </div>
                  <div className="col-sm-5 text-center text-sm-right">
                    <h4 className="text-7 mb-0">Invoice</h4>
                  </div>
                </div>
                <hr/>
            </header>
            

            <main>
            <div className="row">
              <div className="col-sm-6"><strong>Date:</strong> <DatePicker className="header__input" selected={this.state.date}  onChange={this.onChangeDatePicker}/></div>
              <div className="col-sm-6 text-sm-right"> <strong>Invoice No:</strong> <input type="text" onChange={this.onChangeinvoiced_no} className="header__input" style={{width: "20%"}} value={this.state.invoice_no}/></div>
          
            </div>
            <hr/>
            
              <div className="row">
                <div className="col-sm-6 text-sm-right order-sm-1"> <strong>Pay To:</strong>
                  <address>
                  <input type="text" className="header__input text-right" onChange={this.onChangePayto01} value={this.state.payto_01}/><br />
                  <input type="text" className="header__input text-right" onChange={this.onChangePayto02} value={this.state.payto_02}/><br />
                  <input type="text" className="header__input text-right" onChange={this.onChangePayto03} value={this.state.payto_03}/><br />
                  <input type="text" className="header__input text-right" onChange={this.onChangePayto04}  value={this.state.payto_04}/>
                  </address>
                </div>
                <div className="col-sm-6 order-sm-0"> <strong>Invoiced To:</strong>
                  <address>
                  <input type="text" className="header__input text-left" onChange={this.onChangeinvoicedto_01} value={this.state.invoicedto_01}/><br />
                  <input type="text" className="header__input text-left" onChange={this.onChangeinvoicedto_02} value={this.state.invoicedto_02}/><br />
                  <input type="text" className="header__input text-left" onChange={this.onChangeinvoicedto_03} value={this.state.invoicedto_03}/><br />
                  <input type="text" className="header__input text-left" onChange={this.onChangeinvoicedto_04} value={this.state.invoicedto_04}/>
                  </address>
                </div>
              </div> 

              <div className="card">
                  <div className="table-responsive">
                     <Invoice />
                  </div>
              </div>

            </main>

            <footer className="text-center mt-4">
              <p className="text-1"><strong>NOTE :</strong> This is computer generated receipt and does not require physical signature.</p>
              <div className="btn-group btn-group-sm d-print-none"> 
                <a href="#" onClick={this.onClickPrint} className="btn btn-light border text-black-50 shadow-none"><IoPrintOutline size="1.25em" /> Print</a> 
              </div>
            </footer>
            
          </div>
      </div>
    );
  }
}

export default App;
