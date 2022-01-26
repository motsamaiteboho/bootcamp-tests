describe('Test my countAllPaarl function' , function(){
    it("it should return '3' when called with string of registration numbers like 'CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123' " , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it("it should return '2' when called with string of registration numbers like 'CJ 345 123, CK 345, CJ 123'" , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
    it("it should return '3' when called with string of registration numbers like 'CJ 345 123, CK 345, CJ 123, CJ 875, CL 891, CJ 218'" , function(){
        assert.equal(4, countAllPaarl('CJ 345 123, CK 345, CJ 123, CJ 875, CL 891, CJ 218'));
    });
});