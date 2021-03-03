import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import LineItems from './LineItems'

import './Invoice.css';


class Invoice extends Component {

    locale = 'en-US'
    currency = 'LKR'
  
    state = {
      taxRate: 0.00,
      lineItems: [
        {
          id: 'initial',    
          name: '',
          description: '',
          quantity: 0,
          price: 0.00,
        },
      ]
    }


    handleInvoiceChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    handleLineItemChange = (elementIndex) => (event) => {
        let lineItems = this.state.lineItems.map((item, i) => {
          if (elementIndex !== i) return item
          return {...item, [event.target.name]: event.target.value}
        })
        this.setState({lineItems})
    }
    
    handleAddLineItem = (event) => {
        this.setState({
          lineItems: this.state.lineItems.concat(
            [{ id: uuidv4(), name: '', description: '', quantity: 0, price: 0.00 }]
          )
        })
    }
    
    handleRemoveLineItem = (elementIndex) => (event) => {
        this.setState({
          lineItems: this.state.lineItems.filter((item, i) => {
            return elementIndex !== i
          })
        })
    }
    
    handleReorderLineItems = (newLineItems) => {
        this.setState({
          lineItems: newLineItems,
        })
    }
    
    handleFocusSelect = (event) => {
        event.target.select()
    }
    
    handlePayButtonClick = () => {
        alert('Not implemented')
    }
    
    formatCurrency = (amount) => {
        return (new Intl.NumberFormat(this.locale, {
          style: 'currency',
          currency: this.currency,
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(amount))
    }
    
    calcTaxAmount = (c) => {
        return c * (this.state.taxRate / 100)
    }
    
    calcLineItemsTotal = () => {
        return this.state.lineItems.reduce((prev, cur) => (prev + (cur.quantity * cur.price)), 0)
    }
    
    calcTaxTotal = () => {
        return this.calcLineItemsTotal() * (this.state.taxRate / 100)
    }
    
    calcGrandTotal = () => {
        return this.calcLineItemsTotal() + this.calcTaxTotal()
    }
    

    render = () => {
        return (
            
          <LineItems
          items={this.state.lineItems}
          currencyFormatter={this.formatCurrency}
          addHandler={this.handleAddLineItem}
          changeHandler={this.handleLineItemChange}
          focusHandler={this.handleFocusSelect}
          deleteHandler={this.handleRemoveLineItem}
          reorderHandler={this.handleReorderLineItems}
          formatCurrency={this.formatCurrency}
          calcLineItemsTotal={this.calcLineItemsTotal}
          handleInvoiceChange={this.handleInvoiceChange}
          calcTaxTotal={this.calcTaxTotal}
          calcGrandTotal={this.calcGrandTotal}
        />

        )
    }



}

export default Invoice