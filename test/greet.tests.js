describe('Test my greet function' , function(){
    it('it should return "Hello, Teboho", when called with "Teboho"' , function(){
        assert.equal("Hello, Teboho",greet("Teboho"));

    });

    it('it should return "Hello, Bob", when called with "Bob"' , function(){
        assert.equal( 'Hello, Bob',greet('Bob'));
    });
    
});