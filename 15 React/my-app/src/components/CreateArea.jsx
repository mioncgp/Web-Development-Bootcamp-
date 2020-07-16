import React, { useState } from "react";

function CreateArea(props) {
  const [text, addText] = useState({
    title: "",
    content: "",
  });

  function grabText(e) {
    const newValue = e.target.value;
    const inputName = e.target.name;

    addText((prevValue) => {
      if (inputName === "title") {
        return {
          title: newValue,
          content: prevValue.content,
        };
      } else if (inputName === "content") {
        return {
          title: prevValue.title,
          content: newValue,
        };
      }
    });
  }

  function addNote(e) {
    props.getNote(text);
    addText({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={grabText}
          value={text.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={grabText}
          value={text.content}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
