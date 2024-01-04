// statusCode(required) = It represents the HTTp status code of the response , indicating the outcome of the request (e.g , 200 success, 404 for not found etc)

// stausMessage (optional ) : it allows to provide a custom staus message that corresponds to the status code . It not provided , a default message will be sent based on the status code.

// headers (optional) : It is an object containing additional headres to be sent with the response .

//  response.writeHead(200,{'Custom-Header':'value'});
//  res.writeHead(200,{'Content-Type':'text/html'})

/**
 * Modules :
 *          Modules in collection of code. Modules can be single file of  collection
 *                                                                       files or folders ,
 *            ==> by that we can reduce our code and its provide reusability
 *
 *  3 Types :
 * 1 ) Core module
 * 2 ) Local Module
 * 2 ) Third Party Module
 */
