import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { db } from "../firebase_config";
import { doc, setDoc } from "firebase/firestore";
import "../App.css";

function TextEditor() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const quillRef = useRef<any>(null);
  const documentRef = doc(db, "documents", "example-doc");

  // Track if a change was made by the local user

  // Save content to Firestore with throttle

  const saveContent = () => {
    if (quillRef.current) {
      const content = quillRef.current.getEditor().getContents();
      console.log("Saving content to db:", content);
      setDoc(documentRef, { content: content.ops }, { merge: true })
        .then(() => console.log("Content saved"))
        .catch(console.error);
    }
  };

  useEffect(() => {
    if (quillRef.current) {
      // Load initial content from Firestore

      // Listen for Firestore document updates in real-time

      // Listen for local text changes and save to Firestore
      const editor = quillRef.current.getEditor();
      editor.on("text-change", () => {
        
        setIsEditing(true);
        saveContent();

        // Reset editing state after 5 seconds of inactivity
        setTimeout(() => setIsEditing(false), 5000);
      });
    }
  }, []);

  return (
    <div className="google-docs-editor">
      <ReactQuill ref={quillRef} />
    </div>
  );
}

export default TextEditor;
