import Slider from 'react-slick';
import classes from './Collections.module.css';
import { FaCaretRight } from 'react-icons/fa';
import CarouselNext from '../CarouselNext';
import CarouselPrev from '../CarouselPrev';

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CarouselNext />,
    prevArrow: <CarouselPrev />
  };
const Collections = ({list}) => {
    return <div className={classes.collectionWrapper}>
        <div className={`max-width ${classes.collections} `}>
            <div className='collection-title'>Collections</div>
            <div className={classes.collectionSubTitle}>
                <div className={classes.collectionSubText}>
                Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends
                </div>
                <div className={classes.location}>
                    <div>All collections in Mumbai</div>
                <FaCaretRight className='absolute-center' />
             </div>   
            </div>
            <Slider {...settings} >
                {list.map((item) => (
                  <div>
                        <div className={classes.collectionCover}>
                            <img src={item.cover} className={classes.collectionImage} alt={item.title} />
                            <div className={classes.gradient}></div>
                            <div className={classes.collectionCardTitle}>{item.title}</div>
                            <div className={classes.collectionCardSub}>
                            <div>{item.places}</div>
                            <FaCaretRight className='absolute-center' />
                            </div>
                        </div>
                    </div>
               ))}
            </Slider>
        </div>
       
    </div>
};

export default Collections;