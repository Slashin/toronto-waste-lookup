import React, { Component } from 'react';
import data from './data';
import './App.css';
import Results from './components/Results';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: [],
      search: '',
      resultsArr: []
    }

  }

  // handleChange = (value) => {
  //   
  // }

  handleClick = (evt) => {
    let value = evt.target.parentNode.parentNode.parentNode.children[0].children[0].value;
    this.getResults(value);
  }

  handleKeyPress = (event) => {
  
    if(event.key === 'Enter'){
      this.getResults(event.target.value);
    }
    
  }

  getResults = (search) => {
    let resultsArr = [];
    data.map((elem)=>{
      let keywords = elem.keywords.split(/[ ,()]+/);
      if(keywords.includes(search)){
        resultsArr.push(elem);
      }
    })
    this.setState({resultsArr: resultsArr});
    console.log(resultsArr);
  }

  render() {
    return (
      <div className="App">

        <div id="section1"><h1><strong>Toronto Waste Lookup</strong></h1></div>

        <div className="container">

        <div id="section2">
          <div id="searchBox" >
            <input type="text" onKeyPress={(event)=>{this.handleKeyPress(event)}} placeholder="Enter Keyword"/>
          </div>        
          <div id="searchButtonBox">
            <button onClick={(evt)=>this.handleClick(evt)}><i className="fas fa-search "></i></button>
          </div>
        </div>

        </div>

        <div id="section3">
          <Results data={this.state.resultsArr}/>
        </div>

        

      </div>
      
    );
  }
}

export default App;
