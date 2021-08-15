import React, {Component} from 'react';
import './home.css';

class Home extends Component{
  private myData:any;

  constructor( props:any ){
    super(props);

    this.myData='Mine';
  }

  render(){
    return(
      <div className="App">
        <div className="myContent">
          <h1>My App  {this.myData}</h1>
          <hr/>
          <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Atque voluptas neque voluptatem hic quae? Unde expedita 
          voluptas maiores possimus, dolore animi repellendus explicabo, 
          esse consequuntur assumenda quaerat amet nostrum consectetur.
          </p>
        </div>
    </div>
    );
  }
}

export default Home;
