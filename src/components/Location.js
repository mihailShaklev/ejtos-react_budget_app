import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Form from 'react-bootstrap/Form';
const Location = () => {
  const {dispatch, currencyName } = useContext(AppContext);
    const changeLocation = (val, currencyName)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: {'val':val, 'currencyName':currencyName},
            })
    }
    
  return (
        <div className='alert alert-secondary'> Location {
    <div data-prefix="Currency(" data-suffix=")">
      <Form.Select name="Location" id="Location" style={{backgroundColor: "#ccffeb"}} onChange={event=>changeLocation(event.target.value, event.target.innerHTML)}>
        <option value="" disabled selected hidden>{currencyName}</option>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="₹">₹ Rupee</option>
        <option value="€">€ Euro</option>
      </Form.Select>
      </div>	
      }	
    </div>
    );
};
export default Location;