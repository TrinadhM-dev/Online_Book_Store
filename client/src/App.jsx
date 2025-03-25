
import { Outlet } from 'react-router-dom';
import './App.css'; // or './tailwind.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
        <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary '>
          <Outlet />
        </main>

    {/* Footer */}
    <Footer />
    </>
  )
}

export default App