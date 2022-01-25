function totalPhoneBill(lstBills)
{
  var bill = lstBills.split(",");
  var totalbill = 0;
  for(var i = 0; i < bill.length; i++)
  {
    var temp = bill[i].trim();
    if(temp == "sms")
    {
      totalbill += 0.65;
    }
    else 
      if (temp == "call")
      {
        totalbill += 2.75;
      }
  }
  
  return "R"+ totalbill.toFixed(2);
}