import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SongList from './components/tracks/SongList';

function App() {
  return (
    <>
      <Header />
      <SongList />
      <Footer />
    </>
  );
}

export default App;