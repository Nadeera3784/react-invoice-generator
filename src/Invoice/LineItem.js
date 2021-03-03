import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IoIosTrash } from "react-icons/io";

class LineItem extends Component {

  render = () => {

    const { index, name, description, quantity, price } = this.props

    return (
      <tr>
        <td>{index + 1}</td>
        <td><input className="form-control" name="name" type="text" value={name} onChange={this.props.changeHandler(index)} /></td>
        <td><input className="form-control" name="description" type="text" value={description} onChange={this.props.changeHandler(index)} /></td>
        <td><input  className="form-control" name="quantity" type="number" step="1" value={quantity} onChange={this.props.changeHandler(index)} onFocus={this.props.focusHandler} /></td>
        <td><input className="form-control" name="price" type="number" step="0.01" min="0.00" max="9999999.99" value={price} onChange={this.props.changeHandler(index)} onFocus={this.props.focusHandler} /></td>
        <td>{this.props.currencyFormatter( quantity * price )}</td>
        <td>
          <button className="btn btn-sm btn-danger" type="button" onClick={this.props.deleteHandler(index)}><IoIosTrash size="1.25em" /></button>
        </td>
      </tr>
    )
  }
}

export default LineItem

LineItem.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

