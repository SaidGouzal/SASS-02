import React from 'react';
import SettingsItemCard from '../../components/cards/SettingsItemCard';

interface Setting {
 id: number,
 name: string,
 description: string,
 Icon: string,
}

const Settings: React.FC = () => {
 const settingsList: Array<Setting> = [
  { id: 1, name: 'Accounts', description: 'Keep track of your balanaces and see how your money progresses', Icon: '' },
  { id: 2, name: 'Categories', description: 'Create, edit or even remove any of your categories', Icon: '' },
  { id: 3, name: 'Recurring', description: '', Icon: '' },
  { id: 4, name: 'Passcode', description: '', Icon: '' },
  { id: 4, name: 'Reminders', description: '', Icon: '' },
  { id: 4, name: 'Export Data', description: '', Icon: '' },
  { id: 4, name: 'Contact', description: '', Icon: '' },
  { id: 4, name: 'Rest data', description: '', Icon: '' },
  { id: 5, name: 'FAQ', description: '', Icon: '' },
  { id: 5, name: 'Subscription', description: '', Icon: '' },
 ];

 return (
  <div>
   <h1 className='text-xl'>Accounts</h1>
   <div className="p-4">
    <ul className="grid grid-cols-4 gap-4">
     {settingsList.map(({ id, name, description, Icon }: Setting) => (
      <SettingsItemCard key={id} id={id} name={name} description={description} Icon={Icon} />
     ))}
    </ul>
   </div>
  </div>
 );
};

export default Settings;
