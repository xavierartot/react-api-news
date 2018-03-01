import React from 'react';
import NewSingle from './NewsSingle';

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news:  [],
    }
  }
  renderItems = () => {
    if (this.state.news) {
      return this.state.news.map( (item) => <NewSingle key={item.url} item={item} />);
    }
  };
  render() {
    if (this.props.search) {
      console.log(1);
      const url = `https://newsapi.org/v2/everything?q=${this.props.search}&apiKey=a48e707253534c0c91f20d599bfd33a2`;
      console.log(url);
      console.log(this.props.search);
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({
            news: data.articles
          });
        })
      .catch((err) => console.log(err));
    }
    return (
      <div className="row">
     {this.renderItems()}
      </div>
    );
  }
}

