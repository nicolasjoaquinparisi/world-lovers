import Header from "./Header"

const Layout = ({children}) => {
    return (
        <div id="layout">
            <Header />
            {children}
        </div>
    )
}
 
export default Layout