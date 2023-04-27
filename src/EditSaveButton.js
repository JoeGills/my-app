import "./EditSaveButton.css";
import React, { useState } from "react";

function EditSaveButton() {
  const [isEditing, setIsEditing] = useState(true);

  const handleClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <button onClick={handleClick} className="edit-save-button">
      {isEditing ? "EDIT" : "SAVE"}
    </button>
  );
}

export default EditSaveButton;
