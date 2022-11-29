import Home from './components/Home/Home';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';

const App = () => (
  <main>
    <NavBar />
    <Container>
      <Home />
      <About />
      <Favorite />
    </Container>
  </main>
);

export default App;