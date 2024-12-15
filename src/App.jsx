import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import LandingPage from "./pages/LandingPage";
import NewsDetail from "./pages/NewsDetail";
import NewsOverview from "./pages/NewsOverview";
import { Contact } from "./components";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={ <LandingPage /> } />
            <Route path="/home" element={ <LandingPage /> } />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/news" element={<NewsOverview />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
