import Header from "./Header"
import SearchBar from "./SearchBar"

const Layout = ({children}) => {
    return (
        <div id="layout">
            <Header />
            <SearchBar />
            
            {children}
        </div>
    )
}
 
export default Layout