import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts.jsx";
import Orb from "./components/Orb/Orb.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import React, { useMemo, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Income from "./components/Income/Income.jsx";
import Expenses from "./components/Expenses/Expenses.jsx";
import { useGlobalContext } from "./context/globalContext.jsx";

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <Orb />
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;

