import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Note from "./components/notes/note";
import Footer from "./components/footer/footer";
import notes from "./notes";

function Print(note) {
  return <Note key={note.id} title={note.title} content={note.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(Print)}
      <Footer />
    </div>
  );
}

export default App;
