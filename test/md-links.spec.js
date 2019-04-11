const mds = require('../index');

describe('mds', () => {

  it('mds should be a function', () => {
   expect(typeof mds).toBe('function');
  });

  // it('mds should console ', () => {
  //   global.links = { md: jest.fn()}
  //   mds('./README2.md');
  //   expect(links.md).toBeCalled();
  //  });

}); 


//});
//require('./read');

//describe('es una función llamada read', () => { // test si es un objeto

  //it('is a function', () => {
    //expect(typeof window.read).toBe('function');
  //});