# React Title

> Cool react title element to change to page title

## Usage

```js
import React from 'react'
import Title from 'react-title'
import { render } from 'react-dom'

class App extends React.Component {
  render () {
    return (
      <div>
        {/* H1 diplay */}
        <h1>Page title</h1>

        {/* Page title */}
        <Title>Page title</Title>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
```