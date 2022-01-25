describe('Test my transportFee function' , function(){
    it("it should  the right price based on the shift you are working. If you are working 'morning' shift the transport cost is R20, 'afternoon' shift is R10 as your work provides transport back home. If you work 'nightshift' you pay nothing" , function(){
        assert.equal(transportFee('morning'), 'R20');
        assert.equal(transportFee('afternoon'), 'R10');
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});