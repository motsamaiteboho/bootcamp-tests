function findItemsOver20(itemList){
  var itemsOver20 =[];
  for(var i = 0; i < itemList.length; i++)
  {
    var item = itemList[i];
    if(item.qty > 20)
    {
      itemsOver20.push(item);
    }
  }
  return itemsOver20;
}