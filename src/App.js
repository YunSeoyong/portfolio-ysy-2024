import styled from 'styled-components';
import './App.css';
import { ResizedProvider } from './hooks/ResizedContext';
import Header from './component/Header';
import MainTitle from './pages/MainTitle';
import Intro from './pages/Intro';



function App() {
    return (
        <ResizedProvider>
            <div className="App">
                <Main id='main'>
                    <Header />
                    <MainTitle />
                    <Intro />
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
