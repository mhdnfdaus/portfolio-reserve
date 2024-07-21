import Body from "./components/Body"
import Main from "./components/Main"
import HeaderEffects from "./components/HeaderEffects"
import Home from "./components/Home"
import Project from "./components/Project"

function App() {

  return (
    <>
      <HeaderEffects/>
      <Body>
        <Main>
          <Home/>
          <Project/>
        </Main>
      </Body>
    </>
  )
}

export default App
