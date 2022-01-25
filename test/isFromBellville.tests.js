describe('Test my isFromBellvie function' , function(){
    it('returns true if a registration number is for Bellville otherwise returns false,Registration numbers for Bellville starts with CY' , function(){
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });
});
/*
describe('Test my isFromBellvie function' , function(){
    it('it should ' , function(){
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });
});
*/