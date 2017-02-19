import React from 'react';
import update from 'react-addons-update';
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
      ],
      selectedKey: -1
    }
  }//constructor

  _onSelect(key){
    if(key==this.state.selectedKey){
      console.log("key selected cancelled");
      this.setState({
        selectedKey:-1
      });
      return;
    }

    this.setState({
      selectedKey:key
    });
    console.log(key+ " is selected");
  }

  _isSelected(key){
    return (this.state.selectedKey == key)
  }

  _insertContact(name,phone){
    let newState = update(this.state,{
      contactData : {
        $push : [{"name":name,"phone":phone}]
      }
    });
    this.setState(newState);
  }

  _removeContact(){
    if(this.state.selectedKey==-1){
      console.log("contact not selected");
      return;
    }

    this.setState({
      contactData: update(
        this.state.contactData,
        {
          $splice: [[this.state.selectedKey,1]]
        }
      ),
      selectedKey: -1
    })
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
                             contactKey = {i}
                             isSelected = {this._isSelected.bind(this)(i)}
                             onSelect = {this._onSelect.bind(this)}
                             />
              );
            })}
          </ul>
          <ContactCreator onInsert={this._insertContact.bind(this)}/>
          <ContactRemover onRemove={this._removeContact.bind(this)}/>
      </div>
    )
  }
}

class ContactCreator extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name : "",
      phone : ""
    };
  }

  handleChange(e){
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClick(){
    this.props.onInsert(this.state.name, this.state.phone);
    this.setState({
      name: "",
      phone: ""
    });
  }

  render(){
    return (
      <div>
        <p>
          <input type="text" name="name" placeholder="name"
            value={this.state.name} onChange={this.handleChange.bind(this)} />
          <input type="text" name="phone" placeholder="phone"
            value={this.state.phone} onChange={this.handleChange.bind(this)} />
          <button onClick={this.handleClick.bind(this)}>Insert</button>
        </p>
      </div>
    );
  }
}

class ContactRemover extends React.Component {
  handleClick(){
    this.props.onRemove();
  }

  render(){
    return (
      <button onClick={this.handleClick.bind(this)}>
        Remove selected contact
      </button>
    );
  }
}

export default App;
