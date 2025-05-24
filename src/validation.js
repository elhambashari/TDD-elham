

function isCartItem(obj) { 

	return     typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    typeof obj.id === 'number' &&
    'amount' in obj &&
    typeof obj.amount === 'number' &&
    'item' in obj &&
    typeof obj.item === 'object' &&
    obj.item !== null
  
}


function isProduct(obj) {
	return typeof obj==="object" && obj!== null &&
	 'id' in obj &&
	 typeof obj.id === 'number' &&
	  'name' in obj &&
	  typeof obj.name === 'string'&& 
	  'price'in obj &&
	   typeof obj.price==='number';
}


export { isCartItem, isProduct }
