import React, {Component} from 'react';
import './App.css';
import Widget from './components/widget';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            suggestions: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});

        axios.get('UserData.json')
            .then(response => {
                let massagedSuggestions = [];

                response.data.forEach(person => {
                    massagedSuggestions.push(`${person.name} (${person.username})`);
                });

                this.setState({
                    suggestions: massagedSuggestions,
                    isLoading: false
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        const {suggestions, isLoading} = this.state;
        
        return (
            <div className="App">
                <h1>Comments</h1>
                <Widget
                    suggestions={suggestions}
                    loading={isLoading}
                />
                <button>Add Comment</button>
            </div>
        )
    }

}

export default App;
