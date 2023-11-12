import AccountIcon from "../../assets/icons/account.svg"

interface Setting {
 id: number,
 name: string,
 description: string,
 Icon?: string,
}

function SettingsItemCard({ id, name, description }: Setting) {
 return (
  <li key={id} className="text-center justify-center items-center p-2 flex flex-col shadow-md rounded-sm cursor-pointer hover:shadow-xl">
   <img src={AccountIcon} alt="..." width={"50px"} height={"50px"} />
   <div className="gap-8 mt-4 justify-between">
    <h2>{name}</h2>
    <div>{description}</div>
   </div>
  </li>
 )
}

export default SettingsItemCard