import { useState } from 'react';
import { Layout } from './components/layout';
import { Home, About, Projects, Skills, Contact } from './components/sections';
import { Navbar } from './components/layout/Navbar';

function App() {
  const [theme, setTheme] = useState('dracula');

  function handleThemeChange() {
    setTheme(theme === 'dracula' ? 'light' : 'dracula');
  }

  return (
    <div data-theme={theme}>
      <Navbar theme={theme} onThemeChange={handleThemeChange} />
      <Layout>
        <Home />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
