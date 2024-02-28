import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//import Form from 'react-bootstrap/Form';
import Select, {components} from 'react-select';
const Location = () => {
  const {dispatch} = useContext(AppContext);
    const changeLocation = (val, currencyName)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: {'val':val, 'currencyName':currencyName},
            })
    }
    const options=[
        {value:"$", label:"$ Dollar"},
        {value:"£", label:"£ Pound"},
        {value:"€", label:"€ Euro"},
        {value:"₹", label:"₹ Rupee"},
    ];

    const VALUE_PREFIX = "Currency(";
    const VALUE_SUFFIX = ")";    

  return (
        <div className='alert alert-secondary'> Location { 
        <Select
            options={options}
            placeholder='All'
            isClearable
            components={{
                SingleValue:({children, ...props}) =>{
                    return(
                        <components.SingleValue{...props}>
                        {VALUE_PREFIX + children + VALUE_SUFFIX}
                        </components.SingleValue>
                    );
                },
                Placeholder:({children,...props}) => {
                    return(
                        <components.Placeholder{...props}>
                        {VALUE_PREFIX + children + VALUE_SUFFIX}
                        </components.Placeholder>
                    );
                },
                IndicatorSeparator: () => null
            }}
        />
      //<Form.Select name="Location" id="Location" style={{backgroundColor: "#ccffeb"}} onChange={event=>changeLocation(event.target.value, event.target.innerHTML)}>
        //<option value="" disabled selected hidden>{currencyName}</option>
        //<option value="$">$ Dollar</option>
        //<option value="£">£ Pound</option>
        //<option value="₹">₹ Rupee</option>
        //<option value="€">€ Euro</option>
      //</Form.Select>	
      }	
    </div>
    );
};
export default Location;