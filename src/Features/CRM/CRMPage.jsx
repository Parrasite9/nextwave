import React, { useState } from 'react';
import useClients from './useClients';
import ClientForm from './ClientForm';

export default function CRMPage() {
	const { clients, addClient, updateClient, deleteClient } = useClients();
	const [editing, setEditing] = useState(null);

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold">Client Tracker (Mini-CRM)</h1>
			<div className="flex gap-2 mb-4">
				{/* <input
					className="border px-3 py-2 rounded w-full"
					placeholder="Client name..."
					value={name}
					onChange={(e) => setName(e.target.value)}
				/> */}

				<button
					onClick={() => setEditing({})}
					className="bg-blue-600 text-white px-4 py-2 rounded"
				>
					Add
				</button>
			</div>

			{editing && (
				<div className="border p-4 rounded bg-white">
					<h2 className="text-lg font-medium mb-2">
						{editing.id ? 'Edit Client' : 'New Client'}
					</h2>

					<ClientForm
						initialValues={editing.id ? editing : undefined}
						onSubmit={(values) => {
							if (editing.id) {
								updateClient(editing.id, values);
							} else {
								addClient(values);
							}
						}}
						onCancel={() => setEditing(null)}
					/>
				</div>
			)}

			<ul className="space-y-2">
				{clients.map((c) => (
					<li
						key={c.id}
						className="flex items-center justify-between border p-3 rounded"
					>
						<div>
							<div className="font-medium">{c.name}</div>
							{c.company && (
								<div className="text-sm text-gray-500">
									{c.company}
								</div>
							)}
							{c.email && (
								<div className="text-sm text-gray-500">
									{c.email}
								</div>
							)}
							{c.notes && (
								<div className="text-sm text-gray-700 mt-1">
									{c.notes}
								</div>
							)}

							<span className="inline-block mt-2 text-xs uppercase border px-2 py-0 5 rounded">
								{c.status}
							</span>
						</div>
						<div className="flex gap-2">
							<button
								onClick={() => setEditing(c)}
								className="border px-3 py-1.5 rounded"
							>
								Edit
							</button>

							<button
								onClick={() => deleteClient(c)}
								className="text-red-600 border px-3 py-1.5 rounded"
							>
								Delete
							</button>
						</div>
					</li>
				))}
				{clients.length === 0 && (
					<li className="text-sm text-gray-500">No Clients Yet.</li>
				)}
			</ul>
		</div>
	);
}
