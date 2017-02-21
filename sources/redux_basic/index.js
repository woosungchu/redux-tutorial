import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

/**
 * Action
 */
const INCREMENT = "INCREMENT";

//action
function increase(diff){
	return {
		//'type'is necessary for action
		type : INCREMENT,
		addBy : diff
	}
}

/**
 * Reducer
 */
const initialState = {
	value: 0
}

const counterReducer = (state = initialState, action) => {
	switch(action.type){
	case INCREMENT:
		return Object.assign({},state,{
			value: state.value + action.addBy
		})
	default:
		return state;
	}
}

/**
 * store
 */
const store = createStore(counterReducer);

class App extends React.Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	
	onClick(){
		this.props.store.dispatch(increase(1));
	}
	
	render(){
		let style = {
	            position: 'fixed',
	            top: '50%',
	            left: '50%',
	            transform: 'translate(-50%, -50%)',
	            WebkitUserSelect: 'none',
	            MozUserSelect: 'none',
	            MsUserSelect:'none',
	            userSelect: 'none',
	            cursor: 'pointer'
		}
		
		return (
			<div onClick={this.onClick} style={style} >
				<h1> {this.props.store.getState().value } </h1>
			</div>
		)
	}
}

const render = () => {
	const appElement = document.getElementById('root');
	ReactDOM.render(
		<App store={store} />,
		appElement
	);
};

store.subscribe(render);
render();

