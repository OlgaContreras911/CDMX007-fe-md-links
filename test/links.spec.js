const mdlinksB = require('../links').mdlinksB;


describe("mdlinksB, consolea links en archivos md",()=>{


    it('should be a function', () => {
        expect(typeof mdlinksB).toBe('function');
       });

    it('should console log links, 4 links', () => {
        const data = '## hola- [Node.js](https://nodejs.org/en/).- [Node.js](https://nodejs.org/en/).![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg) [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher/hola)a'
        global.console = {
            log: jest.fn()
        };
        mdlinksB(data)
        expect(console.log).toBeCalledWith('match', ['https://nodejs.org/en/',
            'https://nodejs.org/en/',
            "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
            'https://en.wikipedia.org/wiki/Caesar_cipher/hola'
        ]);
    });    

})