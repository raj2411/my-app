import React, {Component} from 'react';
class ErrorBoundary extends Component{
	constructor(){
		super();
		this.state={
			hasError: false
		}
	}
	componentDidCatch(error, info){
		console.log("This componentDidCatch ran");
		this.setState({hasError: true})
	}
	render(){
		if(this.state.hasError){
			console.log("I am running");
			return <h1> Oops! Something bad happened. We will be back shortly </h1>
		}
		console.log("I am runningdddddddddddddddddd");
		return this.state.children;
		
	}
}
export default ErrorBoundary;