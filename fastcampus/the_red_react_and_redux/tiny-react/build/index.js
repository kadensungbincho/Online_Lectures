/* @jsx createElement */
import { createElement, render, Component } from './react.js';

class YourTitle extends Component {
  render() {
    return createElement("p", null, "I want to be a title");
  }

}

function Title(props) {
  return createElement("div", null, createElement("h2", null, "really works?"), createElement(YourTitle, null), createElement("p", null, "want to check it works"));
}

render(createElement(Title, null), document.querySelector('#root'));