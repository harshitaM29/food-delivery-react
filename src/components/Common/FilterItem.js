import classes  from './FilterItem.module.css';

const FilterItem = ({filter}) => {
    return (
        <div className={classes.filterItem}>
            {filter.icon && filter.icon}
            <div className={classes.filterName}>{filter.title}</div>
        </div>
    )
};

export default FilterItem;