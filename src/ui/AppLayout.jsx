import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: #3333;
  padding: 4rem 4.8rem 6.4rem;
`;


const Container = styled.div`
    max-width: 120rem;   // limits container width
    margin: 0 auto;      // centers it horizontally
    display: flex;       
    flex-direction: column; // stacks children vertically
    gap: 2.5rem;           // spacing between children
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>

        <Container>

        <Outlet />

        </Container>
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
