import Layout from '../layout/Layout'
import SearchBarContainer from "../layout/SearchBarContainer"
import SearchFlightBar from '../layout/SearchFlightBar'
import NavBar from '../layout/NavBar'

const Offerts = () => {
    return (
        <Layout>
            <NavBar activeElement={'offerts'} />
            <SearchBarContainer>
                <SearchFlightBar/>
            </SearchBarContainer>
        </Layout>
    )
}
 
export default Offerts