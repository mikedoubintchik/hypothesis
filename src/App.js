import React, {Component} from 'react';
import './App.css';
import Widget from './components/widget';
import getSuggestions from './services/userData'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            suggestions: [],
            isLoading: false,
            error: ''
        }
    }

    async componentDidMount() {
        this.setState({
            isLoading: true
        });

        try {
            const response = await getSuggestions();

            let massagedSuggestions = [];

            response.data.forEach(person => {
                massagedSuggestions.push(`${person.name} (${person.username})`);
            });

            this.setState({
                suggestions: massagedSuggestions,
                isLoading: false
            });
        } catch (error) {
            this.setState({
                isLoading: false,
                error: error
            });
        }
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
