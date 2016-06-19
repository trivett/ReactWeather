var React = require('react');
var {Link} = require('react-router')

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>here are some example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brasil</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;
