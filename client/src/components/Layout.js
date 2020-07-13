import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <img className="w-100" src="https://placeimg.com/1000/50/nature" alt="" />
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}