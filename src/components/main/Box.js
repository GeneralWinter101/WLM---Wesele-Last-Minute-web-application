import React from "react";
import './box.css';

const Box = props => {
		return (
			<div className="box-container">
				<img className="box-venue-image" alt="Miejsce na Twoje wesele" src={props.obiekt.image}/>
				<h2 className="box-venue-title">
					{props.obiekt.name}
					</h2>
				<div className="box-dates">Dostępność: 
					<select className="box-dates-select">
					<option className="box-dates-check" value="0">Sprawdź</option>
					{props.obiekt.available.map(date => 
						<option className="box-dates-option" value={date}>{date}</option>
					)}
					</select>				
				</div>
				<div className="box-guest-price-container">
					<h4 className="box-guest-number">
					{props.obiekt.guests} osób
						</h4>
					<h4 className="box-price">
					{props.obiekt.price} PLN/os.
						</h4>
				</div>
				<p className="box-venue-description">
					{props.obiekt.opis}
					</p>
			</div>
			
			)
	}

export default Box;