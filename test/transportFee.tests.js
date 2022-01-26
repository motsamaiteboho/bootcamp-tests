describe('Test my transportFee function' , function(){
    it("it should return 'R20' fee for morning shift" , function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it("it should return 'R10' fee for afternoon shift" , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it("it should return 'free'  for nightshift shift" , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});