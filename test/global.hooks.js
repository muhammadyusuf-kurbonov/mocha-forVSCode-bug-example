module.exports.mochaHooks = {
    async afterEach() {
        console.log('Some hook there')
    },

    async beforeAll() {
        console.log('Scaffold app');
    }
};
