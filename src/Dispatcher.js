import { useCallback, useEffect, useState } from "react";

const Dispatcher = ({ queue, id }) => {
  const [text, setText] = useState("");

  const dispatch = useCallback(() => {
    console.log(":(", text);
  }, [text]);

  useEffect(() => {
    queue.push({
      id,
      dispatch
    });

    return () => {
      const index = queue.findIndex((i) => i.id === id);

      queue.splice(index, 1);
    };
  }, [dispatch, id, queue]);

  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={dispatch}>Dispatch {id}</button>
    </div>
  );
};

export default Dispatcher;
