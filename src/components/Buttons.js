import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Buttons extends React.Component {
  render(){
    return (
      <div>
        <button type="button" onClick={this.props.onIncrement}>+</button>
        <button type="button" onClick={this.props.onDecrement}>-</button>
      </div>
    )
  }
}

/**
mapDispatchToProps(dispatch, [ownProps]): (Function or Object)
컴포넌트의 특정 함수형 props 를 실행 했을 때, 개발자가 지정한 action을 dispatch 하도록 설정합니다.
*/
let mapDispatchToProps = (dispatch) => {
  return {
    onIncrement : ()=> dispatch(increment()),
    onDecrement : ()=> dispatch(decrement())
  }
}

Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;
