import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Form from 'react-bootstrap/Form';
const Location = () => {
  const {dispatch, currencyName} = useContext(AppContext);
    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })

    }

  return (
        <div className='alert alert-secondary'> Location { 
        
      <Form.Select value={currencyName} name="Location" id="Location" style={{backgroundColor: "#ccffeb"}} onChange={event=>changeLocation(event.target.value)}>
        <option hidden selected>{currencyName}</option>
        <option value="$" title="$ Dollar">$ Dollar</option>
        <option value="£" title="£ Pound">£ Pound</option>
        <option value="₹" title="₹ Rupee">₹ Rupee</option>
        <option value="€" title="€ Euro">€ Euro</option>
      </Form.Select>	
      }	
    </div>
    );
};
export default Location;
