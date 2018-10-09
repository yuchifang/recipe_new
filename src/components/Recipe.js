import React from 'react';
import {
  Link
}from 'react-router-dom';
const API_KEY="f815b475e9bbb346152a319f9382f1bd"
class Recipe extends React.Component{
  state={
    activeRecipe:[]
  }
  componentDidMount=async()=>{//this component get active do this methed 
    const title= this.props.location.state.recipe;//use title to search
    const req_call = await fetch(`
https://cors-anywhere.herokuapp.com/http://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    
    const res = await req_call.json();
    this.setState({ activeRecipe: res.recipes[0] });
    // console.log(res.recipes[0]);
    console.log(this.state.activeRecipe)
  }
  
  render(){
    const recipe= this.state.activeRecipe;
    return(
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Recipe</h1>
        </header>
      <div className="container">
       
        {this.state.activeRecipe.length!==0 &&
        <div className="active-recipe">
          <img 
            className="active-recipe__img" 
            src={recipe.image_url} 
            alt={recipe.title}/>
          <h3 className="active-recipe__title">{recipe.title}</h3>
          <h4 className="active-recipe__publisher">
            Publisher:<span>{recipe.publisher}</span>
          </h4>
          <p className="active-recipe__website">
          Website:
            <span>
              <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
            </span>
          </p>
          <button className="active-recipe__button">
          <Link to="/">Go Home</Link>
          </button>
        </div>
        }
        </div>
      </div>
    );
  };
}
export default Recipe;