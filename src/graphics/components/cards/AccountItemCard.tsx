import DeatilsIconWhite from "../../../graphics/assets/icons/deatils-icon.svg"

interface Account {
 id: number,
 name: string,
 amount: string,
 notes?: string,
 Icon?: string,
 openAccountDetails: (id: number) => void
}

function AccountItemCard({ id, name, amount, Icon, openAccountDetails }: Account) {
 return (
  <li key={id} className="p-4 flex flex-col shadow-lg rounded-sm cursor-pointer hover:shadow-xl min-w-fit">
   <h5>{name}</h5>
   <div className="flex gap-8 mt-4 justify-between">
    <h2>{amount}</h2>
    <div>{Icon}</div>
   </div>
   <div className="mt-10">
    <img className="float-right cursor-pointer" src={DeatilsIconWhite} width={20} height={20} onClick={() => openAccountDetails(id)} />
   </div>
  </li>
 )
}

export default AccountItemCard