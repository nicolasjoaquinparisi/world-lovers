import Layout from '../layout/Layout'
import SearchBarContainer from "../layout/SearchBarContainer"
import SearchBarActivity from '../layout/SearchBarActivity'
import NavBar from '../layout/NavBar'

const Activities = () => {
    return (
        <Layout>
            <NavBar activeElement={'activities'} />
            <SearchBarContainer>
                <SearchBarActivity/>
            </SearchBarContainer>
        </Layout>
    )
}
 
export default Activities