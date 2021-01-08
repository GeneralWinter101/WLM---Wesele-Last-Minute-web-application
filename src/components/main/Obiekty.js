import React from "react";
import './data.js';
import Box from './Box.js';

const Obiekty = props => {
	return (
		<>
	<h1>Miejsca na Twoje wesele</h1>
	<div>
		{props.data.map((obiekt, index) => <Box key={index} obiekt={obiekt}/>)}
	</div>
	</>
	)
}

export default Obiekty;