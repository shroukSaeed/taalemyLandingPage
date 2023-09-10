import './App.css';
import FirstSection from './Components/FirstSection/FirstSection';
import Header from './Components/Header/Header';
import MyNav from './Components/Navbar/MyNav';
import SecondSection from './Components/SecondSection/SecondSection';

function App() {
  return (
    <>
      <MyNav/>
      <Header/>
      <FirstSection/>
      <SecondSection/>
    </>
  );
}

export default App;
