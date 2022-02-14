/*
 * Rematch is Redux best practices without the boilerplate.
 * See rematch -> https://rematchjs.org/docs/getting-started/installation
 * Note: In rematch, effects is the place to handle async actions, like making API Calls.
 * Effects will be attached at the store during the call to rematch.init
 * 
 * Note: To Have a seperate effects file, use javascript because type script is not able to capture the context/scope of the owning objects of the effects.
 * But for the safe of clean code / clean architecture, effects file should be on a separate file.
 * 
 */

import {
    getCollection,
    upsertNote,
    deleteNote as deleteNoteAPI,
} from './api';


import { logInfo } from '../../../utils/logs';

import { dispatch } from '../..';
 

export async function getNotesList() {
    logInfo('getNotesList()...');
    this.setIsLoading(true);
    const nc = await getCollection();
    logInfo('Notes Colection Data: ', nc);
    const list = Object.values(nc.collection);
    logInfo('List : ', list);
    this.setNotesList(list);
}

export async function getNoteDetails(id) {

}

export async function createUpdateNote (note) {
    logInfo('Will Create and Update Note: ', note);
    upsertNote(note);
}

export async function deleteNote (note) {
    await deleteNoteAPI(note);
}