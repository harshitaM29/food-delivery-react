import { Fragment } from 'react';
import classes from './NightLife.module.css';
import {FaFilter, FaCrown} from 'react-icons/fa';
import Collections from '../Common/Collections/Collections';
import Filter from '../Common/Filter';
import {nightlife} from '../../data/nightlife'
import ExploreSection from '../Common/Explore/ExploreSection';
const collectionList = [
    {
        id: "1",
        title:"18 Lit Party Places",
        cover:"https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674824942.jpg?output-format=webp",
        places:"18 places"
    },
    {
        id: "2",
        title:"12 Finest Microbreweries",
        cover:"https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675078887.jpg?output-format=webp",
        places:"10 places"
    },
  

];
const nightLifeFilters = [
    {
        id:1,
        icon:<FaFilter className='absolute-center'/>,
        title:'Filters',

    },
    {
        id:2,
        icon:<FaCrown className='absolute-center' />,
        title:'Gold',
        
    },
    {
        id:3,
        title:'Distance',
        
    },
    {
        id:4,
        title:'Rating 4.0+',
        
    },
    {
        id:5,
        title:'Pubs & Bar',
        
    }
]
const NightLife = () => {
    const nightLifeData = nightlife;
    return (
        <Fragment>
          <Collections list={collectionList} />
          <div className="max-width">
            <Filter filterList={nightLifeFilters}/>
          </div>
          <ExploreSection list={nightLifeData} collectionName='Nightlife Restaurants in Mumbai' />
        </Fragment>
    )
};

export default NightLife;