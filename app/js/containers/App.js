import React from 'react';
import {connect} from 'react-redux';
import {fetchGames} from '../actions/GameActions';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.fetchGames(123456);
    }


    render() {
        const {games} = this.props;
        let gamesFormat = games.toString();
        return (
            <div>
                <button onClick={this.handleClick}>Get games</button>
                {gamesFormat}
            </div>
        );
    }
}

App.propTypes = {
    games: React.PropTypes.array.isRequired,
    fetchGames: React.PropTypes.func.isRequired
};

function select(state) {
    return {
        games: state.games
    };
}

export default connect(select, {
    fetchGames
})(App);
