let employee = {
    name: 'Chanel',
    streetAddress: '9 Academy St'
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
   const newObj = Object.assign({}, obj);
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}
