describe('Test my isFromBellvie function' , function(){
    it("it should return 'true' when called with 'CY 123' " , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
    it("it should return 'false' when called with 'CJ 123' " , function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });
    it("it should return 'true' when called with 'CY 783' " , function(){
        assert.equal(isFromBellville('CY 783'), true);
    });
});
