import React  from 'react'
import {render} from 'react-dom'
import Menu from './components/Menu'
import data from '../data/saints'

window.React = React

render(
	<Menu saints={data} />,
	document.querySelector(".react-container")
)