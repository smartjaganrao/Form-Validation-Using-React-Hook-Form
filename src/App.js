import './App.css';


import CreateForm from './components/CreateForm';
import Header from './components/Header';
import FormA from './components/FormA';
import FormB from './components/FormB';
import FormC from './components/FormC';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="Header">


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
        <Route exact index path="/" element={<CreateForm />} />
          <Route path="FormA" element={<FormA />} />
          <Route path="FormB" element={<FormB />} />
          <Route path="FormC" element={<FormC />} />
        </Route>
      </Routes>
    </BrowserRouter>


    
    </div>
  );
}

export default App;
