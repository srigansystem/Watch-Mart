
//import path from 'path';
export async function GET(req,res){
  try {
    const fileContents =await readDatafile();
    return new Response(JSON.stringify({ fileContents }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    // Log the error for debugging
    //console.error("Error reading or parsing file:", error);

    // Return a 500 response with the error message
    return new Response(JSON.stringify({ error: "Server Error" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
export async function POST(req){
    // Read the data from the request body
    const file =await req.json();  // Access the body sent by the client gtd
    //console.log(file);
    
    // Check if the body is empty
    if (!file) {
      return new Response(JSON.stringify({ error: 'No data revfgb4dceived in the request body'} ));
    }

    try {
      datasheet=file;
      // Return success response
      return new Response(JSON.stringify({ message: 'File written successfully' }));
    } catch (error) {
      console.error('Error writing file:', error);
      return new Response(JSON.stringify({ error: 'Failed to write file' }));
    }
}
export async function PUT(req,res){

  try {
    const data=await req.json();
    let jsondata=datasheet
    //console.log(fulldata[0].id);
    jsondata.forEach(dict => {
    //console.log("sk",dict.id,data.id);
    if(dict.id==data.id){
      dict.name=data.name;
        dict.image=data.image;
        dict.details=data.details;
        dict.price=data.price;
        dict.stock=data.stock;
        dict.offer=data.offer;
        dict.currentprice=data.currentprice;
      console.log(dict);
    }
    });
      datasheet=jsondata
      return new Response(JSON.stringify({ message: 'File written successfully' }));
    } catch (error) {
      console.error('Error writing file:', error);
      return new Response(JSON.stringify({ error: 'Failed to update file' }));
    }
  }
//user defined function for read the file
export async function readDatafile(){

  const response=datasheet;
  return response;
}
//dataset
export var datasheet=[
  {
    "id": 1,
    "name": "Rolex Submariner",
    "details": "Stainless Steel, Automatic Movement",
    "price": 100000,
    "image": "https://watchingelegance.com/wp-content/uploads/2019/10/Rolex-Submariner-Date-40mm-116618LN.png",
    "stock": "11",
    "offer":20,
    "currentprice":50000,
  },
]