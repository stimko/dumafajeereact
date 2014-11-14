var React = require('react');

var DumafajeeApp = React.createClass({

  render: function() {
    return (
      <div>
        <DumafajeePanel/>
        <PropertiesPanel/>
      </div>
    );
  }
});

module.exports = DumafajeeApp;