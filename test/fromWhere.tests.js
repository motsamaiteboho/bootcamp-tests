describe('Test my fromWhere function' , function(){
    it("it should return 'Bellville'  town when called with 'CY'" , function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it("it should return 'Paarl' town when called with 'CJ'" , function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });
    it("it should return 'Cape Town'  when called with 'CA'" , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it("it should return 'Some other place!'  when called with 'CC'" , function(){
        assert.equal(fromWhere('CC'), 'Some other place!');
    });
});