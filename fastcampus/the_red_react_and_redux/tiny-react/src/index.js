/* @jsx createElement */
import { createElement, render, Component } from './react.js';

class YourTitle extends Component {
    render() {
        return (
            <p>I want to be a title</p>
        );
    }
}

function Title(props) {
    return (
        <div>
            <h2>really works?</h2>
            <YourTitle />
            <p>want to check it works</p>
        </div>
    
    );
}

render(<Title />, document.querySelector('#root'));