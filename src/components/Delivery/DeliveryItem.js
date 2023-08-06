import classes from './DeliveryItem.module.css';
const DeliveryItem = ({item}) => {
    return <div>
        <div className={classes.deliveryCover} >
            <img src={item.cover} className={classes.deliveryImage} alt={item.title} />
        </div>
        <div className={classes.deliveryTitle}>
            {item.title}
        </div>
    </div>
};

export default DeliveryItem;