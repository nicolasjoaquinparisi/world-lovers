import { Link } from 'react-router-dom'
import styles from '../../styles/NavBar.module.css'

const NavBar = ({activeElement}) => {

    return (
        <nav className={styles.bottomNav}>
            <Link to='/hotels' className={ activeElement === 'hotels' ? styles.bottomNavLinkActive : styles.bottomNavLink }>
                {
                    activeElement === 'hotels' ?
                    <div className={styles.iconContainer}>
                        <svg className={ styles.linkIconActive } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="3" y1="21" x2="21" y2="21" />
                            <path d="M5 21v-14l8 -4v18" />
                            <path d="M19 21v-10l-6 -4" />
                            <line x1="9" y1="9" x2="9" y2="9.01" />
                            <line x1="9" y1="12" x2="9" y2="12.01" />
                            <line x1="9" y1="15" x2="9" y2="15.01" />
                            <line x1="9" y1="18" x2="9" y2="18.01" />
                        </svg>
                    </div>
                    :
                    <svg className={ styles.linkIcon } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="3" y1="21" x2="21" y2="21" />
                        <path d="M5 21v-14l8 -4v18" />
                        <path d="M19 21v-10l-6 -4" />
                        <line x1="9" y1="9" x2="9" y2="9.01" />
                        <line x1="9" y1="12" x2="9" y2="12.01" />
                        <line x1="9" y1="15" x2="9" y2="15.01" />
                        <line x1="9" y1="18" x2="9" y2="18.01" />
                    </svg>    
                }
                
                <span className={ activeElement === 'hotels' ? styles.nameActive : ''}>Alojamientos</span>
            </Link>

            <Link to='/flights' className={ activeElement === 'flights' ? styles.bottomNavLinkActive : styles.bottomNavLink }>
                {
                    activeElement === 'flights' ?
                    <div className={styles.iconContainer}>
                        <svg className={ styles.linkIconActive } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
                        </svg>
                    </div>
                    :
                    <svg className={ styles.linkIcon } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
                    </svg>
                }
                <span className={ activeElement === 'flights' ? styles.nameActive : '' }>Vuelos</span>
            </Link>

            <Link to='/offerts' className={ activeElement === 'offerts' ? styles.bottomNavLinkActive : styles.bottomNavLink }>
                {
                    activeElement === 'offerts' ?
                    <div className={styles.iconContainer}>
                        <svg className={ styles.linkIconActive } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
                        </svg>
                    </div>
                    :
                    <svg className={ styles.linkIcon } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
                    </svg>
                }
                <span className={ activeElement === 'offerts' ? styles.nameActive : ''}>Ofertas</span>
            </Link>

            <Link to='/activities' className={ activeElement === 'activities' ? styles.bottomNavLinkActive : styles.bottomNavLink }>
                {
                    activeElement === 'activities' ?
                    <div className={styles.iconContainer}>
                        <svg className={ styles.linkIconActive } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="15" y1="5" x2="15" y2="7" />
                            <line x1="15" y1="11" x2="15" y2="13" />
                            <line x1="15" y1="17" x2="15" y2="19" />
                            <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
                        </svg>
                    </div>
                    :
                    <svg className={ styles.linkIcon } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="15" y1="5" x2="15" y2="7" />
                        <line x1="15" y1="11" x2="15" y2="13" />
                        <line x1="15" y1="17" x2="15" y2="19" />
                        <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
                    </svg>    
                }
                <span className={ activeElement === 'activities' ? styles.nameActive : ''}>Actividades</span>
            </Link>
        </nav>
    )
}
 
export default NavBar