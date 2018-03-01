import React from 'react';
import NewSingle from './NewsSingle';

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news:  [],
    }
  }
  componentDidMount() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a48e707253534c0c91f20d599bfd33a2';
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
  renderItems = () => {
    return this.state.news.map( (item) => {
      return <NewSingle key={item.url} item={item} />;
    });
  };
  render() {
    return (
      <div className="row">
     {this.renderItems()}
      </div>
    );
  }
}

