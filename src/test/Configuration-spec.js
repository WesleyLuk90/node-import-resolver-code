'use babel';
import Configuration from '../Configuration';

describe('Configuration', () => {
    it('should set ignored folders only if defined', () => {
        const config = Configuration.createDefault();
        config.setIgnoredFolders(['a']);
        expect(config.getIgnoredFolders()).toEqual(['a']);
        config.setIgnoredFolders(null);
        expect(config.getIgnoredFolders()).toEqual(['a']);
    });
});
