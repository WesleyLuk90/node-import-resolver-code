import ConfigurationLoader from '../ConfigurationLoader';
import Configuration from '../Configuration';
import TestProject from './TestProject';

describe('ConfigurationLoader', () => {
    it('should load configuration', () => {
        const loader = ConfigurationLoader.fromFilePath(TestProject.getPath('require/something/somejsfile.js'));

        return loader.load()
            .then((config) => {
                expect(config instanceof Configuration).toBe(true);
                expect(config.getImportStyle()).toBe('require');
                expect(config.getIgnoredFolders()).toEqual(['node_modules', 'spec']);
                expect(config.getRootFolder()).toEqual(TestProject.getPath('./'));
            });
    });
});