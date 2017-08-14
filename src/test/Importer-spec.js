import EditorUtils from './EditorUtils';
import TestProject from './TestProject';
import Editor from '../Editor';

describe('Importer', () => {
    beforeEach(() => EditorUtils.createTestFile([TestProject.getPath('hello/world.js')]));
    beforeEach(() => {
        spyOn(Editor, 'getWorkspaceFolders').and.returnValue([TestProject.getPath()]);
    });

    it('should import automatically', () => {
        EditorUtils.setText(`'use strict';
import a from 'b';

ASecondImport

function(){};`)
            .then(() => EditorUtils.setCursor(3, 3))
            .then(() => EditorUtils.executeCommand('node-import-resolver-code:import'))
            .then(() => {
                expect(Editor.getText()).toEqual(`'use strict';
import a from 'b';
import ASecondImport from './a-second-import';

ASecondImport

function(){};`);
            });
    });
});