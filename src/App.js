import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//urlを変更してルーティングを使用する場合はページの全体を<Router>で囲む必要がある
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
