import React, { Component } from 'react';  
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  componentWillMount() {
    axios.get('http://www.splashbase.co/api/v1/images/latest')
    .then(response => this.setState({ images: response.data.images }));
  }

  render() {
    return (
      <div>
        <ImageList images={this.state.images} />
      </div>
    );  
  }
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('container'));
});
