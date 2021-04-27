import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import {robots} from '../robots';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots : [],
			searchfield:''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield:event.target.value})
		
	}

	componentDidMount() {
		this.setState({robots: robots})
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if(this.state.robots.lenght===0) {
			return <h1>loading...</h1>
		}else {
			return(
				<div className='tc'>
					<h1 className='f1'>Sawniwna Chupapi Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
	
		}
			
	}
	
}

export default App;