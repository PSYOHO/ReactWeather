var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

// funkcje strzalkowe mozna uzyc jezeli jedyne co jest w klasie to funkcja render

var About = (props) => {
  return (
    <h3>About Component</h3>
  )
};

module.exports = About;
