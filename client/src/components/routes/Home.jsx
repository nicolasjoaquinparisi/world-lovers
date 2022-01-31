import Layout from '../layout/Layout'
import SearchBarContainer from "../layout/SearchBarContainer"
import SearchFlightBar from '../layout/SearchFlightBar'
import NavBar from '../layout/NavBar'

const Home = () => {
    return (
        <Layout>
            <NavBar />
            <SearchBarContainer>
                <SearchFlightBar/>
            </SearchBarContainer>
        </Layout>
    )
}
 
export default Home