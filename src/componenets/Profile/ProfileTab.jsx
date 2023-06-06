import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext"
import AddressModel from "../AdressModel/AddressModel";

export function ProfileTab() {
    const [showAddressModel, setShowAddressModel] = useState(false);
    const [address,setAddress]=useState([]);
    const { stateAuth } = useAuth();

    return (
        <div>
            <div>
                <h2 onClick={()=>setShowAddressModel(true)}>
                    User Details
                </h2>
                <p>
                    User Name: {stateAuth.userDetails[0]?.firstName} {stateAuth.userDetails[0]?.lastName}
                </p>
                <p>
                    Email: {stateAuth.userDetails[0]?.email}
                </p>
            </div>
            <div>
                <h1>Saved Addresses</h1>
                {address&&
                    address.map(item=><div>
                        <p>{item.tempName}</p>
                        <p>{item.tempAddress}, {item.tempCity}, {item.tempState}, {item.tempCountry}, {item.tempPincode}</p>
                        <p>Phone:{item.tempPhoneNo}</p>
                    </div>
                    )
                }
            </div>
            {showAddressModel&&<AddressModel showAddressModel={showAddressModel} onClose={()=>setShowAddressModel(false)} address={address} setAddress={setAddress}/>}
           
        </div>
    )
}