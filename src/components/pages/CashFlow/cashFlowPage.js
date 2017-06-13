import React, { Component } from 'react';

import FilterableCashflowTable from './FilterableCashflowTable';


class Cashflowpage extends Component {
  edit() {
    alert("Editing Note")
  }
  remove() {
    alert("Removing Note")
  }


  render() {
    return (
      <div className="container-fluid">
        <FilterableCashflowTable />
      </div>
    );
  }
}

export default Cashflowpage;


/*
////////////////////////
/// Using Properties ///
////////////////////////

var MyComponent = React.createClass({
    render() {
      return <div>
        <h1>{this.props.text}</h1>
        <p>{this.props.children}</p>
      </div>
    }
})

ReactDom.render(<div>
  <MyComponent text="Hello World">
  This is message 1
  </MyComponent>
  <MyComponent text="I am a Component">
  This is message 2
  </MyComponent>
  <MyComponent text="I have been reused!">
  This is message 3
  </MyComponent>
  </div>,
  document.getElementById(''))
</div>
*/

/*


/////////////////////////////////////
/// Handling Events With Property ///
/////////////////////////////////////

var Note = React.createClass({
  edit() {
    alert("Editing Note")
  },
  remove() {
    alert("Removing Note")
  },
  render() {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit}>EDIT</button>
          <button onClick={this.remove}>X</button>
        </span>
      </div>
    )
  }
})

ReactDom.render(<Note>Hello World</Note>,
  document.getElementById(''))
*/


/*
/////////////////////////////////////////
/// Using State With Checkbox Example ///
/////////////////////////////////////////

var Checkbox = React.createClass({
  getInitialState() {
    return {checked: false}
  },
  // Each time this function is called it toggles the state
  handleCheck() {
    this.setState({checked: !this.state.checked})
  },
  render() {
    var msg
    if(this,state.checked) {
      msg = "checked"
    } else {
      msg = "unchecked"
    }
    return ( <div>
      <input type="checkbox"
        onChange={this.handleCheck}

        // Handles issue if Initial State is checked: true
        defaultChecked={this.state.checked}/>
      <p>This box is {msg}</p>
    </div>)
  }
})
ReactDom.render(<Checkbox/>, document.getElementById(''))
*/
