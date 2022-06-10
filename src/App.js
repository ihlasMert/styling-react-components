import React, { useState } from "react";

import "./App.css";
import CourseGoalList from "./components/CourseGoals/CourseGoalList";
import CourseInput from "./components//CourseGoals/CourseInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all excerises", id: "g1" },
    { text: "Finish the course", id: "g2" },
  ]);
  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updateGoals = [...prevGoals];
      updateGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updateGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updateGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updateGoals;
    });
  };
  let content = (
    <p style={{ textAlign: "center" }}>NO Goals foun. Maybe add one?</p>
  );
  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        {" "}
        <CourseInput onAddGoal={addGoalHandler} />
      </section>

      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
