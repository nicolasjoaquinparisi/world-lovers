import { Link } from 'react-router-dom'
import NavBar from './NavBar';
import styles from '../../styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.topContainer}>
                    <Link to='/' className={styles.logo} title="Vuelos y hoteles en World lovers">World lovers</Link>

                    <nav className={styles.topNav}>
                        <Link to='/login' className={styles.link}>
                            <svg style={{ color: "var(--color-gray-2)", marginRight: "0.2rem", width: 16 }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                            Iniciar Sesión
                        </Link>

                        <Link to='/help' className={styles.link}>
                            <svg style={{ color: "var(--color-gray-2)", marginRight: "0.2rem", width: 20}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question-circle" className="svg-inline--fa fa-question-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg>
                            Ayuda
                        </Link>
                    </nav>
                </div>

                <NavBar />
            </div>
        </header>
    )
}
 
export default Header