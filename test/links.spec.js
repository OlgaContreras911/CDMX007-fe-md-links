const mdlinksJust = require('../links').mdlinksJust;
const mdlinksStats = require('../links').mdlinksStats;
const mdlinksValidate = require('../links').mdlinksValidate;
const fetchData = require('../fetch.js').fetchData;

describe("mdlinksJust, consolea links en archivos md",()=>{


    it('should be a function', () => {
        expect(typeof mdlinksJust).toBe('function');
       });

    it('should console log links, 4 links', () => {
        const data = '## hola- [Node.js](https://nodejs.org/en/).- [Node.js](https://nodejs.org/en/).![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg) [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher/hola)a'
        global.console = {
            log: jest.fn()
        };
        mdlinksJust(data)
        expect(console.log).toBeCalledWith('match', ['https://nodejs.org/en/',
            'https://nodejs.org/en/',
            "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
            'https://en.wikipedia.org/wiki/Caesar_cipher/hola'
        ]);
    });    

})

describe("mdlinksStats, cuenta los links unicos en un archivo",()=>{


    it('should be a function', () => {
        expect(typeof mdlinksStats).toBe('function');
       });

    it('should console log links, 4 links', () => {
        const data = '## hola- [Node.js](https://nodejs.org/en/).- [Node.js](https://nodejs.org/en/).![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg) [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher/hola)a'
        global.console = {
            log: jest.fn()
        };
        mdlinksStats(data)
        expect(console.log).toBeCalledWith("Únicos:","3");
    });    

})

describe("mdlinksValidate, cuenta los links unicos en un archivo",()=>{


    it('should be a function', () => {
        expect(typeof mdlinksValidate).toBe('function');
       });

    //it('should console log links, 4 links', () => {
    //const data = '## hola- [Node.js](https://nodejs.org/en/).- [Node.js](https://nodejs.org/en/).![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg) [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher/hola)a'
      //  global.console = {
        //    log: jest.fn()
       // };
       // mdlinksValidate(data)
        //expect(console.log).toBeCalledWith("Link name: 42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6 link: https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg status: 200 √ OK")
        
    //});    

})
describe("fetchFiles, obtiene fetch de data",()=>{


    it('should be a function', () => {
        expect(typeof fetchData).toBe('function');
       });  

})



