import Layout from '../layout/Layout'
import SearchBarContainer from "../layout/SearchBarContainer"
import SearchFlightBar from '../layout/SearchFlightBar'
import NavBar from '../layout/NavBar'

const Hotels = () => {
    return (
        <Layout>
            <NavBar activeElement={'hotels'} />
            <SearchBarContainer>
                <SearchFlightBar/>
            </SearchBarContainer>
        </Layout>
    )
}
 
export default Hotels