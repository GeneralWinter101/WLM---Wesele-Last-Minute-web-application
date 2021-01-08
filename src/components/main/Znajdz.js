import React from 'react';
import './Znajdz.css';
import data from './data.js';
import Box from './Box.js';


// function display(e, data) {
// 	let val = e.target.value;
// 	console.log(val);
// 	let searched = data.filter(obiekt => obiekt.available() === val );
// 	display(searched);
// 	console.log(data);	
// }

export default function Znajdz() {
	const [filteredObiekt, setFilteredObiekt] = useState([]);

  const filterObiekt = function (event) {
    const prods = data.filter((obiekt) => obiekt.available === event.target.value || obiekt.guests === event.target.value || obiekt.price === event.target.value);
	console.log(prods);
	setFilteredObiekt(prods);
  };
  
	
	return (
		<div className="search-bar">
			<form className="search-form" onSubmit={(event) => filterObiekt(event)}>
				<input className="search-field" type="date" placeholder="data..."/>
				<div className="select">
					<select type="number" id="guest-select">
						<option value="liczba">liczba gości...</option>
						<option value="guests-least">5 - 20</option>
						<option value="guests-more">21 - 50</option>
						<option value="guests-many">51 - 300</option>
						<option value="guests-most">300+ </option>
					</select>
					<select id="price-select" type="number">
						<option value="cena">cena/os. ...</option>
						<option value="price-least">poniżej 200PLN</option>
						<option value="price-more">200 - 300PLN</option>
						<option value="price-many">301 - 400PLN</option>
						<option value="price-most">powyżej 401PLN</option>
					</select>
					</div>
				
				<input className="search-field" type="submit" value="Znajdź"></input>
			</form>
			{filteredObiekt.map((obj) => 
		<div>
			<Box obj={obj}/>
		</div>)}
		</div>
	);
}

// export default function App() {
// 	const [filteredProducts, setFilteredProducts] = useState([]);
  
// 	const filterProducts = function (event) {
// 	  const prods = products.filter((p) => p.category === event.target.value);
// 	  console.log(prods);
  
// 	  setFilteredProducts(prods);
// 	};
  
// 	return (
// 	  <div className="App">
// 		<h1>Hello CodeSandbox</h1>
// 		<h2>Start editing to see some magic happen!</h2>
  
// 		<select onChange={(event) => filterProducts(event)}>
// 		  <option value="">-- Select --</option>
// 		  {categories.map((c) => (
// 			<option key={c} value={c}>
// 			  {c}
// 			</option>
// 		  ))}
// 		</select>
  
// 		<ul>
// 		  {filteredProducts.map((p) => (
// 			<li key={p.id}>{p.name}</li>
// 		  ))}
// 		</ul>
// 	  </div>
// 	);
//   }