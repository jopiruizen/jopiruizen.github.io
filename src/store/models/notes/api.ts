import {v4 as uuid } from 'uuid';
import axios from 'axios';
import { logInfo } from '../../../utils/logs';

import { Note, NotesCollection, newNote, newNoteCollection } from './interface';

const NameSpaces = {
    NOTES_COLLECTION: 'notes-collection',
    NOTE_DETAILS : 'note-',
}


/*  THIS API SERVE AS A LOCal storage mOCK for a real API */

export async function getCollection () {
    const NAME_SPACE = NameSpaces.NOTES_COLLECTION
    const now = new Date().getTime();
    const collection = localStorage.getItem(NAME_SPACE);
  
    if (!collection) {
        const newData: NotesCollection = {
            dateCreated: now,
            dateModified: now,
            collection: {},
        };
        localStorage.setItem(NAME_SPACE, JSON.stringify(newData));
        return newData;
    }
    return newNoteCollection(JSON.parse(collection));
}

export async function upsertList (data:NotesCollection) {
    const NAME_SPACE = NameSpaces.NOTES_COLLECTION;
    const now = new Date().getTime();

    let store = localStorage.getItem(NAME_SPACE);

    if (store) {
        store = JSON.parse(store);
        const newList = newNoteCollection(store);
        newList.dateModified = now;
        newList.collection = data.collection;
        localStorage.setItem(NAME_SPACE, JSON.stringify(newList));
     } else {
         const newStore = {
             collection: data.collection,
             dateCreated: now,
             dateModified: now,
         };
         localStorage.setItem(NAME_SPACE, JSON.stringify(newStore));
     }
}


export async function upsertNote (note:Note) {

    if (note.id) {
        console.log('Will update NOte: ', note.id);
        return updateNote(note);       
    } else {
        return createNote(note);
    }
}

export async function upsertToList (note:Note) {
    const nc = await getCollection();
    if (nc.collection && note.id) {
        nc.collection[note.id] = note;
    }
    upsertList(nc);
}

export  async function createNote (note:Note) {
    const now = new Date().getTime();
    const source = {
        ...note,
        id: uuid(),
        dateCreated: now,
        dateModifed: now,
    };
   
    const NAME_SPACE = NameSpaces.NOTE_DETAILS + source.id;
    const n = newNote(source);
    console.log('Created: ', n);
    localStorage.setItem(NAME_SPACE, JSON.stringify(n));
    upsertToList(n);
    return n;
}

export async function updateNote (note) {

    const NAME_SPACE = NameSpaces.NOTE_DETAILS + note.id;
    const c = newNote(note);
    const now = new Date().getTime();
    c.dateModified = now;
    localStorage.setItem(NAME_SPACE, JSON.stringify(c));
    upsertToList(c);
    return c;
}


export async function deleteNote (n:Note) {
    const NAME_SPACE = NameSpaces.NOTE_DETAILS + n.id;
    localStorage.removeItem(NAME_SPACE);
    deleteInCollection(n);
}

export async function deleteInCollection (n:Note) {
    const nc = await getCollection();
    if (nc.collection && n.id) {
        delete nc.collection[n.id];
    }
    upsertList(nc);
}

export async function getClientInfo () {
    const res = await axios.get('https://ipapi.co/json/');
    logInfo('getClientInfo() : ', res.data);
    return res.data;
}
