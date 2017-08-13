'use babel';

import path from 'path';
import RootFolderWalker from '../RootFolderWalker';
import TestProject from './TestProject';
import Editor from '../Editor';

describe('RootFolderWalker', () => {
    it('should find the root folder', () => {
        const walker = RootFolderWalker.fromFile(TestProject.getPath('nested/non-exist/file.js'));
        const expectedPath = TestProject.getPath();

        return walker.getRootFolder()
            .then((folder) => expect(folder).toEqual(expectedPath));
    });

    it('should return the default on failure', () => {
        const walker = RootFolderWalker.fromFile('/path-that-does-not-exist/a/b/c/d');
        const expectedPath = path.dirname(__dirname);

        spyOn(Editor, 'getWorkspaceFolders').and.returnValue([path.dirname(__dirname)]);

        return walker.getRootFolder()
            .then((folder) => expect(folder).toEqual(expectedPath));
    });
});