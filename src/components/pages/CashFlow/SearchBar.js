import React, { Component } from 'react';

import { Col, /*Button,*/ Form, FormGroup, Label, Input, /*FormText*/ } from 'reactstrap';

class SearchBar extends Component {
  /*
  constructor() {
      super();
  }
  */

  render() {

      return (
          <Form>
              <FormGroup row>
                  <Label htmlFor="FilterInput2" md={1}>Filter</Label>
                  <Col md={11}>
                      <Input type="text" name="email" id="FilterInput2" placeholder="Enter text to filter..."
                             onChange={this.props.update} value={this.props.txt} />
                  </Col>
              </FormGroup>
          </Form>
      )
  }
}


export default SearchBar;
