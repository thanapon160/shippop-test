// 1.2 ) ถ้าหากต้องการ copy “array of object” ใน Nodejs มีวิธีการใดบ้าง ยกตัวอย่างมาอย่างน้อย 1 วิธี

const originArray = [{ name: "hello", tel: "1" }, { name: "test", tel: "2" }, { name: "world", tel: "3" }, { name: "mock", tel: "4" }]

// Spread Operator
const copyArray = [...originArray]

// Concat function 
const copyArray2 = originArray.concat()

console.log(copyArray)
console.log(copyArray2)