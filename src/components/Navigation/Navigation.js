import React, {Component} from 'react';

class Navigation extends Component {
    render() {
        let signOutFlag = '';
        if(this.props.isSignedIn) {
            signOutFlag = 'Sign Out';
        } else {
            signOutFlag = '';
        }
        return(
            <nav id="navigation">
                <p className="f3 link dim black underline pa3 pointer" onClick={() => this.props.onRouteChange('signin')}>{signOutFlag}</p>
            </nav>
        );
    }
}

export default Navigation;