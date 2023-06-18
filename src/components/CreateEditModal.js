import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { HabitsContext } from "../contexts/HabitsContext";

const CreateEditModal = ({ _id, setAddModal }) => {
  const { dispatchHabitsData } = useContext(HabitsContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [starting, setStarting] = useState("");
  const [goal, setGoal] = useState("");
  const [time, setTime] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!img) {
      setImg(
        "https://cdn.pixabay.com/photo/2019/04/28/09/20/the-little-things-of-life-4162499_1280.jpg"
      );
    }
    if (!_id) {
      console.log("asdsa");
      dispatchHabitsData({
        type: "ADD_HABBIT",
        payload: {
          _id: uuidv4(),
          title,
          description,
          starting,
          goal,
          time,
          img,
        },
      });
    } else {
      dispatchHabitsData({
        type: "EDIT_HABBIT",
        payload: {
          _id,
          title,
          description,
          starting,
          goal,
          time,
          img,
        },
      });
    }
    setAddModal(false);
  };

  return (
    <div className="modal-wrapper">
      <section className="modal-actual">
        <form onSubmit={handleSubmit}>
          <label>
            Whats The goal called
            <input
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
              required
            ></input>
          </label>
          <label>
            Write something about it
            <input
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
              required
            ></input>
          </label>
          <label>
            When do you start?
            <input
              placeholder="starting"
              onChange={(e) => setStarting(e.target.value)}
              required
            ></input>
          </label>
          <label>
            Whats your goal
            <input
              placeholder="goal"
              onChange={(e) => setGoal(e.target.value)}
              required
            ></input>
          </label>
          <label>
            How much time do you want to put in
            <input
              placeholder="time"
              onChange={(e) => setTime(e.target.value)}
              required
            ></input>
          </label>
          <label>
            Paste an image url to motivate you
            <input
              placeholder="image"
              onChange={(e) => setImg(e.target.value)}
            ></input>
          </label>
          <button type="submit">Save</button>
        </form>
        <button onClick={() => setAddModal(false)}>Cancel</button>
      </section>
    </div>
  );
};

export default CreateEditModal;
