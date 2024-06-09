import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";


//components
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import Home from "./pages/Home";
import Video from "./pages/Video";

//rrd
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";

const Container = styled.div`
  display: flex;  
`;

//flex will be 7 times bigger than we defined in menu
const Main = styled.div`
  flex:7;
  background-color: ${({theme}) =>theme.bg};;
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;


function App() {

  // can use useEffect

  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <BrowserRouter>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>
        <Navbar />
        <Wrapper>
          <Routes>
            {/* main route */}
            <Route path="/">
              <Route index element={<Home/>} />
              <Route path="video">
                <Route path=":id" element={<Video/>} />
              </Route>
            </Route>
          </Routes>
        </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  )
}

export default App