import { useEffect } from 'react';

const STORAGE_KEY = 'crm_clients';

export function useClients() {
	const [clients, setClients] = useState([]);

	// LOAD FROM LOCALSTORAGE ON MOUNT
	useEffect(() => {
		const saved = localStorage.getItem(STORAGE_KEY);
	});
}
