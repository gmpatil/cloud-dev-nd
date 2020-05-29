import  express,  { Request, Response } from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import fs from 'fs';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  app.get( "/filteredimage", async (req: Request, res: Response) => {
    const {image_url} = req.query ;
    if (image_url) { 
      filterImageFromURL(image_url).then ( (imagePath)=> {

        res.status(200).sendFile(imagePath, function (err: Error) {
          try {
            fs.unlinkSync(imagePath);
          } catch(ex) {
            console.log(`Error removing file ${imagePath}: ${ex} `); 
          }
        }) ;

      }).catch( (ex) =>  {
        //console.log(`Error filtering image  ${image_url}: ${ex} `); 
        res.status(422).send({"message": `Error filtering image: ${image_url}:${ex}`} );        
      });

    } else {
      res.status(400).send({"message": "try GET /filteredimage?image_url={{}}"} );
    }
  } );  

  /**************************************************************************** */  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();