import React from 'react';
import Quiz from './components/Quiz';
import './App.css'; // Assuming you have some global styles
import Footer from './components/Footer';



const App: React.FC = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column justify-content-center">
      <h1 className="text-center mt-4">🌍 Language Game</h1>
      <Quiz />
      <Footer />
      
    </div>
  );
};

export default App;
