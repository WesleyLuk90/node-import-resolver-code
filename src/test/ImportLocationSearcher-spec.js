import ImportLocationSearcher from '../ImportLocationSearcher';

describe('ImportLocationSearcher', () => {
    function expectImportLocation(source, location) {
        it(`should determine the insert location for ${source} as ${location}`, () => {
            const searcher = ImportLocationSearcher.fromSource(source);
            expect(searcher.getLocation()).toEqual(location);
        });
    }

    expectImportLocation('', [0, 0]);

    expectImportLocation(`
import hello from 'world';

function done() {}
`, [2, 0]);

    expectImportLocation(`
import hello from 'world';

import done from 'things';

function done() {}
`, [4, 0]);

    expectImportLocation(`
        // some comment
//goes here
import hello from 'world';

import done from 'things';

function done() {}
`, [6, 0]);

    expectImportLocation(`
        /**
        its a comment
        **/
import hello from 'world';

function done() {}
`, [5, 0]);

    expectImportLocation(`
'use strict';
'use data'
import hello from 'world';

function done() {}
`, [4, 0]);

    expectImportLocation(`
import hello from 'world';
require('a');
const c = require('c');

function done() {}
`, [4, 0]);
});
