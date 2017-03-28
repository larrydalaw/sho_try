var fixtures = require('./fixtures');

describe('Neww relationships', function () {
    before(fixtures.fakeserver.init);
    after(fixtures.fakeserver.deinit);
    beforeEach(fixtures.testData.createNewwTestData);
    beforeEach(fixtures.testData.setNewwIds);

});
