import Note from "../model/Note.js";

export async function getAllNotes(req,res){
    try {
        const note = await Note.find().sort({createdAt: -1});//shows the newest first when all notes are fetched.;
        res.status(200).json(note);
        console.log("All notes are fetched!");

    } catch (error) {
        console.error("The error is : ", error.message);
        res.status(500).json({message: "Error in the getAllNotes controller!"});
    }
}

export async function createNote(req,res){
    try {
        const { title, content} =  req.body;
        const note = new Note({title, content});
        const savedNote = await note.save();
        res.status(201).json(savedNote);

    } catch (error) {
        console.error("The error is: ", error.message);
        res.status(500).json({message: "Error in the createNote controller!"});
    }
}

export async function updateNote(req,res){
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id, 
            {title, content},
            {new : true} //adding this property will show the updated note in the thunderclient response.
        );
        if(!updatedNote) return res.status(404).json({message: "Note with requested Id is not found."});
        res.status(200).json(updatedNote);

    } catch (error) {
        console.error("The error is: ", error.message);
        res.status(500).json({message: "Error in the updateNote controller!"}); 
    }
}

export async function deleteNote(req,res){
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message: "Note with requested Id is not found."})
        res.status(200).json(deletedNote);
        console.log("The note id deleted!");

    } catch (error) {
        console.error("The error is: ", error.message);
        res.status(500).json({message: "Error in the deleteNote controller!"}); 
    }
}


export async function getNoteById(req,res){
    try {
        const fetchedNote =  await Note.findById(req.params.id,);
        if(!fetchedNote) return res.status(404).json({message: "Note with requested Id is not found."})
        res.status(200).json(fetchedNote);
        console.log("The requested note is fetched.");

    } catch (error) {
        console.error("The error is: ", error.message);
        res.status(500).json({message: "Error in the getNoteById controller!"});
    }
}