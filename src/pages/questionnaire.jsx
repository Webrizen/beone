import React, { useState, useEffect, useContext } from "react";
import RouteGuard from "../components/routeguard";
import Layout from "../components/Layout/layout";
import QuizComponent from "../components/QuizComponent";
import CurrOrderContext from "../utils/order_context";
import DynamicFormDone from '../components/DynamicFormDone';

const Questionnaire = () => {
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const [questionare, setquestionare] = useState(currOrder[5] || {});
  
  useEffect(() => {
    setquestionare(currOrder[5] || {});
  }, [currOrder]);

  return (
    <>
      <Layout>
        <RouteGuard />
        {questionare.data && questionare.data.questionnaireCompletedStatus === "Y" ? <DynamicFormDone/> : <QuizComponent />}
      </Layout>
    </>
  );
};

export default Questionnaire;
