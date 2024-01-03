import React, { useState } from "react";
import TourItem from "./TourItem";

const Tour = (props) => {
  const [idname, setIdName] = useState("");
  const [state, setState] = useState(props.Mal);

  const newTour = state.filter((item) => {
    return item.id !== idname;
  });

  const FunId = (id) => {
    setIdName(id);
    setState(newTour);
  };

  return (
    <>
      {newTour.length === 0 ?
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button onClick = { () => setState(props.Mal)} className="btn">Refresh</button>
        </div>
        :
        newTour.map((item) => {
            return (
              <div key={item.id} className="single-tour">
                <TourItem
                  idFFF={FunId}
                  name={item.name}
                  img={item.image}
                  id={item.id}
                  info={item.info}
                  price={item.price}
                />
              </div>
            );
        })
      }
    </>
  );
};

export default Tour;
