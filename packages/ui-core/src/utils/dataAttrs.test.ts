import filterDataAttrs from './dataAttrs';

describe('filterDataAttrs', () => {
    it('should return correct attributes', () => {
        const correctAttrs = {
            'data-test': 'test',
            'data-test-test': 'test',
        };
        const incorrectAttrs = {
            'Data-test': 'test',
            'test-data-test': 'test',
            'test-data': 'test',
            'dataTest': 'test',
            'testTest': 'test',
        };
        const filteredAttrs = filterDataAttrs({
            ...correctAttrs,
            ...incorrectAttrs,
        });

        expect(filteredAttrs).toEqual(correctAttrs);
    });

    it('should return empty object with incorrect params', () => {
        const incorrectParams = [undefined, null, [], () => {}, 'test', 123];

        incorrectParams.forEach((param: any) => {
            expect(filterDataAttrs(param)).toEqual({});
        });
    });
});
