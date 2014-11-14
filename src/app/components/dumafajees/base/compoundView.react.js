var React = require('react');

var CompoundView = React.createClass({

  componentDidMount: function() {
    DumafajeeStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    DumafajeeStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var childDumafajees = this.state.items.map(function(item) {
      if (item.type === 'basic'){
        return (
          <baseView/>
        );
      } else {
        return (
          <compoundView/>
        )
      }
    }, this);
    var unread =
      this.state.unreadCount === 0 ?
      null :
      <span>Unread threads: {this.state.unreadCount}</span>;
    return (
      <div className="thread-section">
        <div className="thread-count">
          {unread}
        </div>
        <ul className="thread-list">
          {threadListItems}
          </ul>
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the stores
   */
  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = CompoundView;