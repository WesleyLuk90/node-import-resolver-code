'use babel';

import Editor from './Editor';
import EditorPosition from './EditorPosition';

const tokenMatcher = /[a-z_$0-9]/i;
const maxScan = 100;

export default class TokenFinder {

    getToken() {
        const position = Editor.getEditorCursorStart();
        const token = this.scanReverse(position) + this.scanForward(position);
        if (this.isEmpty(token)) {
            return null;
        }
        return token;
    }

    isEmpty(token) {
        return token.length === 0;
    }

    scanForward(startCursor) {
        return this.scan(startCursor, c => this.nextCursor(c), (o, c) => o + c);
    }

    nextCursor(cursor) {
        return new EditorPosition(cursor.row, cursor.column + 1);
    }

    scanReverse(startCursor) {
        return this.scan(startCursor, c => this.previousCursor(c), (o, c) => c + o);
    }

    previousCursor(cursor) {
        return new EditorPosition(cursor.row, Math.max(cursor.column - 1, 0));
    }

    scan(initialCursor, cursorNextFunction, appendFunction) {
        let thisCursor = initialCursor;
        let nextCursor = cursorNextFunction(thisCursor);
        let output = "";
        for (let i = 0; i < 100; i++) {
            const character = Editor.getTextFromRange(thisCursor, nextCursor);
            if (!character.match(tokenMatcher)) {
                return output;
            }
            output = appendFunction(output, character);
            thisCursor = nextCursor;
            nextCursor = cursorNextFunction(thisCursor);
        }
        throw new Error(`Scanned ${maxScan} characters but could not find the end of the token`);
    }
}
