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

function super_reduced_string(s){
    // Complete this function
    var i;
        for(i=1;i<s.length;i++)
        {
            if(s.charAt(i)==s.charAt(i-1))
                {
                   s=s.substring(0,i-1)+s.substring(i+1);
                    i=0;
                }
         }
    if(s.length==0)
        {
            console.log('Empty String');
        }
    else
        {
            console.log(s);
        }     
}

function main() {
    var s = readLine();
    super_reduced_string(s);
   
}
