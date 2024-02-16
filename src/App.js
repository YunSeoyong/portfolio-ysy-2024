import styled from 'styled-components';
import './App.css';
import Header from './component/Header';
import Intro from './pages/Intro';

function App() {
    return (
        <div className="App">
            <Main id='main'>
                <Header />
                <Intro />
            </Main>
        </div>
    );
}

export default App;

const Main = styled.main`
    position: relative;
    width: 100%;
`;
