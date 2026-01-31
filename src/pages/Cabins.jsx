import React, { useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable"

import Button from "../ui/Button"
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {


  const [isAdd,setIsAdd] =useState(true);

  return (
      <>
          <Row type="horizontal">
            <Heading as="h1">All cabins</Heading>
            <p>TEST</p>
          </Row>
          <Row>
            <CabinTable/>

          </Row>
            <Button type="primary" size="small" onClick={()=>setIsAdd(state => !state)}>{isAdd ? "Add":"close"}</Button>

            <CreateCabinForm/>
      </>
  );
}

export default Cabins;
