import styles from '../../styles/SearchBar.module.css'

import piramides from '../../../img/pirámides-1.jpg'
import coliseo from '../../../img/coliseo.jpg'
import louvre from '../../../img/louvre-1.jpg'
import machuPichu from '../../../img/machu-pichu.jpg'

const SearchBar = () => {

    const backgroundImages = {
        0: piramides,
        1: coliseo,
        2: louvre,
        3: machuPichu
    }

    const getBackgroundImage = () => {
        const index = Math.floor(Math.random() * 4)
        return backgroundImages[index]
    }

    return (
        <div className={styles.container} style={{backgroundImage: `url(${getBackgroundImage()})`}}>
            <div className={styles.searchContainer}>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Destino</label>
                    <input className={styles.searchInput} type="text" />
                </div>
            </div>
        </div>
    )
}
 
export default SearchBar