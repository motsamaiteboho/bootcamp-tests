describe('Test my yearsAgo function' , function(){
    it("it should return '46' when called with '1946'", function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });
    it("it should return '22' when called with '2000'", function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
    it("it should return '25' when called with '1997'", function(){
        assert.equal((new Date().getFullYear() - 1997), yearsAgo(1997))
    });
});