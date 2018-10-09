import React from 'react';

class Form extends React.Component{//props get getRecipe object 
  constructor(props) {
   super(props);
   this.state={
   value:"" 
  }
  }
  ChangedHandler=(event)=>{
    this.setState({value:event.target.value});

  }
  valid(){
    return this.state.value==""
  }
  render(){
    console.log(this.valid());
  return(
    <form onSubmit={this.props.getRecipe} style={{marginBottom:"2rem"}}>
      <input className="form__input" type="text"
             name="recipeName"
             onChange={this.ChangedHandler}
             value={this.state.value}/>
      <button className="form__button" disabled={this.valid()}>Search</button>
    </form>
    );
  }

}

export default Form;