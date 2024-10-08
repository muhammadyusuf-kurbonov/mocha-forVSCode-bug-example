describe('Example test', () => {

    before(() => {
        throw new Error('before');
    });

    it('test example', () => {
        console.log('Started and passed');
    });
    it.skip('Skipped test', () => {});
    it('empty test');
});
