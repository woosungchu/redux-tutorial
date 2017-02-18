import React from 'react';

//CamelCase
class App extends React.Component {
  sayHey(){
    alert('Hey!');
  }
  render(){
    let text = "Dev-Server";
    let pStyle = {
      color : 'aqua',
      backgroundColor : 'black'
    }
    return (
      <div>
        <h1>Hello React Skeleton</h1>
        <h2> Welcome to {text}</h2>
        <button onClick={this.sayHey}>Click Me</button>
        <p style = {pStyle}>{1 == 1 ? 'True':'False'}</p>
        { /* comments */ }
      </div>
    );
  }
}

export default App;
