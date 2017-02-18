import React from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header title={ this.props.headerTitle }/>
        <Content title={ this.props.contentTitle }
                  body={ this.props.contentBody }/>
      </div>
    );
  }
}

//Case 1
App.defaultProps = {
  headerTitle : 'Default header',
  contentTitle : 'Default contentTitle',
  contentBody : 'Default contentBody'
}

//Validator Test
// App.defaultProps = {
//   headerTitle : 'Default header',
//   contentTitle : 5, // not string
//   contentBody : undefined //isRequired
// }

export default App;
