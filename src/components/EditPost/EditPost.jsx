import { useState } from "react";

const EditPost = ({ originalInput, onSave, onCancel }) => {
  const [editedInput, setEditedInput] = useState(originalInput);

  const handleInputChange = (e) => {
    setEditedInput(e.target.value);
  };

  const handleSaveClick = () => {
    onSave(editedInput);
  };

  const handleCancelClick = () => {
    onCancel();
  };

  return (
    <div className="editPost">
      <textarea
        className="editTextarea"
        value={editedInput}
        onChange={handleInputChange}
      />
      <div className="editActions">
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>
  );
};

export default EditPost;



