const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			listContacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getAllAgenda: () => {
				console.log("entramos");
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/velazcoCarlos")
					.then(response => response.json())
					.then(data => setStore({ listContacts: data }))
					.catch(error => console.log(error));
			},

			createOneContact: newContact => {
				fetch("https://playground.4geeks.com/apis/fake/contact", {
					method: "POST",
					body: JSON.stringify({
						full_name: `${newContact.name}`,
						email: `${newContact.email}`,
						agenda_slug: `${newContact.agenda_slug}`,
						address: `${newContact.address}`,
						phone: `${newContact.phone}`
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						console.log(response);
						return response.json();
					})
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},

			deleteOneContact: id => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "DELETE"

					// headers: {
					// 	"Content-Type": "application/json"
					// }
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						getActions().getAllAgenda();
					}) // .then(data => setStore({ listContacts: data }))
					.catch(error => console.log(error));
			},

			updateOneContact: (id, data) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "PUT",
					body: JSON.stringify({
						full_name: `${data.name}`,
						email: `${data.email}`,
						agenda_slug: `${data.agenda_slug}`,
						address: `${data.address}`,
						phone: `${data.phone}`
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						console.log(response);

						return response.json();
					})
					.then(data => {
						console.log(data);
						getActions().getAllAgenda();
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
