import Layout from '../components/MyLayout.js';
import React from 'react';
import db from '../db';

class QuoteBox extends React.Component {
  constructor() {
    super();
    this.state = {
      current: {
        quote:
          "If you pour some music on whatever's wrong, it'll sure help out.",
        author: 'Levon Helm',
      },
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    console.log('component did mount!');
  }

  clickHandler() {
    console.log('clicked!');
    this.randomize(db.quotes);
    // console.log(this.state);
  }

  randomize(arr) {
    let index = Math.ceil(Math.random() * arr.length);
    console.log('index', index);
    let current = arr[index];
    this.setState({
      current: current,
    });
    console.log('new state is ', this.state);
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">
          <p>{this.state.current.quote}</p>
        </div>
        <div id="author">{this.state.current.author}</div>
        <button id="new-quote" onClick={this.clickHandler}>
          New Quote
        </button>
      </div>
    );
  }
}

export default () => (
  <Layout>
    <h1>thank u, next.js</h1>
    <QuoteBox />
  </Layout>
);
