var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id": 1, "name": "Ranga"}, {"id": 2, "name": "Rakesh"}, {"id": 3, "name": "Vineet"}];

var List = React.createClass({
  render: function() {
    var ListItems = ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.name} />;
    });

    return (<ul>{ListItems}</ul>);
  }
});

module.exports = List;