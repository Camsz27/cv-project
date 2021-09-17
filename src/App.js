import Education from './components/Education';
import Experience from './components/Experience';
import Information from './components/Information';
import AddButton from './components/AddButton';
import './App.css';

function App() {
  return (
    <main>
      <section className='addFields'>
        <h1>Add Additional Fields</h1>
        <AddButton className='Education'></AddButton>
        <AddButton className='Experience'></AddButton>
        <AddButton className='Skills'></AddButton>
      </section>
      <div className='cvInfo'>
        <Information></Information>
        <Education></Education>
        <Experience></Experience>
      </div>
    </main>
  );
}

export default App;
