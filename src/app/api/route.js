
//import path from 'path';
export async function GET(req,res){
  try {
    const fileContents =await readDatafile();

    // Parse the file contents to JSON
    //const data =await JSON.parse(fileContents);
    // Return a successful response with the data
    //console.log(data);
    
    return new Response(JSON.stringify({ fileContents }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    // Log the error for debugging
    console.error("Error reading or parsing file:", error);

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
    console.log(file);
    
    // Check if the body is empty
    if (!file) {
      return new Response(JSON.stringify({ error: 'No data revfgb4dceived in the request body'} ));
    }

    try {
      // const filePath = "D:/WatchMarket/sellingplatform/src/app/database/DB.json";  // Define file path

      // // Write data to the file (Uncomment below if needed)
      // fs.writeFileSync(filePath, JSON.stringify(file, null, 2), 'utf-8');
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
    //console.log(data);
    //const fileContents =datasheet
    //console.log(fileContents);
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
      console.log(dict);
    }
    });
      // const filePath = "D:/WatchMarket/sellingplatform/src/app/database/DB.json";  // Define file path

      // // Write data to the file (Uncomment below if needed)
      // fs.writeFileSync(filePath, JSON.stringify(jsondata, null, 2), 'utf-8');
      // // Return success response
      datasheet=jsondata
      return new Response(JSON.stringify({ message: 'File written successfully' }));
    } catch (error) {
      console.error('Error writing file:', error);
      return new Response(JSON.stringify({ error: 'Failed to update file' }));
    }
  }
export async function readDatafile(){

  const response=datasheet;
  //const response=fs.createReadStream(file);
  //console.log(response);
  
  return response;
}
export var datasheet=[
  {
    "id": 1,
    "name": "Rolex Submariner",
    "details": "Stainless Steel, Automatic Movement",
    "price": "1,00,000",
    "image": "https://watchingelegance.com/wp-content/uploads/2019/10/Rolex-Submariner-Date-40mm-116618LN.png",
    "stock": "11"
  },
  {
    "id": 2,
    "name": "Omega Seamaster",
    "details": "Swiss Movement, Water Resistant",
    "price": 95000,
    "image": "https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg",
    "stock": 20
  },
  {
    "id": 3,
    "name": "Tag Heuer Carrera",
    "details": "Chronograph, Automatic, Luxury Watch",
    "price": 88000,
    "image": "https://content.thewosgroup.com/productimage/17381901/17381901_2.jpg?impolicy=zoom",
    "stock": 12
  },
  {
    "id": 4,
    "name": "Fossil Gen 5 Smartwatch",
    "details": "Smart Features, Bluetooth Enabled",
    "price": 18995,
    "image": "https://cdna.lystit.com/photos/fossil/ffd82c48/fossil--Gen-5e-Smartwatch-Rose-Gold-tone-Stainless-Steel.jpeg",
    "stock": 13
  },
  {
    "id": 5,
    "name": "Casio G-Shock",
    "details": "Shock Resistant, Digital Display",
    "price": 6500,
    "image": "https://i5.walmartimages.com/asr/3e7b703b-5452-4849-b42c-c738eb9c5468_2.8dd3ec6f656ab0f05a474ad69534f72a.png",
    "stock": 4
  },
  {
    "id": 6,
    "name": "Timex Weekender",
    "details": "Classic Design, Analog Display",
    "price": 3999,
    "image": "https://watchingelegance.com/wp-content/uploads/2019/10/Rolex-Submariner-Date-40mm-116618LN.png",
    "stock": 32
  },
  {
    "id": 7,
    "name": "Citizen Eco-Drive",
    "details": "Solar Powered, Analog Display",
    "price": 15000,
    "image": "https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg",
    "stock": 1
  },
  {
    "id": 8,
    "name": "Seiko 5 Automatic",
    "details": "Day-Date Feature, Stainless Steel",
    "price": 12500,
    "image": "https://content.thewosgroup.com/productimage/17381901/17381901_2.jpg?impolicy=zoom",
    "stock": 24
  },
  {
    "id": 9,
    "name": "Hamilton Khaki Field",
    "details": "Swiss Movement, Military Inspired",
    "price": 35000,
    "image": "https://cdna.lystit.com/photos/fossil/ffd82c48/fossil--Gen-5e-Smartwatch-Rose-Gold-tone-Stainless-Steel.jpeg",
    "stock": 6
  },
  {
    "id": 10,
    "name": "Tudor Black Bay",
    "details": "Dive Watch, Swiss Made",
    "price": 72000,
    "image": "https://i5.walmartimages.com/asr/3e7b703b-5452-4849-b42c-c738eb9c5468_2.8dd3ec6f656ab0f05a474ad69534f72a.png",
    "stock": 34
  },
  {
    "id": 11,
    "name": "Invicta Pro Diver",
    "details": "Waterproof, Analog Movement",
    "price": 9999,
    "image": "https://watchingelegance.com/wp-content/uploads/2019/10/Rolex-Submariner-Date-40mm-116618LN.png",
    "stock": 18
  },
  {
    "id": 12,
    "name": "Orient Star Retro-Future",
    "details": "Luxury Analog, Japanese Movement",
    "price": 25000,
    "image": "https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg",
    "stock": 61
  },
  {
    "id": 13,
    "name": "Michael Kors Runway",
    "details": "Fashion Watch, Gold Plated",
    "price": 20000,
    "image": "https://content.thewosgroup.com/productimage/17381901/17381901_2.jpg?impolicy=zoom",
    "stock": 11
  },
  {
    "id": 14,
    "name": "Bulova Precisionist",
    "details": "High Accuracy, Quartz Movement",
    "price": 22000,
    "image": "https://cdna.lystit.com/photos/fossil/ffd82c48/fossil--Gen-5e-Smartwatch-Rose-Gold-tone-Stainless-Steel.jpeg",
    "stock": 17
  },
  {
    "id": 15,
    "name": "Apple Watch Series 8",
    "details": "Smartwatch, Fitness Tracking",
    "price": 49900,
    "image": "https://i5.walmartimages.com/asr/3e7b703b-5452-4849-b42c-c738eb9c5468_2.8dd3ec6f656ab0f05a474ad69534f72a.png",
    "stock": 23
  },
  {
    "id": 16,
    "name": "Samsung Galaxy Watch 4",
    "details": "Smart Features, Bluetooth Enabled",
    "price": 34999,
    "image": "https://watchingelegance.com/wp-content/uploads/2019/10/Rolex-Submariner-Date-40mm-116618LN.png",
    "stock": 40
  },
  {
    "id": 17,
    "name": "Garmin Forerunner 245",
    "details": "GPS, Fitness Tracking, Waterproof",
    "price": 27999,
    "image": "https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg",
    "stock": 10
  },
  {
    "id": 18,
    "name": "Hugo Boss Signature",
    "details": "Luxury Analog Watch",
    "price": 30000,
    "image": "https://content.thewosgroup.com/productimage/17381901/17381901_2.jpg?impolicy=zoom",
    "stock": 7
  },
  {
    "id": 19,
    "name": "Skmei Digital Sports",
    "details": "Multi-Function Digital Display",
    "price": 2999,
    "image": "https://cdna.lystit.com/photos/fossil/ffd82c48/fossil--Gen-5e-Smartwatch-Rose-Gold-tone-Stainless-Steel.jpeg",
    "stock": 56
  },
  {
    "id": 20,
    "name": "Diesel Mega Chief",
    "details": "Chronograph, Bold Design",
    "price": 19000,
    "image": "https://i5.walmartimages.com/asr/3e7b703b-5452-4849-b42c-c738eb9c5468_2.8dd3ec6f656ab0f05a474ad69534f72a.png",
    "stock": 9
  },
  {
    "id": 21,
    "name": "Bulova Accutron",
    "details": "Swiss Movement, Elegant Design",
    "price": 55000,
    "image": "https://watchingelegance.com/wp-content/uploads/2019/10/Rolex-Submariner-Date-40mm-116618LN.png",
    "stock": 12
  },
  {
    "id": 22,
    "name": "Emporio Armani Classic",
    "details": "Fashion Watch, Analog Display",
    "price": 35999,
    "image": "https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg",
    "stock": 54
  },
  {
    "id": 23,
    "name": "Cartier Ballon Bleu",
    "details": "Iconic Swiss Luxury Watch",
    "price": "2,50,000",
    "image": "https://content.thewosgroup.com/productimage/17381901/17381901_2.jpg?impolicy=zoom",
    "stock": 65
  },
  {
    "id": 24,
    "name": "Longines Master Collection",
    "details": "Swiss Automatic, Elegant Design",
    "price": "1,10,000",
    "image": "https://cdna.lystit.com/photos/fossil/ffd82c48/fossil--Gen-5e-Smartwatch-Rose-Gold-tone-Stainless-Steel.jpeg",
    "stock": 76
  },
  {
    "id": 25,
    "name": "Piaget Altiplano",
    "details": "Ultra-Thin Swiss Luxury Watch",
    "price": "5,00,000",
    "image": "https://i5.walmartimages.com/asr/3e7b703b-5452-4849-b42c-c738eb9c5468_2.8dd3ec6f656ab0f05a474ad69534f72a.png",
    "stock": 45
  },
  {
    "id": 26,
    "name": "Titan Edge",
    "details": "Thin &Sleek Design, Quartz Movement",
    "price": 9995,
    "image": "https://watchingelegance.com/wp-content/uploads/2019/10/Rolex-Submariner-Date-40mm-116618LN.png",
    "stock": 18
  },
  {
    "id": 27,
    "name": "Titan Automatic Watch",
    "details": "Elegant Design, Stainless Steel",
    "price": 12500,
    "image": "https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg",
    "stock": 16
  },
  {
    "id": 28,
    "name": "Fastrack Analog Watch",
    "details": "Stylish, Casual Design",
    "price": 2495,
    "image": "https://content.thewosgroup.com/productimage/17381901/17381901_2.jpg?impolicy=zoom",
    "stock": 35
  },
  {
    "id": 29,
    "name": "Fastrack Digital Watch",
    "details": "Multi-Function, Sports Style",
    "price": 2999,
    "image": "https://cdna.lystit.com/photos/fossil/ffd82c48/fossil--Gen-5e-Smartwatch-Rose-Gold-tone-Stainless-Steel.jpeg",
    "stock": 28
  },
  {
    "id": 30,
    "name": "Titan Neo Watch",
    "details": "Classic Analog Watch, Leather Strap",
    "price": 6999,
    "image": "https://i5.walmartimages.com/asr/3e7b703b-5452-4849-b42c-c738eb9c5468_2.8dd3ec6f656ab0f05a474ad69534f72a.png",
    "stock": 37
  }
]