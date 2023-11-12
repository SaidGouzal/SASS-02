import { ReactNode } from 'react';
import Sidebar from '../components/SideBar';

const AppLayout = ({ children }: { children: ReactNode }) => (
	<div className="flex">
		<Sidebar />
		<div className="flex-grow p-4">
			{children}
		</div>
	</div>
);

export default AppLayout;
