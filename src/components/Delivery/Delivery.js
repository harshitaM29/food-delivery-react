import { Fragment } from 'react';
import classes from './Delivery.module.css';
import Filter from '../Common/Filter';
import { FaFilter } from 'react-icons/fa'
import DeliveryCollections from './DeliveryCollection';
const deliveryFilters = [
    {
        id:1,
        icon:<FaFilter className='absolute-center'/>,
        title:'Filters',

    },
    {
        id:2,
        title:'Rating 4.0+',
        
    },
    {
        id:3,
        title:'Safe and Hygenic',
        
    },
    {
        id:4,
        title:'Pure Veg',
        
    },
    {
        id:5,
        title:'Delivery Time',
        
    }
]
const Delivery = () => {
    return (
        <Fragment>
          <div className="max-width">
            <Filter filterList={deliveryFilters}/>
          </div>
          <DeliveryCollections />
        </Fragment>
    )
};

export default Delivery;