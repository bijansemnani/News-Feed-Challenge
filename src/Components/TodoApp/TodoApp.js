import React from "react";
import moment from "moment";
import axios from "axios";
import NewsHeader from "../NewsHeader";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";
import Timer from "../Timer";

class TodoApp extends React.Component {
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

        {this.state.showTimer ? <Timer /> : null}
        <TodoList
          items={this.state.newsFeed}
        />

      </div>
    );
  }
}

export default TodoApp;
