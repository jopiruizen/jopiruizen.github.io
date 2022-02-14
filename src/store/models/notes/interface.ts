

export interface Note {
    id?: string,
    title?: string,
    tags?: string,
    content?: string,
    dateCreated?: number,
    dateModified?: number,
}

export interface NotesCollection {
    collection?: { [key: string]: Note | undefined; } | {},
    dateCreated?: number,
    dateModified?: number,
}

 
export interface NotesState {
    noteDetails?: Note;
    notesCollection?: NotesCollection,
    notesList?: [Note] | [any] | [] ,
    isLoading?: boolean,
}


export function newNote (obj:any): Note {
    const n:Note = {
        ...obj,
    };
    return n;
}

export function newNoteCollection (obj:any): NotesCollection {
    const nl:NotesCollection = {
        ...obj,
    };
    return nl;
}