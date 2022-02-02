import styles from '../../styles/SearchFlightBar.module.css'

const SearchFlightBar = () => {

    return (
        <div className={styles.searchContainer}>
            <div className={styles.inputContainer}>
                <label className={styles.label}>Destino</label>
                <input className={styles.searchInput} type="text" placeholder='Ingrese una ciudad o un punto de interés' />
            </div>

            <button className={styles.button}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.searchIcon} viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                Buscar Vuelos
            </button>
        </div>
    )
}
 
export default SearchFlightBar