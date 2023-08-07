import ExploreCard from './ExploreCard';
import classes from './ExploreSection.module.css';

const ExploreSection = ({list,collectionName}) => {
    return <div className={`max-width ${classes.exploreSection}`}>
        <div className='collection-title'>{collectionName}</div>
        <div className={classes.exploreGrid}>
            {list.map((res) => {
            return  <ExploreCard restaurant={res}/>  
            })}
        </div>
    </div>
};

export default ExploreSection;