import React, { Component } from 'react';
import './App.css';
import News from '../News/News';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '' 
    };
  }
  searchForm = (event) => {
    event.preventDefault()
    this.setState({
      search: this.search.value
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My feed</h1>
          <form className='col s12' onSubmit={e => this.searchForm(e)}>
            <div className="row">
              <div className="input-field col s12">
                <input 
                  ref={(input) => { this.search = input; }}
                  defaultValue=""
                  placeholder="...Search" 
                  type="text" 
                  className="validate" 
                />
                <button className="btn btn-primary" type="submit">send</button>
              </div>

            </div>
          </form>
        </header>
        <News search={this.state.search} />
      </div>
    );
  }
}

export default App;

