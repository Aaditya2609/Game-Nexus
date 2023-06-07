import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext"
import AddressModel from "../AdressModel/AddressModel";
import './styles.css'

export function ProfileTab() {
    const [showAddressModel, setShowAddressModel] = useState(false);
    const localAddress=JSON.parse(localStorage.getItem("userAddress"));
    const setaddress=localAddress?localAddress:[]
    const [address,setAddress]=useState(setaddress);
    const { stateAuth } = useAuth();

    const handleDeleteAddress = (item) => {
        const updatedAddress = address.filter(addressItem => addressItem.tempName !== item.tempName);
        setAddress(updatedAddress);
        const localAddress=JSON.stringify(updatedAddress)
        localStorage.setItem("userAddress",localAddress)
    }

    return (
        <div className="Profile-container">
        <div className="Profile">
            <div className="User-Details">
                <h2 className="user-details-heading" >
                    User Details
                </h2>
                <p className="user-details-text">
                    Username: {stateAuth.userDetails[0]?.firstName} {stateAuth.userDetails[0]?.lastName}
                </p>
                <p className="user-details-text">
                    Email: {stateAuth.userDetails[0]?.email}
                </p>
            </div>
            <div className="address-container">
                <h1 className="address-container-header">Saved Addresses</h1>
                <div>
                <button id="address-card-add-button" onClick={()=>setShowAddressModel(true)}>Add New Address</button>
                </div>
                {address&&
                    address.map(item=><div className="address-card" key={item.tempName}>
                        <p id="address-card-name">{item.tempName}</p>
                        <p>{item.tempAddress}, {item.tempCity}, {item.tempState}, {item.tempCountry}, {item.tempPincode}</p>
                        <p>Phone:{item.tempPhoneNo}</p>
                        <div>
                        <button id="address-card-delete-button" onClick={() => handleDeleteAddress(item)}>Delete</button>
                        </div>
                    </div>
                    )
                }
            </div>
            {showAddressModel&&<AddressModel showAddressModel={showAddressModel} onClose={()=>setShowAddressModel(false)} address={address} setAddress={setAddress}/>}
           
        </div>
        </div>
    )
}