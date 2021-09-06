function Sidebar({
    folders,
    createFolder,
    deleteFolder,
    activeFolder,
    setActiveFolder,
}) {

    console.log("this is folders:", folders)
    return (
        <div className="sideBarArea">
            <div>
                <div className="sidebarHeading">
                    <h1>List of Folders</h1>
                    <button onClick={createFolder}>+ Add</button>
                </div>

                <div>
                    {folders.map((folder) => (
                        <div className={`folder ${folder.id === activeFolder && "active"}`} onClick={() => setActiveFolder(folder.id)} >
                            < div >
                                <strong>{folder.title}</strong>
                                <button onClick={() => deleteFolder(folder.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </div >
    );
}

export default Sidebar;


