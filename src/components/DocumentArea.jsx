function DocumentArea({ activeFolder, activeDoc }) {

    const OnEditDoc = (key, value) => {

    }

    return (
        <div className="documentArea">
            {activeFolder !== undefined && activeFolder.documents !== undefined && activeDoc !== false ? (

                <div>
                    {
                        Object.entries(activeFolder.documents).map(([key, value], i) => (

                            /* /* console.log("passed by documnets main", value),
                            console.log("passed by key main", key),
                            console.log("passed by activeDoc main", activeDoc),
                            console.log("passed by i main", i),
                            console.log("passed by activeFolder main", activeFolder.documents), */

                            <div >
                                <div>
                                    <input type="text" id="docTitle"
                                        value={value.docTitle}
                                        onChange={(e) => OnEditDoc("title", e.target.value)}
                                        autoFocus

                                    />

                                    <textarea id="docBody"
                                        placeholder="write document here..."
                                        onChange={(e) => OnEditDoc("content", e.target.value)}
                                        value={value.docContent}

                                    />
                                    <p>this is the key {key}</p>

                                </div>

                                <p>documents are shown here</p>

                                <div>
                                    <p>note preview</p>
                                    <h1 className="preview-title">{value.docTitle} </h1>
                                    <div className="preview-doc">{value.docContent}</div>
                                </div>
                            </div>


                        ))
                    }
                </div>
            )
                : (
                    <div>
                        <p>no notes</p>
                    </div>
                )
            }


        </div >
    )
}

export default DocumentArea;