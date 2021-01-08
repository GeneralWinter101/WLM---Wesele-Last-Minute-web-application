import React, {useState} from 'react';
import './Znajdz.css';
import data from './data.js';
import Box from './Box.js';


export default function Znajdz() {
	const [filteredObiekt, setFilteredObiekt] = useState([]);
	const [date, setDate] = useState([]);
	const [guest, setGuest] = useState('50');
	const [price, setPrice] = useState('100');

  const filterObiekt = function (event) {
	  event.preventDefault();
	  console.log(guest)
	const when = data.filter((obiekt) => obiekt.available === date);
	const prods = data.filter((obiekt) => obiekt.guests.min >= guest && obiekt.guests.max <= guest);
	const money = data.filter((obiekt) => obiekt.price >= price)
	console.log(prods);
	setFilteredObiekt(prods, when, money);
  };
  
	return (
		<div className="search-bar">
			<form className="search-form">
				<input className="search-field" type="date" placeholder="data..." onChange={(e)=>setDate(e.target.value)}/>
				<div className="select">
					<select type="number" id="guest-select" onChange={(e)=>setGuest(e.target.value)}>
						<option value="liczba">liczba gości...</option>
						<option value={5}>5 - 20</option>
						<option value={21}>21 - 50</option>
						<option value={51}>51 - 300</option>
						<option value={301}>300+ </option>
					</select>
					<select id="price-select" type="number" onChange={(e)=>setPrice(e.target.value)}>
						<option value="cena">cena/os. ...</option>
						<option value={100}>poniżej 200PLN</option>
						<option value={201}>200 - 300PLN</option>
						<option value={302}>301 - 400PLN</option>
						<option value={401}>powyżej 400PLN</option>
					</select>
					</div>
				
				<input className="search-field" type="submit" value="Znajdź" onSubmit={(event) => filterObiekt(event)}></input>
			</form>
			{filteredObiekt.map((obj) => 
		<div>
			<Box obiekt={obj}/>
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