// 1.1 ) เขียน function แสดงค่าทาง console โดย function รับ parameter 2 ตัว ได้แก่
// - firstName: String
// - lastName: String

function shippop(firstName, lastName) {
  if (typeof firstName !== 'string') return console.log("firstName should be string")
  if (firstName === "Shippop") return console.log("Best Online Shipping Platform")
  if (typeof lastName !== 'string') return console.log("lastName should be string")
  return console.log(`Hello Shippop, My name is ${firstName} ${lastName}`)
}

shippop("hello", "world");
shippop("Shippop")
shippop(555)
shippop(444 , 444)