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
    let value = evt.target.parentNode.parentNode.children[0].children[0].value;
    if(value.length === 0){
      this.setState({resultsArr: []});
    }else {
      this.getResults(value);
    }
  }

  handleKeyPress = (event) => {

    if(event.key === 'Enter'){
      if(event.target.value.length === 0){
        this.setState({resultsArr: []});
      }else {
        this.getResults(event.target.value.toLowerCase());
      }
      
    }
    
  }

  getResults = (search) => {
    let resultsArr = [];
    let searchterms = search.split(/[ ,()]+/);
    
    data.map((elem)=>{
      let lowered = elem.keywords.toLowerCase();
      let keywords = lowered.split(/[ ,()]+/);
      searchterms.map((val)=>{
        if(keywords.includes(val)){
          resultsArr.push(elem);
        }
        console.log("hi");
      })
      
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
            <input type="text" id="inputField" onKeyPress={(event)=>{this.handleKeyPress(event)}} placeholder="Enter Keyword"/>
          </div>        
          <div id="searchButtonBox" onClick={(evt)=>this.handleClick(evt)}>
            <button ><i className="fas fa-search "></i></button>
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
