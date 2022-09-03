import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header.jsx";
import Footer from "./components/footer/footer.component.jsx";
import Router from "./router/router.jsx";
import { fetchCallDetails } from "../store/callInfo.reducer.js";

const App = () => {
  const dispatch=useDispatch(0);

  useEffect(function(){
    dispatch(fetchCallDetails());
  },[]);

  return (
    <div className="container">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
