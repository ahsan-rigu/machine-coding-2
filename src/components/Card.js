import React, { useContext, useState } from "react";
import CreateEditModal from "./CreateEditModal";
import { HabitsContext } from "../contexts/HabitsContext";

const Card = ({
  habit: { _id, title, description, starting, goal, time, img, archived },
}) => {
  const [details, setDetails] = useState(false);
  const [edit, setEdit] = useState(false);
  const { dispatchHabitsData } = useContext(HabitsContext);

  return (
    <article>
      {!details ? (
        <div className="article-cover" onClick={() => setDetails(true)}>
          <img src={img} />
          <h2>{title}</h2>
        </div>
      ) : (
        <div className="article-content">
          <h2>{title}</h2>
          <p className="description">Description: {description}</p>
          <p>Starting: {starting}</p>
          <p>Goal: {goal}</p>
          <p>Time: {time}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          {!archived ? (
            <button
              onClick={() =>
                dispatchHabitsData({ type: "ARCHIVE", payload: { _id } })
              }
            >
              Archive
            </button>
          ) : (
            <button
              onClick={() =>
                dispatchHabitsData({ type: "UNARCHIVE", payload: { _id } })
              }
            >
              Unarchive
            </button>
          )}
          <button
            onClick={() =>
              dispatchHabitsData({ type: "DELETE", payload: { _id } })
            }
          >
            Delete
          </button>
          <button onClick={() => setDetails(false)}>Close Details</button>
          {edit && <CreateEditModal _id={_id} setAddModal={setEdit} />}
        </div>
      )}
    </article>
  );
};

export default Card;
