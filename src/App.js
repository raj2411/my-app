import React, {Component} from 'react';
import CardList from './CardList';
import ErrorBoundary from './ErrorBoundary';
import './App.css';
import Scroll from './Scroll';
import SearchBox from './SearchBox';




class App extends Component{
	
	constructor() {
		super();
		this.state = {
			users : [],
			searchField: ''
		}
		console.log("1. This is the constructor life cycle hook that runs first");
	}
	
	componentDidMount(){
		console.log("4. This is the constructor life cycle hook that runs fourth");

		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			return response.json();
		}).then(users=>{
			this.setState({users:users});	
		})

		//this.setState({users:users});
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value});
		console.log(event.target.value);
	}
	render(){
			const {users, searchField} = this.state;
			console.log("3. This is the constructor life cycle hook that runs third");
			const filterUsers = users.filter(user =>{
				return user.name.toLowerCase().includes(searchField.toLowerCase());
			})

			if(users.length===0){
				return <h1> Loading </h1>
			}
			else{
				return (
					<div className ='tc'>
						<h1 className="f1"> First React App </h1>
						<SearchBox searchChange={this.onSearchChange}/>
						<Scroll>
							<CardList users={filterUsers} />
						</Scroll>
					</div>
				);
			}
		}
	}
export default App;