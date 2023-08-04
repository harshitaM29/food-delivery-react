import classes from './Header.module.css';
import { CiLocationOn,CiSearch } from 'react-icons/ci';
import { FaCaretDown,FaUserCircle,FaAngleDown } from 'react-icons/fa';
const Header = () => {
    return (
    <div className={`max-width ${classes.header}`}>
        <img src='	https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
        alt='logo'
        className={classes.headerLogo}     
         />
         <div className={classes.headerRight}>
            <div className={classes.locationSearch}>
                <div className={classes.location}>
                    <div className={classes.locationIcon}>
                    <CiLocationOn className={`absolute-center ${classes.icon}`}/>
                    <div>Banglore</div>
                    </div>
                    <FaCaretDown className='absolute-center'/>
                </div>
                <div className={classes.separator}></div>
                <div className={classes.searchBar}>
                    <CiSearch className={`absolute-center ${classes.searchIcon}`} />
                    <input placeholder='Search For Restaurant or Dish' className={classes.searchInput}/>
                </div>
            </div>
            <div className={classes.profile} >
               <FaUserCircle className={`absolute-center ${classes.profileIcon}`} />
               <span className={classes.profileName}>Harshita</span>
               <FaAngleDown className={`absolute-center ${classes.down}`} />
            </div>
         </div>
    </div>
    )
};

export default Header;