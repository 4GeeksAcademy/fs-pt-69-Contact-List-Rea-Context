const getState = ({ getStore, setStore, getActions }) => {
	
	return {

		//store Armazena la lista de contactos
		store: {
			agenda: "EIAHRJAY",
			listContacts: [],
			//Your data structures, A.K.A Entities
		},

		//actions Atualiza el store con sus funciones
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()

			//Obteniendo agenda
			getContacts: async () => {
				try {
					const agendaName = getStore().agenda;
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts`);
					if(response.status === 404){
						
						await getActions().createAgenda()
					}
					if (!response.ok) {
						throw new Error('Error en la solicitud: ' + response.statusText);
					}

					const data = await response.json();
					setStore({ contacts: data.contacts});
					
					//setStore({ listContacts: data });
				} catch (error) {
					console.error(error);
				}
			},
			
			createAgenda: async () => {
				const agendaName = getStore().agenda;
				try{
					await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}`,{
						method: "POST",
					});

				}catch(error){
					console.error(error)
				}
			},
			
			//Creando contact
			 createOneContact: async (addContacts) => {
			 	try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/EIAHRJAY/contacts", {
						method: "POST",
						body: JSON.stringify({
						full_name: `${addContacts.name}`,
							email: `${addContacts.email}`,
							agenda_slug: `${addContacts.agenda_slug}`,
							address: `${addContacts.address}`,
		 				phone: `${addContacts.phone}`
						}),
						headers: {
							"Content-Type": "application/json"
					}
					});

			 		if (!response.ok) {
			 			throw new Error('Error en la solicitud: ' + response.statusText);
				}

					const data = await response.json();
			 		console.log(data);
				} catch (error) {
					console.error(error);
				}
			 },


			//Borrando conatct
			// deleteOneContact: async (id) => {
			// 	try {
			// 		const response = await fetch(`https://playground.4geeks.com/contact/agendas/EIAHRJAY/contacts/${id}`, {
			// 			method: "DELETE"
			// 		});

			// 		if (!response.ok) {
			// 			throw new Error('Error en la solicitud: ' + response.statusText);
			// 		}

			// 		const data = await response.json();
			// 		console.log(data);
			// 		getActions().getAllAgenda();
			// 	} catch (error) {
			// 		console.error(error);
			// 	}
			// },


			// Atualizando contacto
			// updateOneContact: async (id, data) => {
			// 	try {
			// 		const response = await fetch(`https://playground.4geeks.com/contact/agendas/EIAHRJAY/contacts/${id}`, {
			// 			method: "PUT",
			// 			body: JSON.stringify({
			// 				full_name: `${data.name}`,
			// 				email: `${data.email}`,
			// 				agenda_slug: `${data.agenda_slug}`,
			// 				address: `${data.address}`,
			// 				phone: `${data.phone}`
			// 			}),
			// 			headers: {
			// 				"Content-Type": "application/json"
			// 			}
			// 		});

			// 		if (!response.ok) {
			// 			throw new Error('Error en la solicitud: ' + response.statusText);
			// 		}

			// 		const updatedData = await response.json();
			// 		console.log(updatedData);
					
			// 		getActions().getAllAgenda(); // vulve obtener la lista para atulizar el store
				
			// 	} catch (error) {
			// 		console.error(error);
			// 	}
			// }
		}
	};
};

export default getState;
