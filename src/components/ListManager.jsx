var React = require('react');
var List = require('./List.jsx'); 

var ListManager = React.createClass({
  getInitialState: function () {
    return {items: [], newItemText: '', newItemCount: 1}; 
  },
  handleSubmit: function(ev) {
    ev.preventDefault();

    var currentItems = this.state.items;
    
    var dummy = [];
    dummy.push(this.state.newItemText);
    dummy.push(this.state.newItemCount);
    
    currentItems.push(dummy);

    this.setState({items: currentItems, newItemText: '', newItemCount: 1});
  },
  onChangeText: function(ev) {
    this.setState({newItemText: ev.target.value});
  },
  onChangeCount: function(ev) {
    this.setState({newItemCount: ev.target.value});
  },
  render: function() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChangeText} value={this.state.newItemText} />
          <input onChange={this.onChangeCount} value={this.state.newItemCount} />
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
});

module.exports = ListManager;