import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LineItem from './LineItem'
import { IoIosAddCircleOutline } from "react-icons/io";

class LineItems extends Component {
 

  render = () => {

    const {items, addHandler, reorderHandler, ...functions} = this.props;

    return (
        <table className="table">
           <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Description</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                    <th scope="col"> Manage</th>
                </tr>
            </thead>
            
            <tbody>
            {this.props.items.map((item, i) => (
                <LineItem
                    style={{color: 'red'}}
                    key={i + item.id} index={i} name={item.name}
                    description={item.description} quantity={item.quantity} price={item.price}
                    {...functions}
                />
            ))
            }
            </tbody>
            <tfoot>
                <tr>
                    <td><button className="btn btn-success btn-sm" type="button" onClick={addHandler}> <IoIosAddCircleOutline size="1.25em" /></button></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Tax Rate (%)</td>
                    <td><input className="form-control" name="taxRate" type="number" step="0.01" value={this.props.taxRate} onChange={this.props.handleInvoiceChange} onFocus={this.props.focusHandler} /></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Subtotal</td>
                    <td>{this.props.formatCurrency(this.props.calcLineItemsTotal())}</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Tax ({this.props.taxRate}%)</td>
                    <td>{this.props.formatCurrency(this.props.calcTaxTotal())}</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total Due</td>
                    <td>{this.props.formatCurrency(this.props.calcGrandTotal())}</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>

    )
  }
}

export default LineItems

LineItems.propTypes = {
  items: PropTypes.array.isRequired,
  currencyFormatter: PropTypes.func.isRequired,
  addHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  focusHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,

}


