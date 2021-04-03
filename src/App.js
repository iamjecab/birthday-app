import React from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import List from "./List";

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <AppContainer>
                <List />
            </AppContainer>
        </>
    );
}

export default App;
