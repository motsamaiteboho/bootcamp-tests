describe('Test my isWeekday function' , function(){
    it("it should return 'false' when called with 'Saturday'" , function(){
        assert.equal(isWeekday('Saturday'), false);
    });
    it("it should return 'true' when called with 'Monday'" , function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it("it should return 'false' when called with 'Sunday'" , function(){
        assert.equal(isWeekday('Sunday'), false);
    });
});