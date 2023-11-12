import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIconWhite from '../assets/icons/dashboard-white.svg';
import BudgetIconWhite from '../assets/icons/budget-white.svg';
import SettingsIconWhite from '../assets/icons/settings-white.svg';
import TransactionIconWhite from '../assets/icons/transaction-white.svg';
import AccountIconWhite from '../assets/icons/account-white.svg';

const SidebarItem: React.FC<{ icon: string; route: string; name: string }> = ({ icon, route, name }) => (
	<li>
		<Link to={route} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
			<img src={icon} alt={name} className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
			<span className="ml-3">{name}</span>
		</Link>
	</li>
);

const Routes = [
	{
		name: "Dashboard",
		icon: DashboardIconWhite,
		route: "/app/dashboard"
	},
	{
		name: "Transactions",
		icon: TransactionIconWhite,
		route: "/app/transactions"
	},
	{
		name: "Budgets",
		icon: BudgetIconWhite,
		route: "/app/budgets"
	},
	{
		name: "Accounts",
		icon: AccountIconWhite,
		route: "/app/accounts"
	},
	{
		name: "Settings",
		icon: SettingsIconWhite,
		route: "/app/settings"
	}
];

const Sidebar: React.FC = () => (
	<aside
		id="default-sidebar"
		className="z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
		aria-label="Sidebar"
	>
		<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
			<ul className="space-y-2 font-medium">
				{Routes.map((route) => (
					<SidebarItem key={route.name} {...route} />
				))}
			</ul>
		</div>
	</aside>
);

export default Sidebar;
