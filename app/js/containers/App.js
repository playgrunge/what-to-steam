import React from 'react';
import {connect} from 'react-redux';
import {fetchGames} from '../actions/GameActions';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.fetchGames(this.refs.steamId.value);
    }

    render() {
        const {games} = this.props;
        let realGames;
        if (games.isFetching) {
            realGames = 'Loading';
        }else if (games.hasError) {
            realGames = 'Error';
        }else {
            realGames = games.items.toString();
        }
        return (
            <div>
                <h1>
                    What to steam
                </h1>

                <div>
                    <input ref="steamId" placeholder="Steam ID" style={{marginRight: 5}}></input>
                    <button onClick={this.handleClick}>Begin</button>
                </div>
                <div>
                    {realGames}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    games: React.PropTypes.object.isRequired,
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
