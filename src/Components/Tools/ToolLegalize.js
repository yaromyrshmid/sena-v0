import React, { Component } from 'react';
import Iframe from 'react-iframe';

export class ToolLegalize extends Component {
  render() {
    return (
      <Iframe url="https://fop.freelancehunt.com/uk/"
        width="100%"
        height="700px"        
        display="initial"
        position="relative"/> 
    )
  }
}