import { useEffect } from 'react';

const STORAGE_KEY = 'crm_clients';

export function useClients() {
	const [clients, setClients] = useState([]);

	// LOAD FROM LOCALSTORAGE ON MOUNT
	useEffect(() => {
		const saved = localStorage.getItem(STORAGE_KEY);

		if (saved) {
			try {
				setClients(JSON.parse(saved));
			} catch {
				console.error('Failed to parse clients');
			}
		}
	}, []);

	// SAVE TO LOCAL STORAGE WHENEVER CLIENTS CHANGE
	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
	}, [clients]);

	const addClient = (client) => {
		setClients((prev) => [
			...prev,
			{ ...client, id: Date.now().toString() },
		]);
	};

	const updateClient = (id, updated) => {
		setClients((prev) =>
			prev.map((c) => (c.id === id ? { ...c, ...updated } : c)),
		);
	};

	const deleteClient = (id) => {
		setClients((prev) => prev.filter((c) => c.id !== id));
	};

	return { clients, addClient, updateClient, deleteClient };
}
