import React, { Component } from 'react';
import {
  BrowserRouter,Route,Switch
}from 'react-router-dom';
import  "./App.css" 
import Form from "./components/Form";
import Recipes from "./components/Recipes";
const API_KEY="f815b475e9bbb346152a319f9382f1bd"
//f815b475e9bbb346152a319f9382f1bd 
//a117029f19b24c6411936267c78fafcc
class App extends Component {
  state={
    recipes:[]
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
    // console.log(data);
    // console.log(api_call);
  }
  componentDidMount=()=>{
    const json=localStorage.getItem("recipes");
    const recipes =JSON.parse(json);
    this.setState({recipes});
  }
  componentDidUpdate=()=>{//this method active when component update
    const recipes=JSON.stringify(this.state.recipes);
    //localStorage only take string (this.state.recipes)is object
    localStorage.setItem("recipes",recipes);//name of item,thing
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>        
    );//create new props to pass anything
  }
}

export default App;
