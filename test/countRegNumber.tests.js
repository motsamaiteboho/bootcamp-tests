describe('Test my countRegNumber function' , function(){
    it("it should return '3' when called with string parameter that looks like this 'CA 182736,CY 523519,CJ 812328'" , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });
    it("it should return '1' when called with string parameter that looks like this 'CA 182736'" , function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
    it("it should return '5' when called with string parameter that looks like this 'CA 182736,CY 523519,CJ 812328,CL 7896215,CY 562874'" , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328,CL 7896215,CY 562874')
        assert.equal(regCount, 5);
    });
});