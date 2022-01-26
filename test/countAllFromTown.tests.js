describe('Test my countAllFromTown function' , function(){
    it("it should return '3' when called with string of registration numbers like 'CL 124,CY 567,CL 345, CJ 456,CL 341','CL'." , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)

    });
    it("it should return '1' when called with string of registration numbers like 'CL 124,CY 567,CL 345, CJ 456,CL 341','CL'." , function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        //fromStellies should contains
        assert.equal(fromKuilsriver, 1)
    });

    it("it should return '2' when called with string of registration numbers like 'CL 124,CY 567,CL 345, CJ 456,CL 341, CF 875','CL'." , function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341, CF 875','CF');
        //fromStellies should contains
        assert.equal(fromKuilsriver, 2)
    });
});