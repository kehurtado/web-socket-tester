import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface QueryParams {
	[key: string]: string;
}

interface ConnectionState {
	id: string;
	url: string;
	namespace: string;
	queryParams: QueryParams;
	rooms: string[];
	eventListeners: string[];
}

interface FormData {
	serverUrl: string;
	namespace: string;
	queryParams: QueryParams;
}

interface SocketStore {
	connections: ConnectionState[];
	formData: FormData;
	addConnection: (connection: ConnectionState) => void;
	updateConnection: (id: string, updates: Partial<ConnectionState>) => void;
	removeConnection: (id: string) => void;
	updateFormData: (data: Partial<FormData>) => void;
	clearAll: () => void;
}

const initialState = {
	connections: [],
	formData: {
		serverUrl: 'http://localhost:3000',
		namespace: '/',
		queryParams: {},
	},
};

export const useSocketStore = create<SocketStore>()(
	persist(
		(set) => ({
			...initialState,
			addConnection: (connection) =>
				set((state) => ({
					connections: [...state.connections, connection],
				})),
			updateConnection: (id, updates) =>
				set((state) => ({
					connections: state.connections.map((conn) =>
						conn.id === id ? { ...conn, ...updates } : conn
					),
				})),
			removeConnection: (id) =>
				set((state) => ({
					connections: state.connections.filter((conn) => conn.id !== id),
				})),
			updateFormData: (data) =>
				set((state) => ({
					formData: { ...state.formData, ...data },
				})),
			clearAll: () => set(initialState),
		}),
		{
			name: 'socket-tester-storage',
		}
	)
);

