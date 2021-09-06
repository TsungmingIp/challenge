import { useState, useEffect } from "react"

import uuid from "react-uuid";
// need to link the active folder to docs state

function Folders({ activeFolder, folders, deleteDoc, activeDoc, setActiveDoc }) {

    console.log("passed active folder123", activeFolder)
    const [docs, setDocs] = useState([]);

    const createDocument = () => {

        const newDocument = {
            [uuid()]: {
                docTitle: "Untitled Document new",
                docContent: "Start Writing Here",
                docLastMod: new Date().toLocaleDateString('en-US'),
            }
        };

        setDocs({ ...newDocument, ...docs });

        console.log("docs:", docs);
        let docKeys = Object.keys(docs);
        console.log("docs oK:", Object.keys(docs));

    }

    return (

        <div className="FoldersArea" >
            {activeFolder !== undefined ? (
                <div>
                    <h1>Folders</h1>
                    <h2>FolderName:{activeFolder?.title ?? "Not loaded yet"}</h2>

                    <button onClick={createDocument}>create document</button>

                    <div>
                        <div>
                            {
                                Object.entries(activeFolder.documents).map(([key, value], i) => (
                                    <div className={`note ${key === activeDoc && "active"}`}
                                        onClick={() => setActiveDoc(key)}>
                                        < div >
                                            <strong>{value.docTitle}</strong>
                                            <strong>{value.docLastMod.toString()}</strong>
                                            <button onClick={() => deleteDoc(value.id)}>Delete</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div >
            ) : (
                <div>
                    <h1>Folders</h1>
                    <h2>"Nothing to load"</h2>
                </div>
            )}
        </div >

    );
};


export default Folders;