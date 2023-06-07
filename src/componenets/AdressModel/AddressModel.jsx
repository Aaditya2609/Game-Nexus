import React, { useState } from 'react'
import "./Address.css"


function AddressModel({ showAddressModel, onClose,address,setAddress }) {
    const [tempAddress, setTempAddress] = useState({
        tempName: "",
        tempPhoneNo: 0,
        tempAddress: "",
        tempCity: "",
        tempState: "",
        tempCountry: "",
        tempPincode: 0,
      });

      const handleChange = (e) => {
        setTempAddress({
          ...tempAddress,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit=()=>{
        const newAddress=[...address,tempAddress]
        setAddress(newAddress)
        onClose();
        const localAddress=JSON.stringify(newAddress)
        localStorage.setItem("userAddress",localAddress)
      }
    return (
        <div className='Address-container' onClick={() => onClose()}>
            <div className='Address' onClick={(e) => e.stopPropagation()}>
                <input className='Address-Form-Input UserName' placeholder='Name' name="tempName" onChange={handleChange} />
                <input className='Address-Form-Input number' placeholder='Phone Number' type="number" name="tempPhoneNo" onChange={handleChange} />
                <input className='Address-Form-Input address' placeholder='Address'name="tempAddress" onChange={handleChange} />
                <input className='Address-Form-Input city' placeholder='City'name="tempCity" onChange={handleChange} />
                <input className='Address-Form-Input state' placeholder='State'name="tempState" onChange={handleChange} />
                <input className='Address-Form-Input country' placeholder='Country' name="tempCountry" onChange={handleChange} />
                <input className='Address-Form-Input pincode' placeholder='PinCode' type="number" name="tempPincode" onChange={handleChange} />
                <button className='Address-Form-Submit' onClick={handleSubmit}>Submit</button>
                <button className='Address-Form-Cancel' onClick={()=>onClose()}>Cancel</button>

            </div>
        </div>
    )
}

export default AddressModel