import React, { useState, useEffect, useContext } from 'react';
import RouteGuard from '../components/routeguard';
import TestInstructionsComp from '../components/TestInstructions/TestInstructions';
import Layout from '../components/Layout/layout';
import CurrOrderContext from '../utils/order_context';
// import CurrOrderContext from '../utils/order_context';
// import CurrOrderContext from '../utils/order_context';

const TestInstructions = () => {
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const [instruction, setinstruction] = useState({ ...currOrder[3] });
  const [Planning, setPlanning] = useState({ ...currOrder[2] });
  useEffect(() => {
    setinstruction({ ...currOrder[3] });
    setPlanning({ ...currOrder[2] });
    // console.log("order from instructions", currOrder[3]);
    // console.log("instructions", instruction)
  }, [currOrder]);

  return (
    <>
      <Layout>
        <RouteGuard />
        <TestInstructionsComp data={instruction.data} planningData={Planning.data} />
      </Layout >
    </>
  );
}

export default TestInstructions;
