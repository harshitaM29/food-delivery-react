import classes from './Filter.module.css';
import FilterItem from './FilterItem';

const Filter = ({filterList}) => {
    return (
        <div className={classes.filter}>
           {filterList && filterList.map((filter) => {
            return <FilterItem filter={filter} key={filter.id} />
           })}
        </div>
    )
};

export default Filter;