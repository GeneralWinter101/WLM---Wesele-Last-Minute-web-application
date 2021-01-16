import React from 'react';
import './contactform.css';

const ContactForm = () => {
	return (
		<>
		<div className="both-forms">
			<form className="form-user ">
				<div className="form-container">
					<label for="purpose" className="form-input">Szukasz konkretnej daty?
				</label>
				<input type="text" placeholder="Twoje imię" className="form-input"></input>
				<input type="date" placeholder="data..." className="form-input"></input>
				<input type="email" placeholder="Twój email" className="form-input"></input>
				<textarea placeholder="Powiedz nam czego szukasz" className="form-text form-input" ></textarea>
				</div>
			
			</form>
			<form className="form-venue ">
				<div className="form-container">
					<label for="purpose" className="form-input">Szukasz konkretnej daty?
				</label>
				<input type="text" placeholder="Twoje imię" className="form-input"></input>
				<input type="date" placeholder="data..." className="form-input"></input>
				<input type="email" placeholder="Twój email" className="form-input"></input>
				<textarea placeholder="Powiedz nam czego szukasz" className="form-text form-input" ></textarea>
				</div>
			
			</form>
		</div>
		</>
	)
}

export default ContactForm;	