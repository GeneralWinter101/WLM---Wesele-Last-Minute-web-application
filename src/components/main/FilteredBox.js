import React from "react";

const FilteredBox = props => {
	<div className="box-container">
				<img className="box-venue-image" alt="Miejsce na Twoje wesele" src={props.obj.image}/>
				<h2 className="box-venue-title">
					{props.obj.name}
					</h2>
				<div className="box-dates">Dostępność: 
					<select className="box-dates-select">
					<option className="box-dates-check" value="0">Sprawdź</option>
					{props.obj.available.map(date => 
						<option className="box-dates-option" value={date}>{date}</option>
					)}
					</select>				
				</div>
				<div className="box-guest-price-container">
					<h4 className="box-guest-number">
					{props.obj.guests.min} - {props.obj.guests.max} osób
						</h4>
					<h4 className="box-price">
					{props.obj.price} PLN/os.
						</h4>
				</div>
				<p className="box-venue-description">
					{props.obj.opis}
					</p>
			</div>
			
}


export default FilteredBox;