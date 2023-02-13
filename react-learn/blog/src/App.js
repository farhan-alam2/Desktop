import'./App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import Filter from './component/Filter'
import NavBar from './component/NavBar';
import Page404 from './component/Page404';
import User from './component/User';
import Contact from './component/Contact';
import Company from './component/Company';
import Channel from './component/Channel';
import Other from './component/Other';

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/user/:name" element={<User />} />
      <Route path="/*" element={<Navigate to="/" />} />
      <Route path="/contact" element={<Contact />}>
        <Route path="company" element={<Company />} />
        <Route path="channel" element={<Channel />} />
        <Route path="other" element={<Other />} />
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
