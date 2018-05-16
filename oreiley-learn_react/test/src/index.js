import React from 'react'
import { render } from 'react-dom'
import Menu from './components/Menu'
import data from './data/recipes'
import registerServiceWorker from './registerServiceWorker';
window.React = React

render(
    <Menu recipes={data} />,
    document.getElementById("root")
)



// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
