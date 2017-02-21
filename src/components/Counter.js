import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {
  render(){
    return (
      <h1>VALUE : {this.props.value }</h1>
    )
  }
}

/**
mapStateToProps(state, [ownProps]): (Function) store 의 state 를 컴포넌트의 props 에 매핑 시켜줍니다.
ownProps 인수가 명시될 경우, 이를 통해 함수 내부에서 컴포넌트의 props 값에 접근 할 수 있습니다.
*/
let mapStateToProps = (state) => {
  return {
    value: state.counter.value
  };
}

Counter = connect(mapStateToProps)(Counter);
/**
connect는 react-redux 의 내장 API 입니다. 이 함수는 React Component 를 Redux Store에  ‘연결’ 해줍니다.
이 함수의 리턴값은 특정 컴포넌트 클래스의 props 를 store의 데이터에 연결시켜주는 또 다른 함수를 리턴합니다.
리턴된 함수에 컴포넌트를 인수로 넣어 실행하면, 기존 컴포넌트를 수정하는게 아니라 새로운 컴포넌트를 return 합니다.
*/

export default Counter;
