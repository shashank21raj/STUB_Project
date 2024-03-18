import { useEffect, useState } from "react";
import axios from "axios";
import NoteEdit from "../components/NoteEdit";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/reducer/userSlice";

export default function Notes() {
  const [toggle, setToggle] = useState(false);
  const [notes, setNotes] = useState([]);
  const [toUpdate, setToUpdate] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.post("/notes", currentUser.notes).then((response) => {
      setNotes(response.data);
    });
  }, []);

  async function addNote(e) {
    e.preventDefault();
    const newNote = {
      title: "",
      description: "",
    };
    try {
      const resp = await axios.post(`/notes/t`, newNote);
      const addedNote = resp.data;
      axios
        .put(`/user/notes/${currentUser._id}`, {
          NotesId: addedNote._id,
        })
        .then((response) => {
          console.log(response);
          dispatch(updateUser(response.data));
        });
      setNotes([...notes, addedNote]);
    } catch (error) {
      console.log("Error creating Note", error);
    }
  }

  async function deleteNote(id) {
    try {
      await axios.delete(`/notes/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.log("Error deleting Note", error);
    }
  }

  return (
    <>
      <div className="shadow-md h-[87vh] rounded-2xl overflow-auto bg-slate-900 no-scrollbar">
        {toggle ? (
          <>
            <div className="m-4">
              <NoteEdit
                toggle={toggle}
                setToggle={setToggle}
                setToUpdate={setToUpdate}
                toUpdate={toUpdate}
                notes={notes}
                setNotes={setNotes}
              ></NoteEdit>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between my-2  text-white border-b-2 border-slate-800 ">
              <div className="text-4xl mx-4 ">Notes</div>
              <div>
                <button onClick={addNote}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 mx-4 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-row flex-wrap p-2">
              {notes.length > 0 &&
                notes.map((note) => (
                  <>
                    <div className="rounded-2xl shadow-md  m-4 h-2/6 w-72 bg-slate-800 text-white ">
                      <div className="flex justify-between">
                        <div
                          className="text-2xl m-2 border-b-2 border-slate-700 font-strong"
                          onClick={() => {
                            setToUpdate({
                              id: note._id,
                              title: note.title,
                              description: note.description,
                            });
                            setToggle(true);
                          }}
                        >
                          {note.title ? note.title : "Title"}
                        </div>
                        <button
                          className="mx-2"
                          onClick={() => deleteNote(note._id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                      <div
                        className="text-ellipsis line-clamp-5 mx-2 p-2"
                        onClick={() => {
                          setToUpdate({
                            id: note._id,
                            title: note.title,
                            description: note.description,
                          });
                          setToggle(true);
                        }}
                      >
                        {note.description ? note.description : "Description"}
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
