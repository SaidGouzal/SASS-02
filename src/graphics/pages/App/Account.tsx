import React, { useState } from 'react';
import AccountItemCard from '../../components/cards/AccountItemCard';
import Modal from '../../components/modals/Modal';
import EditableTextInput from '../../components/inputs/EditableTextInput';
import EditableTextAreaInput from '../../components/inputs/EditableTextAreaInput';
import { AccountInterface } from '../../../utils/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { editAccount } from '../../../store/reducers/accountsSlice';
import { RootState } from '../../../store/store';

const Account: React.FC = () => {
	const dispatch = useDispatch();

	const [openDetailsModal, setOpenDetailsModal] = useState(false);
	const [selectedAccount, setSelectedAccount] = useState<AccountInterface>({
		id: -1,
		name: '',
		amount: '',
		notes: ''
	});

	const list = useSelector((state: RootState) => state.accounts.list);

	const openAccountDetails = (accountId: number) => {
		const search = list.find((acc: AccountInterface) => acc.id === accountId);
		if (search) {
			setSelectedAccount(search);
			setOpenDetailsModal(true);
		}
	};

	const handleValueChange = (field: keyof AccountInterface, newValue: string) => {
		if (selectedAccount) {
			setSelectedAccount((prevAccount) => ({
				...prevAccount!,
				[field]: newValue,
			}));
		}
	};

	const handleSave = () => {
		dispatch(editAccount(selectedAccount));
		setOpenDetailsModal(false);
	};

	return (
		<div>
			<h1 className="text-xl">Accounts</h1>
			<div className="p-4">
				<ul className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
					{list.map(({ id, name, amount, Icon }: AccountInterface) => (
						<AccountItemCard
							key={id}
							id={id}
							name={name}
							amount={amount} // Removed parseFloat and toFixed
							Icon={Icon}
							openAccountDetails={() => openAccountDetails(id)}
						/>
					))}
				</ul>
				{selectedAccount && (
					<Modal
						title={selectedAccount.name}
						showModal={openDetailsModal}
						setShowModal={setOpenDetailsModal}
						onSave={handleSave}
					>
						<div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3">
							<div>
								<label className="text-md text-sm flex mb-1 font-light items-center">Name: </label>
								<EditableTextInput
									value={selectedAccount.name}
									setValue={(newValue) => handleValueChange('name', newValue)}
									editMode={true}
								/>
							</div>
							<div>
								<label className="text-md w-1/2 text-sm flex mb-1 font-light items-center">Amount: </label>
								<EditableTextInput
									value={selectedAccount.amount}
									setValue={(newValue) => handleValueChange('amount', newValue)}
									editMode={true}
								/>
								{' '}
								{selectedAccount.currency && (
									<span>{selectedAccount.currency}</span>
								)}
							</div>
						</div>
						<div className="mt-6">
							<div>
								<label className="text-md text-sm flex mb-1 font-light items-center">Notes: </label>
								{/* Removed unnecessary null check for selectedAccount.notes */}
								<EditableTextAreaInput
									value={selectedAccount.notes || ''}
									setValue={(newValue) => handleValueChange('notes', newValue)}
									editMode={true}
								/>
							</div>
						</div>
					</Modal>
				)}
			</div>
		</div>
	);
};

export default Account;
