/** @jsx React.DOM */

'use strict';

var React = require('react');
var DumafajeeApp = require('./components/DumafajeeApp.react');
var DumafajeeUtil = require('./utilities/DumafajeeUtil');

DumafajeeUtil.getAllDumafajees();

React.render(
    /*jshint ignore:start */
    <DumafajeeApp/>,
    /*jshint ignore:end */
    document.getElementById('app')
);
