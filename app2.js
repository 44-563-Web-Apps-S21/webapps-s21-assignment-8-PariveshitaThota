const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> table </title> </head>')
      res.write('<body>')
      res.write('<table>')
      res.write('<tr><th>LOCATION</th>')
      res.write('<th>Hours</th><th>Amount</th></tr>') 
      res.write('<tr><td>NewYork</td><td>10</td><td>300</td></tr>')   
      res.write('</table>')

      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})