//Task 1: Tam giác cân
const tamgiac = 5;
for (let i = 1; i <= tamgiac; i++) {
    // Dung lenh for ben duoi neu ko dung text align trong css:
    // for (var k = tamgiac; k > i; k--) {
    //     document.write ('&nbsp;&nbsp')
    // }
    for (let j = 0; j < i * 2 - 1; j++) {
        document.write ('1')
    }
    document.write ('<br />')
}

//Task 2: Lọc giá trị
const myArr = [9, 7, 9, 0, 7, 8, 387, 123, 456]
const kiemtra = (x) => x % 2 == 0; //kiem tra cac gia tri chan le
const inra = myArr.filter(kiemtra); //loc ra cac gia tri chan
console.log(inra); //in ra console

//Task 3: Some random question with condition loop
function task3() {
    
    var person = prompt("What's your name?");//Cau hoi 1
  if (person != null) {
    var ans = prompt("Hello " + person + "! How are you today?"); //cau hoi 2
  } 

    var ans1 = prompt ("Do you wanna eat something?", "yes/no")   //cau hoi 3
  if (ans1 === "yes") {
    alert ("Here! Have some cupcake")
}

    else if (ans1 === "no") {
       var ans2 = prompt ("That's sound sad :( Want to have some drink?", "okay/no") //cau hoi 4
       if (ans2 === "okay") {
           alert ("Let's have some coke!!!")
       }

        else if (ans2 === "no") {
           var ans3 = prompt (":(( What can I do to entertain you?") //cau hoi 5
        }
        alert ("hmm...")
        alert ("okay then")
    }
    
    //lưu giá trị
    const myAnswer = [];
    myAnswer.push (person,ans,ans1,ans2,ans3);
    console.log ("Your answer: " + myAnswer);
}