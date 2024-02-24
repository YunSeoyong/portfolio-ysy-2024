import styled from 'styled-components';
import './App.css';
import { ResizedProvider } from './hooks/ResizedContext';
import Header from './component/Header';
import MainTitle from './pages/MainTitle';
import Intro from './pages/Intro';
import Skill from './pages/Skill';
import Portfolio from './pages/Portfolio';



function App() {
    return (
        <ResizedProvider>
            <div className="App">
                <Main id='main'>
                    <Header />
                    <MainTitle />
                    <Intro />
                    <Skill />
                    <Portfolio />
                </Main>
            </div>
        </ResizedProvider>
    );
}

export default App;

const Main = styled.main`
    position: relative;
    width: 100%;
`;
