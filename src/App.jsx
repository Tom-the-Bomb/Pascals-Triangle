import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="App body d-flex flex-column justify-content-center">
            <NavBar></NavBar>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}