import React, {Component} from 'react';

class Rank extends Component {
    render() {
        return(
            <div>
                <div className="white f3">
                    {'Bunty your current rank is...'}
                </div>
                <div className="white f1">
                    {'#1'}
                </div>
            </div>
        );
    }
}

export default Rank;