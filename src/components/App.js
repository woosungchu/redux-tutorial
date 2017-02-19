import React from 'react';
import ContactInfo from './ContactInfo';

class App extends React.Component {
  render(){
    return (
      <Contacts/>
    )
  }
}

class Contacts extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      contactData : [
        {name : "Abet", phone : "010-0000-0001"},
        {name : "Betty", phone : "010-0000-0002"},
        {name : "Charlie", phone : "010-0000-0003"},
        {name : "David", phone : "010-0000-0004"},
        {name : "Etest", phone : "010-0000-0005"}
      ]
    }

  }


  render(){
    return (
      <div>
          <h1>Contacts</h1>
          <ul>
            {this.state.contactData.map((contact,i)=>{
              return (
                <ContactInfo name= {contact.name}
                             phone = {contact.phone}
                             key = {i}
                             />
              );
            })}
          </ul>
      </div>
    )
  }
}

export default App;
