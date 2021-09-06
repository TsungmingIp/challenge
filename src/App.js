import { useState } from "react";
//use uuid as a function to gene random id e.g. uuid()
import uuid from "react-uuid";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Folders from "./components/Folders";
import DocumentArea from "./components/DocumentArea";

function App() {
  const [folders, setFolders] = useState([]);
  const [activeFolder, setActiveFolder] = useState(false);
  const [activeDoc, setActiveDoc] = useState(false);

  // console.log("this is active Docs******", activeDoc)

  const createFolder = () => {
    // console.log("add");
    const newFolder = {
      id: uuid(),
      title: "Untitled Folder" + Math.floor(Math.random() * 100),
      documents: {

        [uuid()]: {
          docTitle: "Untitled Document",
          docContent: "Start Writing Here",
          docLastMod: new Date().toLocaleDateString('en-US'),
        },

        [uuid()]: {
          docTitle: "Untitled Document2",
          docContent: "Start Writing Here2",
          docLastMod: new Date().toLocaleDateString('en-US'),
        },

        [uuid()]: {
          docTitle: "Untitled Document3",
          docContent: "Start Writing Here3",
          docLastMod: new Date().toLocaleDateString('en-US'),
        }

      }
    };
    setFolders([newFolder, ...folders]);

    // let newDocID = Object.keys(newFolder.documents)[0]
    // console.log("object keys of new folder", newDocID)

  };

  const deleteFolder = (idToDelete) => {
    setFolders(folders.filter((folder) => folder.id !== idToDelete));
  };

  const deleteDoc = (idToDelete) => {
    setFolders(folders.filter((folder) => folder.id !== idToDelete));
  }

  const getActiveFolder = () => {
    console.log("active folder is selected", activeFolder)
    return folders.find((folder) => folder.id === activeFolder)
  }

  const getActiveDoc = () => {

    // console.log("find the folder ID here", folders.find(key))
    return folders.find((key) => key === activeDoc);

  }


  // const onUpdateDoc = () => {
  //   const upDatedDocArray = (folder.documents).map
  // }

  return (
    <div>
      <Header />
      <div className="parentContainer">
        <Sidebar
          folders={folders}
          createFolder={createFolder}
          deleteFolder={deleteFolder}
          activeFolder={activeFolder}
          setActiveFolder={setActiveFolder}
        />
        <Folders
          folders={folders}
          activeFolder={getActiveFolder()}
          deleteDoc={deleteDoc}
          activeDoc={activeDoc}
          setActiveDoc={setActiveDoc}
        //createDocument={createDocument}

        />
        <DocumentArea
          activeDoc={activeDoc}
          activeFolder={getActiveFolder()}
          activeDoc={getActiveDoc()}

        />
      </div>
    </div>
  );
}

export default App;
