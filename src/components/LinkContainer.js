import React from 'react';
import Table from './Table';
import Form from './Form';
//parent component to our table and form componet
//creates table of value
class LinkContainer extends React.Component {
   constructor(props){
       super(props);
       /* TODO - Create state object for storing favLinks */
           this.state = {
               favLinks: []
   
           }
       }
  /* remove from the table */
   removeCharacter = index => {
       /*
           TODO - Create logic for setting the state to filter array and remove favLink at index
       */
      this.setState((state) => ({
       favLinks: state.favLinks.filter((value, i) => i !== index)
   }))
 }

   handleSubmit = favLink => {
       /*   gets back the new added object (links)
           TODO - Create logic to setState and add new favLink to favLinks array in state
       */
      this.setState((state) =>({
       favLinks: state.favLinks.concat([favLink])   //favlinks [favlinks] concat()
   }))

}

   render() {

       return (
           <div className="container">
               <h1 id =  "heading-element" > My Favorite Links</h1>
               <p>Add a new url with a name and link to the table.</p> 
                { /*TODO - Add Table Component 
                pass handleSubmit props */ }
               <Table linkData = {this.state.favLinks} removeLink = {this.removeCharacter}/>
               <br/>
               <h3>Add New</h3>
               {/*TODO - Add Form Component */}
               <Form handleSubmit={this.handleSubmit} />
           </div>
       );
   }
}

export default LinkContainer;