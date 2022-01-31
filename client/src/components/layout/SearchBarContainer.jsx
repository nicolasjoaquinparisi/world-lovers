import styles from '../../styles/SearchBarContainer.module.css'

import piramides from '../../../img/pirámides-1.jpg'
import coliseo from '../../../img/coliseo.jpg'
import louvre from '../../../img/louvre-1.jpg'
import machuPichu from '../../../img/machu-pichu.jpg'
import chichenItza from '../../../img/chichen-itza.jpg'

const SearchBarContainer = ({children}) => {

    const backgroundImages = {
        0: piramides,
        1: coliseo,
        2: louvre,
        3: machuPichu,
        4: chichenItza
    }

    const getBackgroundImage = () => {
        const index = Math.floor(Math.random() * 5)
        return backgroundImages[index]
    }

    return (
        <div className={styles.container} style={{backgroundImage: `url(${getBackgroundImage()})`}}>
            { children }
        </div>
    )
}
 
export default SearchBarContainer