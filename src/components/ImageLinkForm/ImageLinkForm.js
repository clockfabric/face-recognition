import React, { Component } from 'react';
import './ImageLinkForm.css';

class ImageLinkForm extends Component {
    render() {
        return (
            <div>
                <p className="f3">
                    {'This magic brain will detect faces in your pictures'}
                </p>
                <div className="center">
                    <div className="form center pa4 br3 shadow-5">
                        <input className="f4 pa2 w-70 center h-20p" type="text" onChange={this.props.onInputChange}/>
                        <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={this.props.onButtonSubmit}>Detect</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageLinkForm;