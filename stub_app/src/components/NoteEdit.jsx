import { useState } from "react";
import axios from "axios";

export default function NoteEdit(props) {
  const { id, title, description } = props.toUpdate;
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(description);

  async function editNote() {
    if (!newTitle && !newDesc) return;
    try {
      const resp = await axios.put(`/notes/${id}`, {
        title: newTitle,
        description: newDesc,
      });
      const newNote = resp.data;
      props.setNotes(
        props.notes.map((note) => (note._id === id ? newNote : note))
      );
    } catch (error) {
      console.log("Error in updating", error);
    }
  }
  return (
    <>
      {props.toggle ? (
        <>
          <div className="text-white m-4 p-4">
            <div className="flex justify-between ">
              <div
                className="text-3xl border-b-2 border-slate-600 font-sans"
                contentEditable={true}
                onInput={(e) => {
                  setNewTitle(e.target.textContent);
                }}
              >
                {title ? title : "New Title"}
              </div>
              <div
                onClick={() => {
                  editNote();
                  props.setToUpdate({});
                  props.setToggle(false);
                }}
                className="flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <div
              className="text-lg mt-4 mx-2 font-mono"
              contentEditable={true}
              onInput={(e) => setNewDesc(e.target.textContent)}
            >
              {description ? description : "New description"}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
