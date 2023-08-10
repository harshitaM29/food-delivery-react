import { Fragment } from 'react';
import Collections from '../../Common/Collections/Collections';
import {FaFilter, FaCrown} from 'react-icons/fa';
import Filter from '../../Common/Filter/Filter';
import { diningout } from '../../../data/diningout';
import ExploreSection from '../../Common/Explore/ExploreSection';
const collectionList = [
    {
        id: "1",
        title:"Trending This Week",
        cover:"https://b.zmtcdn.com/data/collections/fbe01413b99e6a071af5211d569e7ab6_1691566569.jpeg",
        places:"12 places"
    },
    {
        id: "2",
        title:"6 Unique Dining Experience",
        cover:"https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
        places:"12 places"
    },
    {
        id: "3",
        title:"17 Newly Opened Restaurant",
        cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674824266.jpg",
        places:"16 places"
    },
    {
        id: "4",
        title:"12 Sea View Dining Places",
        cover:"https://b.zmtcdn.com/data/collections/1b191329f2c37a474c428131841d488b_1674826227.jpg",
        places:"13 places"
    },
    {
        id: "5",
        title:"10 Trending Restaurants",
        cover:"https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247359.jpg",
        places:"9 places"
    },
    {
        id: "6",
        title:"14 Romantic Dining Places",
        cover:"https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674824128.jpg",
        places:"13 places"
    },
    {
        id: "7",
        title:"18 Best Luxury Dining Places",
        cover:"https://b.zmtcdn.com/data/collections/e001bf04df21d6d29048e8507a1fab80_1674825025.jpg",
        places:"18 places"
    },
    {
        id: "8",
        title:"7 Places Serving 24x7",
        cover:"https://b.zmtcdn.com/data/collections/e6bfe8754351488bfd6b2ea3bf8963ab_1517385246.jpg",
        places:"7 places"
    },

];
const diningFilters = [
    {
        id:1,
        icon:<FaFilter className='absolute-center'/>,
        title:'Filters',

    },
    {
        id:2,
        title:'Outdoor Seating',
        
    },
    {
        id:3,
        icon:<FaCrown className='absolute-center' />,
        title:'Gold',
        
    },
    {
        id:4,
        title:'Rating 4.0+',
        
    },
    {
        id:5,
        title:'Open Now',
        
    }
]
const DiningOut = () => {
    const diningOutData = diningout;
    return (
        <Fragment>
            
           <Collections list={collectionList} />
           <div className="max-width">
            <Filter filterList={diningFilters}/>
          </div>
          <ExploreSection list={diningOutData} collectionName='Trending dining restaurants in Mumbai' />
        </Fragment>
    )
};

export default DiningOut;