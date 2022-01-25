function mostProfitableDepartment(salesData){
 
    const salesMap = {};
    
    for(var i in salesData)
    {
      const sale = salesData[i];
      salesMap[sale.department] = 0;
    }
    for(var i = 0; i < salesData.length; i++)
    {
      const sale = salesData[i];
      var currentdepartmentotal = salesMap[sale.department];
      currentdepartmentotal += sale.sales;
      salesMap[sale.department] = currentdepartmentotal;
    }
    var currentMaxSales = 0;
    var currentDepartment = "";
    for(const saleDepartment in salesMap){
      var currentDepartmentSales = salesMap[saleDepartment];
      if(currentDepartmentSales > currentMaxSales)
      {
        currentMaxSales = currentDepartmentSales;
        currentDepartment = saleDepartment;
      }
    }
    return currentDepartment;
  }
  function mostProfitableDay(salesData){
   
    const salesMap = {};
    
    for(var i in salesData)
    {
      const sale = salesData[i];
      salesMap[sale.day] = 0;
    }
    for(var i = 0; i < salesData.length; i++)
    {
      const sale = salesData[i];
      var currentdaytotal = salesMap[sale.day];
      currentdaytotal += sale.sales;
      salesMap[sale.day] = currentdaytotal;
    }
    var currentMaxSales = 0;
    var currentDay = "";
    for(const saleDay in salesMap){
      var currentDaySales = salesMap[saleDay];
      if(currentDaySales > currentMaxSales)
      {
        currentMaxSales = currentDaySales;
        currentDay = saleDay;
      }
    }
    return currentDay;
  }