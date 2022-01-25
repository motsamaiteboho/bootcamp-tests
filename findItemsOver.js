function findItemsOver(itemList, threshold){
    var itemsOver20 =[];
    for(var i = 0; i < itemList.length; i++)
    {
      var item = itemList[i];
      if(item.qty > threshold)
      {
        itemsOver20.push(item);
      }
    }
    return itemsOver20;
  }