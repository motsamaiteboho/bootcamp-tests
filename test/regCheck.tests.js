describe('Test my regCheck function' , function(){
    it("it should return 'true' when called with 'DC 55 YU GP' along with 'GP'" , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it("it should return 'false' when called with 'DC 55 YU GP' along with 'EC'" , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });
    it("it should return 'true' when called with '5566 L' along with 'L'" , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });
    it("it should return 'false' when called with '5566 L' along with 'M'" , function(){
        assert.equal(regCheck('5566 L', 'M'), false);
    });
});