const expect = require('chai').expect;
const fetch  = require('node-fetch');
 
describe('Fetch', function () {
  it('Debe devolver un objeto JSON', async () => {
    var response = await fetch('http://localhost:5000/items');
    expect(response.status).to.be.equal(200);
    var user = await response.json();
    expect(user).to.be.an('Object');
  });
});