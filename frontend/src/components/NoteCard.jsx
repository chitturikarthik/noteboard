import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router"
import { formatDate } from "../lib/utils";

const NoteCard = ({note}) => {
  return (
    <Link 
        to={`/note/${note._id}`}
        className="card bg-base-100 hover:shadow-xl transition-all duration-200 "
    >
        <div className="card-body bg-base-300 rounded-lg">
            <h3 className="card-title text-base-content">{note.title}</h3>
            <p className="text-base-content/70 line-clamp-3">{note.content}</p>
            <div className="card-actions justify-between items-center mt-4">
                <span className="text-sm text-base-content/60">
                    {formatDate( new Date(note.createdAt))}
                </span>
                <div className="flex items-center gap-1">
                    <PenSquareIcon className="size-5" />
                    <button className="btn btn-ghost text-error">
                        <Trash2Icon className="size-5"/>
                    </button>
                </div>
            </div>
        </div>
    
    </Link>
  );
}

export default NoteCard