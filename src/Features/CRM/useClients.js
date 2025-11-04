import React, { useEffect, useState } from 'react';

export default function useClients() {
	const [clients, setClients] = useState([]);

	// LOAD CLIENTS FROM LOCALSTORAGE ON MOUNT
	useEffect(() => {
		const saved = localStorage.getItem('nextwave_clients');
		if (saved) setClients(JSON.parse(saved));
	}, []);

	// PERSIST TO LOCALSTORAGE WHENEVER CLIENTS CHANGE
	useEffect(() => {
		localStorage.setItem('nextwave_clients', JSON.stringify(clients));
	}, [clients]);

	// ADD A NEW CLIENT
	function addClient(client) {
		const newClient = {
			...client,
			id: Date.now().toString(),
			craetedAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};
		setClients((prev) => [...prev, newClient]);
	}

	// UPDATE AN EXISTING CLIENT
	function updateClient(id, updates) {
		setClients((prev) => {
			prev.map((c) =>
				c.id === id
					? {
							...c,
							...updates,
							updatedAt: new Date().toISOString(),
						}
					: c,
			);
		});
	}

	// DELETE A CLIENT
	function deleteClient(id) {
		setClients((prev) => prev.filter((c) => c.id !== id));
	}

	return { clients, addClient, updateClient, deleteClient };
}
