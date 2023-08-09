import classes from './ExploreCard.module.css';
import {FaRegStar} from 'react-icons/fa';
const ExploreCard = ({restaurant}) => {
   const name = restaurant?.info?.name ?? "";
   const coverImage = restaurant?.info?.image?.url;
   const deliveryTime =  restaurant?.order?.deliveryTime;
   const rating = restaurant?.info?.rating?.rating_text;
   const approxPrice = restaurant?.info?.cfo?.text;
   const offers = restaurant?.bulkOffers ?? [];
   const cuisines = restaurant?.info?.cuisine?.map((item) => item.name).slice(0,3);
   const bottomContainers = restaurant?.bottomContainers;
   const goldOffer = restaurant?.gold?.text;
   const offerValue = restaurant?.gold?.offerValue;
   const proOff = offers.length>1?offers[0].text:null;
   const discount = offers.length>1?offers[1].text : offers.length===1?offers[0].text:null;

    return <div className={`${classes.exploreCard} cur-po`}>
       <div className={classes.exploreCardCover}>
         <img src={coverImage} alt={name} className={classes.exploreCardImage} />
         <div className={classes.deliveryTime}>
            {deliveryTime}
         </div>
         {proOff && <div className={classes.proOff}>{proOff}</div> }
         {goldOffer && <div className={`${classes.goldOffer} absolute-center`}>{goldOffer} {offerValue && offerValue }</div> }
         {discount && <div className={`${classes.discount} absolute-center`}>{discount}</div> }
       </div>
       <div className={classes.resRow}>
         <div className={classes.name}>{name}</div>
         {rating && (<div className={`${classes.rating} absolute-center`}>
            {rating} <FaRegStar className={`${classes.icon} absolute-center`} /> 
            </div>
            )}
       </div>
       <div className={classes.resRow} >
         {cuisines.length && (<div className={classes.cuisine}> 
         {cuisines.map((item,i) => {
            return <span className={classes.resCus}>{item}{i !== cuisines.length -1 && ", "}
            </span>
            
         })
         
         }
        
         </div>
         )}
          {approxPrice && <div className={classes.approxPrice}> {approxPrice} </div>}
       </div>
       {bottomContainers.length>0 && <div>
         <div className={classes.cardSeparator}>
         </div>
         <div className={classes.exploreBottom}>
            <img src={bottomContainers[0]?.image?.url} alt={bottomContainers[0]?.text} style={{height:"18px"}} />
            <div className={classes.resButton}>{bottomContainers[0]?.text}</div>
         </div>
       </div> 
}
    </div>
};

export default ExploreCard;