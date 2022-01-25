function countAllPaarl(lstRegs){
    var Regs = lstRegs.split(",");
    var count = 0;
    for(var i= 0; i < Regs.length; i++)
    {
      var temp = Regs[i].trim();
      if(temp.startsWith("CJ"))
      {
        count++;
      }
    }
    return count;
  }