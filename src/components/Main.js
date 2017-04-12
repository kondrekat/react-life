require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class Cell extends React.Component {
  constructor() {
    super();
    this.state = {
      live: false
    };
  }
  changeState(){
    this.setState({
      live: !this.state.live
    });
  }
  render() {
    return (
      <div className={"cell " + (this.state.live ? 'alive' : '')} onClick={() => this.changeState()}>
        {this.state.live}
      </div>
    );
  }
}


class AppComponent extends React.Component {
  render() {
    return (
      <div className="center">
        <table className="table">
          <tr>
            <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
          </tr>

                    
          <tr>
            <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
          </tr>

                    
          <tr>
            <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
          </tr>
                    
          <tr>
            <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
          </tr>
                    
          <tr>
            <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
          </tr>
                    
          <tr>
            <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
          </tr>
                    
          <tr>
            <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
          </tr>
                    
          <tr>
            <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
          </tr>
                    
          <tr>
            <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
          </tr>
                    
          <tr>
            <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
          </tr>
                    
          <tr>
            <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
          </tr>
                    
          <tr>
            <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
          </tr>
                    
          <tr>
            <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
              <td>
              <Cell />
              </td>
          </tr>
        </table>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
