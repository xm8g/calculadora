import React, {Component} from 'react'
import './Button.css'

export default props => {
    let css =   'button '
    css += props.operation ? 'button-operation' : ''
    css += props.double ? 'button-double' : ''
    css += props.triple ? 'button-triple' : ''
    return (
        <button className={css} onClick={ e => props.click && props.click(props.label) }>{props.label}</button>
    )
}
