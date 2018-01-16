process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function camelcase(s) {
    // Complete this function
    var i,count=0;
    for( i=1;i<s.length;i++)
        {
             if(s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90)
                 {
                     count++;
                 }
        }
   return(count+1);
}

function main() {
    var s = readLine();
    var result = camelcase(s);
    process.stdout.write("" + result + "\n");

}
