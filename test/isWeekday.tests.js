describe('Test my isWeekday function' , function(){
    it('it should find out if the parameter passed in is a day of the week (ie. Not a weekend day)' , function(){
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Monday'), true);
    });
});