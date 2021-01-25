import React, { useState } from 'react';
import './Znajdz.css';
import data from './data.js';
// import Box from './Box.js';
import FilteredBox from './FilteredBox.js';


export default function Znajdz() {
	const [filteredObiekt, setFilteredObiekt] = useState([]);
	const [date, setDate] = useState([]);
	const [guestMin, setGuestMin] = useState(0);
	const [guestMax, setGuestMax] = useState(0);
	const [price, setPrice] = useState('100');

	const filterObiekt = function (e) {
		e.preventDefault();
		const filtered = data.filter(el => {
			if ((parseInt(guestMin) >= el.guests.min &&
				parseInt(guestMin) <= el.guests.max) ||
				(parseInt(guestMax) >= el.guests.min &&
					parseInt(guestMax) <= el.guests.max)
			) {
				return el;
			}
			if (parseInt(price.split('-')[0]) <= el.price || parseInt(price.split('-')[1]) >= el.price) {
				return el.price;
			}
			if (parseInt(date) <= el.available || parseInt(date) >= el.available) {
				return el.available;
			}
			return filtered;
		});
		setFilteredObiekt(filtered);
	};

	console.log(filterObiekt);
	// console.log(filtered);
	return (
		<div className="search-bar">
			<form className="search-form" onSubmit={(event) => filterObiekt(event)}>
				<input className="search-field" type="date" placeholder="data..." onChange={(e) => setDate(e.target.value)} />
				<div className="select">
					<input type="number" id="guest-select" onChange={(e) => setGuestMin(e.target.value)} />
					<input type="number" id="guest-select" onChange={(e) => setGuestMax(e.target.value)} />
					<select id="price-select" type="number" onChange={(e) => setPrice(e.target.value)}>
						<option value="cena">cena/os. ...</option>
						<option value={'0-199'}>poniżej 200PLN</option>
						<option value={'201-300'}>200 - 300PLN</option>
						<option value={'301-400'}>300 - 400PLN</option>
						<option value={'401-999'}>powyżej 400PLN</option>
					</select>
				</div>

				<input className="search-field" type="submit" value="Znajdź"></input>

			</form>
			{filteredObiekt.map((obj, id) => {
				return (
					<header className="App-header">
						<div key={id} obj={obj}>
							<FilteredBox
								image={obj.image} name={obj.name} available={obj.available} guests={obj.guests} opis={obj.opis}
							/>
						</div>
						<footer>Copyright © Wesele Last Minute</footer>
					</header>
				)
			}
			)}
		</div>
	);

};

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
//   };

// event.preventDefault();
	// console.log(guest, data);
	// const filters = data.filter((obiekt) => obiekt.available === date) && data.filter((obiekt) => {
	// 	return obiekt.guests.min >= parseInt(guest.split('-')[0]) && obiekt.guests.max <= parseInt(guest.split('-')[1])
	// 	&&
	// 	data.filter((obiekt) => {
	// 		return obiekt.price >= parseInt(price.split('-')[0]) && obiekt.price <= parseInt(price.split('-')[1]);
	// 	});
	// });
	// const when = data.filter((obiekt) => obiekt.available === date);
	// const prods = data.filter((obiekt) => {
	// 		return obiekt.guests.min >= parseInt(guest.split('-')[0]) && obiekt.guests.max <= parseInt(guest.split('-')[1]);
	// 	}); //parswint
	// const money = data.filter((obiekt) => {
	// 	return obiekt.price >= parseInt(price.split('-')[0]) && obiekt.price <= parseInt(price.split('-')[1]);
	// });

	// setFilteredObiekt(prods, when, money);