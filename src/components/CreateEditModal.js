import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { HabitsContext } from "../contexts/HabitsContext";

const CreateEditModal = ({ _id, setAddModal }) => {
  const { dispatchHabitsData, habitsData } = useContext(HabitsContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [starting, setStarting] = useState("");
  const [goal, setGoal] = useState("");
  const [time, setTime] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!_id) {
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

  useEffect(() => {
    if (_id) {
      const habit = habitsData.find(({ _id: id }) => id === _id);
      console.log(habit);
      if (habit) {
        setTitle(habit.title);
        setDescription(habit.description);
        setStarting(habit.starting);
        setGoal(habit.goal);
        setTime(habit.time);
        setImg(habit.img);
      }
    }
  }, [_id, habitsData]);

  return (
    <div className="modal-wrapper">
      <section className="modal-actual">
        <form onSubmit={handleSubmit}>
          <label>
            Whats The goal:
            <input
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            ></input>
          </label>
          <label>
            Write something about it:
            <input
              value={description}
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
              required
            ></input>
          </label>
          <label>
            When do you start?
            <input
              value={starting}
              placeholder="starting"
              onChange={(e) => setStarting(e.target.value)}
              required
            ></input>
          </label>
          <label>
            Whats the intensity?
            <input
              value={goal}
              placeholder="goal"
              onChange={(e) => setGoal(e.target.value)}
              required
            ></input>
          </label>
          <label>
            How much time per day?
            <input
              value={time}
              placeholder="time"
              onChange={(e) => setTime(e.target.value)}
              required
            ></input>
          </label>
          <label>
            Paste an image url to motivate you:
            <input
              value={img}
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
