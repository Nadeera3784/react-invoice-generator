import logo from './logo.svg';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
import React, { Component } from 'react'

import Invoice from './Invoice/Invoice'

class App extends Component {

  render() {
    return (
      <div className="App">
          <div className="container-fluid invoice-container">
            <header>
                <div className="row align-items-center">
                  <div className="col-sm-7 text-center text-sm-left mb-3 mb-sm-0">
                    <img id="logo" src={logo} title="Koice" alt="Koice" style={{width: "100px"}}/>
                  </div>
                  <div className="col-sm-5 text-center text-sm-right">
                    <h4 className="text-7 mb-0">Invoice</h4>
                  </div>
                </div>
                <hr/>
            </header>
            

            <main>
            <div className="row">
              <div className="col-sm-6"><strong>Date:</strong> 05/12/2019</div>
              <div className="col-sm-6 text-sm-right"> <strong>Invoice No:</strong> 16835</div>
          
            </div>
            <hr/>
            
              <div className="row">
                <div className="col-sm-6 text-sm-right order-sm-1"> <strong>Pay To:</strong>
                  <address>
                  Koice Inc<br />
                  2705 N. Enterprise St<br />
                  Orange, CA 92865<br />
                contact@koiceinc.com
                  </address>
                </div>
                <div className="col-sm-6 order-sm-0"> <strong>Invoiced To:</strong>
                  <address>
                  Smith Rhodes<br />
                  15 Hodges Mews, High Wycombe<br />
                  HP12 3JL<br />
                  United Kingdom
                  </address>
                </div>
              </div> 

              <div className="card">
                <div className="card-header px-2 py-0">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <td className="col-3 border-0"><strong>Service</strong></td>
                        <td className="col-4 border-0"><strong>Description</strong></td>
                        <td className="col-2 text-center border-0"><strong>Rate</strong></td>
                        <td className="col-1 text-center border-0"><strong>QTY</strong></td>
                        <td className="col-2 text-right border-0"><strong>Amount</strong></td>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="card-body px-2">
                  <div className="table-responsive">
                     <Invoice />
                  </div>
                </div>
              </div>

            </main>

            <footer className="text-center mt-4">
              <p className="text-1"><strong>NOTE :</strong> This is computer generated receipt and does not require physical signature.</p>
              <div className="btn-group btn-group-sm d-print-none"> <a href="#" className="btn btn-light border text-black-50 shadow-none"><i className="fa fa-print"></i> Print</a> <a href="" className="btn btn-light border text-black-50 shadow-none"><i className="fa fa-download"></i> Download</a> </div>
            </footer>
            
          </div>
      </div>
    );
  }
}

export default App;
