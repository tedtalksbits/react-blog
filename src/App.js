import './App.css';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
import About from './pages/About';
import Navbar from './components/Navbar';
import NotFoundPage from './pages/NotFoundPage';
import { darkTheme, lightTheme } from './data/appThemes';
import Switch from './components/Switch';
import useLocalStorageState from 'use-local-storage-state';
import bgImgage from './images/gradbg.png'
import Edit from './pages/Edit';
const GlobalStyles = createGlobalStyle`

body {
   
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    background-image: url(${bgImgage});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 151%;
    background-blend-mode: soft-light;
  }

  h1{
    color: ${({ theme }) => theme.primary};
  }

  h1{
      margin-bottom: 1rem;
      font-weight: 800;
   }
   p{
      line-height: 1.35;
      font-size: 1.2rem;
   }

   .container-padding{
      padding: 0 1rem;
   }
`
const BlogApp = styled.main`
  
  display: grid;
  grid-template-columns: 1fr min(120ch, 100%) 1fr;
  /* padding: 0 1rem; */

  & > *{
    grid-column: 2;
  }
  .full-bleed {
    width:100%;
    grid-column: 1 / 4;
  }
`
function App() {
  const dark = darkTheme;
  const light = lightTheme;
  const [theme, setTheme] = useLocalStorageState("theme", dark)
  const [toggle, setToggle] = useLocalStorageState("toggle", true)

  const handleTheme = () => {
    if (theme === dark) {
      setTheme(light)
      setToggle(false)
    }
    else {
      setTheme(dark)
      setToggle(true)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar toggler={<Switch handleCLick={() => handleTheme()} toggleState={toggle} />} />
        <BlogApp className="app">
          {/* <div className="glass"></div> */}
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/article-list" element={<ArticleList />} />
            <Route path="/about" element={<About />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BlogApp>
      </Router>
    </ThemeProvider>
  );
}

export default App;
