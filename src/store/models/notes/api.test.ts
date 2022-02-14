
// import { render, screen } from '@testing-library/react';
import { configure, shallow } from 'enzyme'; 

import {
    Note,
    NotesCollection,
    newNote,
} from './interface';

import {
    upsertNote,
    getCollection,
    deleteNote,
} from './api';

describe('Note API ', () => {
  
  let note;
  beforeEach(() => {

  });

  test('should be able add Note', async () => {
    const n:Note = {
        title: 'Test Note',
        content: 'Test Content',
        tags: '#test'
    };
    note = await upsertNote(n);
    expect(note.id).toBeDefined();
    expect('Test Note').toEqual(note.title);
  });

  test('should have the new Note in the collection', async () => {
    const c = await getCollection();
    const n = c.collection?.[note.id];
    console.log('Note from Collection: ', n);
    expect(n).toBeDefined();
  });

  test('should be able to update Note', async () => {
    note.title = 'New Title';
    note.tags = 'New Tags';

    const n = await upsertNote(note);

    expect(note.title).toEqual(n.title);
    expect(note.tags).toEqual(n.tags);
    expect(note.dateModifed).toBeLessThan(n.dateModified || 0);
  });

  test('should be able to delete Note', async () => {
    await deleteNote(note);
    const c = await getCollection();
    const n = c.collection?.[note.id];
    console.log('Is Note Delete... ', n);
    expect(n).toBeUndefined();
  });
});
