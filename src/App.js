import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItems from './components/AddItems/AddItems';
class  App extends Component {
  state = {
    items : [
      {id: 1, name: 'ahmed', age: 22},
      {id: 2, name: 'mohamed', age: 23},
      {id: 3, name: 'sayed', age: 24}
    ]
  }
  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return id !== item.id
    })
      this.setState({
        items
      })
  }
  addItem = (item) => {
    let items = this.state.items;
    items.push(item);
    this.setState({
      items:items
    })
  }
  
  render() {
    return (
      <div className="App container">
        <h1 className='text-center'>Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItems addItem={this.addItem} />
      </div>
    );
  }
  
}

export default App;
