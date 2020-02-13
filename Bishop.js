var queen =
{
    position:
    {
        x: 0,
        y: 0
    }

};
function move(num, dir) {
    let temp;
    let temp1
    switch (dir) {
        case "SE":
            temp = queen.position.x + num;
            temp1 = queen.position.y + num;
            if (temp < 8 && temp < 0 && temp1 < 8 && temp1 < 0) {
                console.log("outside boundary SE");
                document.write("outside boundary");
            }
            else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;
        case "NW":
            temp = queen.position.x - num;
            temp1 = queen.position.y - num;
            if (temp < 8 && temp < 0 && temp1 < 8 && temp1 < 0) {
                console.log("outside boundary NW");
                document.write("outside boundary");
            }
            else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;

        case "SW":
            temp = queen.position.x + num;
            temp1 = queen.position.y - num;
            if (temp < 8 && temp < 0 && temp1 < 8 && temp1 < 0) {
                console.log("outside boundary SW");
                document.write("outside boundary");
            }
            else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;
        case "NE":
            temp = queen.position.x - num;
            temp1 = queen.position.y + num;
            if (temp < 8 && temp < 0 && temp1 < 8 && temp1 < 0) {
                console.log("outside boundary NE");
                document.write("outside boundary");
            }
            else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;
        default:
            document.write("Invalid Input");
            break
    }
}
function play1() {
    var a = document.getElementById("value").value;
    var value = a.split(" ");  //split() method is used to split a string into an array of substrings, and returns the new array
    value.forEach(e =>         //forEach() method calls a function once for each element in an array, in order
    {
        let num = Number(e.slice(e.length - 1)); //slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
        let dir = e.slice(0, e.length - 1);
        move(num, dir);
    });
    console.log("Your Position  ->  " + broard[queen.position.x][queen.position.y]);
    document.getElementById("value1").innerHTML = broard[queen.position.x][queen.position.y];
}

var broard = [["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]];
