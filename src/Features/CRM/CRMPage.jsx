import React, { useState } from 'react';
import useClients from './useClients';

export default function CRMPage() {
	const { clients, addClient, deleteClient } = useClients();
	const [name, setName] = useState('');

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold">Client Tracker (Mini-CRM)</h1>
			<div className="flex gap-2 mb-4">
				<input
					className="border px-3 py-2 rounded w-full"
					placeholder="Client name..."
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<button
					onClick={() => {
						if (!name.trim()) return;
						addClient({ name, status: 'lead' });
						setName('');
					}}
					className="bg-blue-600 text-white px-4 py-2 rounded"
				>
					Add
				</button>
			</div>

			<ul className="space-y-2">
				{clients.map((c) => (
					<li
						key={c.id}
						className="flex items-center justify-between border p-3 rounded"
					>
						<span>{c.name}</span>
						<button
							onClick={() => deleteClient(c.id)}
							className="text-sm text-red-500 hover:underline"
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
