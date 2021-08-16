import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/index";
import TeacherList from "./pages/TeacherList/index";
import TeacherForm from "./pages/TeacherForm/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}
