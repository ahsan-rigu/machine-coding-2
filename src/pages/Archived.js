import React, { useContext, useState } from "react";
import { HabitsContext } from "../contexts/HabitsContext";
import { BsPlusCircle } from "react-icons/bs";
import CreateEditModal from "../components/CreateEditModal";
import Card from "../components/Card";

const Archived = () => {
  const { habitsData } = useContext(HabitsContext);

  return (
    <section className="habits-container">
      {habitsData
        .filter(({ archived }) => archived)
        .map((habit) => (
          <Card habit={habit} key={habit._id} />
        ))}
    </section>
  );
};

export default Archived;
