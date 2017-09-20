/* 
    Simple Server Constructor
*/

// Here we require/import the HTTP module
var http = require("http");

function Server(port, message) {
    var PORT = port;
    
    // Here we create a generic function to handle requests and responses
    function handleRequest(request, response) {
    
        // The below statement is triggered (client-side) when the user visits the PORT URL
        response.end(message);
    }
    // Here we use the Node HTTP package to create our server.
    // We then pass it the handleRequest function to empower it with functionality.
    this.server = http.createServer(handleRequest);

    // Here we start our server so that it can begin listening to client requests.
    this.server.listen(PORT, function() {
    
        // The below statement is triggered (server-side) when a user visits the PORT URL
        console.log("Server listening on: http://localhost:%s", PORT);
    
    });
}
var goodServer = new Server(7000, "You can do it!");
var badServer = new Server(
    7500, 
    "Your mother was a hampster and your father smelled of elderberries!"
);


