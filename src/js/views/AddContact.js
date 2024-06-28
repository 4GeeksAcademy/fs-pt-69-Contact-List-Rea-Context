import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddContact = () => {
	// const [inputData, setInputData] = useState();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const { actions } = useContext(Context);

	const handleCreateContact = e => {
		e.preventDefault();

		const data = {
			name: name,
			email: email,
			phone: phone,
			address: address
		};

		actions.createOneContact(data);

		setName("");
		setEmail("");
		setPhone("");
		setAddress("");
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onSubmit={handleCreateContact}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							value={name}
							className="form-control"
							placeholder="Full Name"
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							value={email}
							className="form-control"
							placeholder="Enter email"
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							value={phone}
							className="form-control"
							placeholder="Enter phone"
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							value={address}
							className="form-control"
							placeholder="Enter address"
							onChange={e => setAddress(e.target.value)}
						/>
					</div>
					<div className="mt-3">
						<button type="submit" className="btn btn-primary form-control">
							save
						</button>
					</div>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
