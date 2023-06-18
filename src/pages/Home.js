import React, { useContext, useState } from "react";
import { HabitsContext } from "../contexts/HabitsContext";
import { BsPlusCircle } from "react-icons/bs";
import CreateEditModal from "../components/CreateEditModal";
import Card from "../components/Card";

const Home = () => {
  const { habitsData } = useContext(HabitsContext);
  const [addModal, setAddModal] = useState(false);

  return (
    <section className="habits-container">
      {habitsData
        .filter(({ archived }) => !archived)
        .map((habit) => (
          <Card habit={habit} key={habit._id} />
        ))}
      {addModal && <CreateEditModal setAddModal={setAddModal} />}
      <button className="add-button" onClick={() => setAddModal(true)}>
        <BsPlusCircle size={"4rem"} />
      </button>
    </section>
  );
};

export default Home;
