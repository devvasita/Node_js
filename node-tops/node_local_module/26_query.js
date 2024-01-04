/**
 * req.Query ==>
 *
 *          request obj found in url
 *          query strings are in key value form
 *          start after question mark in any url
 *          if more than one than seprated with ampersand
 *
 * three parts
 *          Route Path : /name=Anjali&subject=Node
 *          Request URL : http://localhost:9000/name="Anjali"&subject=Node
 *          req.query = {name:"dev",subejct:"node"}
 */
