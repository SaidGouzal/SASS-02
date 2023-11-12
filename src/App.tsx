import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import AuthLayout from './graphics/layouts/AuthLayout';
import AppLayout from './graphics/layouts/AppLayout';
import { Login, Register } from './graphics/pages/Auth';
import { Dashboard, Transactions, Account, Budgets, Settings } from './graphics/pages/App';

const App: React.FC = () => {

	return (
		<Router>
			<Routes>
				<Route
					path="/auth/*"
					element={
						<AuthLayout>
							<Outlet />
						</AuthLayout>
					}
				>
					<Route index element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="*" element={<Navigate to="/auth/login" />} />
				</Route>
				<Route
					path="/app/*"
					element={
						<AppLayout>
							<Outlet />
						</AppLayout>
					}
				>
					<Route index path='dashboard' element={<Dashboard />} />
					<Route path="transactions" element={<Transactions />} />
					<Route path="accounts" element={<Account />} />
					<Route path="budgets" element={<Budgets />} />
					<Route path="settings" element={<Settings />} />
					<Route path="*" element={<Navigate to="/app/dashboard" />} />
				</Route>
				<Route path="/" element={<Navigate to="/app/dashboard" />} />
				<Route
					path="*"
					element={<Navigate to="/app/dashboard" replace />}
				/>
				<Route
					path="/app/*"
					element={<Navigate to="/app/dashboard" replace />}
				/>
				<Route
					path="/atuh/*"
					element={<Navigate to="/app/login" replace />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
