import React from "react";

class TodoListItem extends React.Component {

  render() {
    console.log(this.props);
    return (
      <li className="list-group-item ">
        <div className="row" >
          <div className="col-md-3">
            <img width="50%" src={`${this.props.item.thumbnail}`}/>
          </div>
          <div className="col-md-9">
            <p>{this.props.item.message}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
