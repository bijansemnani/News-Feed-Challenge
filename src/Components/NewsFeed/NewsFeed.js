import React from "react";
import NewsFeedItem from "../NewsFeedItem";

class NewsFeed extends React.Component {
  state = {type: "all"};

  filterNews = (newsType) => {
    console.log(newsType);
    this.setState({type: newsType});
  };

  render() {
    let that = this;
    var items = this.props.items.map(function (item, index) {
      console.log(that);
      if(item.type === that.state.type){
        return (
            <NewsFeedItem
              key={index}
              item={item}
              index={index}
            />);
        } else if(that.state.type === "all"){
          return (
              <NewsFeedItem
                key={index}
                item={item}
                index={index}
              />);
      }
    });
    return (
      <div>
        <div className="row">


          <div className="col-md-2">
            <button onClick={()=>{
                this.filterNews("trending-video");
              }}>Trending Videos</button>
          </div>
          <div className="col-md-2">
            <button onClick={()=>{
                this.filterNews("milestone-subs");
              }}>Milestone Subs</button>
          </div>
          <div className="col-md-2">
            <button onClick={()=>{
                this.filterNews("stats-trend");
              }}>Stats Trend</button>
          </div>
          <div className="col-md-2">
            <button onClick={()=>{
                this.filterNews("channel-overlap");
              }}>Channel Overlap</button>
          </div>
          <div className="col-md-2">
            <button onClick={()=>{
                this.filterNews("video-topics");
              }}>Video Topics</button>
          </div>
          <div className="col-md-2">
            <button onClick={()=>{
                this.filterNews("delta-subs");
              }}>Delta Subs</button>
          </div>
        </div>
        <ul className="list-group"> {items} </ul>
      </div>


  );
  }
}

export default NewsFeed;
