import React from "react";
import axios from "axios";
import NewsHeader from "../NewsHeader";
import NewsFeed from "../NewsFeed";

class NewsFeedApp extends React.Component {
  state = {newsFeed: []};
  setData = (data) => {

  }

  componentDidMount = () => {
    var self = this;
    axios.get(' https://cors-anywhere.herokuapp.com/https://assets.studio71.io/test/news_feed.json').then(
      function(response) {
        console.log(response.data.items);
        self.setState({newsFeed: response.data.items});
      }
    ).catch(function (error) {
      console.log(error);
    });
  }



  render() {
    return (
      <div id="main">
        <NewsHeader />
        <NewsFeed
          items={this.state.newsFeed}
        />

      </div>
    );
  }
}

export default NewsFeedApp;
