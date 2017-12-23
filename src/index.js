import React from 'react'
import Title from './lib'
import { render } from 'react-dom'

class App extends React.Component {
  render () {
    return (
      <div>
        {/* H1 diplay */}
        <h1>Page title</h1>

        {/* Page title */}
        <Title value={0} />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
