function fromWhere(Reg){
  
    if(Reg.startsWith("CY"))
    {
      return "Bellville";
    }
    else if(Reg.startsWith("CJ"))
    {
      return "Paarl"
    }
    else if(Reg.startsWith("CA"))
    {
      return "Cape Town"
    }
    else
    {
      return "Some other place!"
    }
  }