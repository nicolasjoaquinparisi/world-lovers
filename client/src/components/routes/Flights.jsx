import Layout from '../layout/Layout'
import SearchBarContainer from "../layout/SearchBarContainer"
import SearchFlightBar from '../layout/SearchFlightBar'
import NavBar from '../layout/NavBar'

const Flights = () => {
    return (
        <Layout>
            <NavBar activeElement={'flights'} />
            <SearchBarContainer>
                <SearchFlightBar/>
            </SearchBarContainer>
        </Layout>
    )
}
 
export default Flights