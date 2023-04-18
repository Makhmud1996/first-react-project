import React, { Component } from 'react'
import {Container} from './style'

 class Button extends Component {
  render() {
    return (
      <Container type={this.props.type} mr={this.props.mr}>
        {this.props.icon && this.props.icon} {this.props.children}
        </Container>
    )
  }
}

export default Button