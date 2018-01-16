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

function permutationEquation(p,n) {
    // Complete this function
    var i,j,k,b=[];
    for(i=0;i<n;i++)
        {
            b[i]=i+1;
            
        }
    for(i=0;i<n;i++)
        {
            for(j=0;j<n;j++)
               {
                  if(b[i]==p[j])
                {
                    
                   k=p.indexOf(p[j])+1;
                    
                    
                    }  
               }
            for(j=0;j<n;j++)
                {
                   if(k==p[j])
                       {
                           console.log((p.indexOf(p[j])+1));
                       }
                } 
           
        }
}

function main() {
    var n = parseInt(readLine());
    p = readLine().split(' ');
    p = p.map(Number);
    permutationEquation(p,n);




}
