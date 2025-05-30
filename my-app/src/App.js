import Header from "./components/header/Header";
import Content1 from "./components/content1/Content1";
import Content2 from "./components/content2/content2";
import Content3 from "./components/content3/content3";
import Footer from "./components/footer/footer";
function App() {
    return (
        <div className="App">
            <Header />
            <Content1 />
            <Content2/>
            <Content3/>
            <Footer/>
        </div>
    );

}

export default App;