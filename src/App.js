import styled from 'styled-components';
import { ResizedProvider } from './hooks/ResizedContext';

import './App.css';

import Header from './component/Header';
import MainTitle from './pages/MainTitle';
import Intro from './pages/Intro';
import Skill from './pages/Skill';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';



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
                    <AboutMe />
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
