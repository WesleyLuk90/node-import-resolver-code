import path from 'path';

export default class TestProject {
    static getPath(relativePath) {
        return path.join(__dirname, '../../test-project', relativePath);
    }
}