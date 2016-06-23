var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
  render: function() {
    var createItem = function(text, index, count) {
      return (
        <ListItem key={index+text[0]} text={text[0]} count={text[1]} />
      );
    };

    return (<ul>{this.props.items.map(createItem)}</ul>);
  }
});

module.exports = List;