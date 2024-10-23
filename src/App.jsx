import './App.css'
import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Menu from "./components/Menu/Menu.jsx";

function App() {


    return (
        <>
            <div className='w-[1320px] mx-auto'>
                <Header/>
                <Banner/>
                <Menu/>
            </div>
        </>
    )
}

export default App
