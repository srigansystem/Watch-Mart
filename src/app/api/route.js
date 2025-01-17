
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
import mysql from 'mysql2/promise'; // Import MySQL client

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost', // MySQL host
  user: 'root',      // MySQL username (default for XAMPP)
  password: '',      // MySQL password (default is empty for XAMPP)
  database: 'test', // Replace with your database name
});

export async function POST(req) {
  try {
    // Read the data from the request body
    const file = await req.json();
    //console.log(file);
    
    // Check if the body is empty
    if (!file) {
      return new Response(
        JSON.stringify({ error: 'No data received in the request body' }),
        { status: 400 }
      );
    }

    // Connect to the database and insert the data
    const connection = await pool.getConnection();
    try {
      const query = `
  INSERT INTO watchs (id, name, details, price, image, stock, category, currentprice) 
  VALUES ${file.map(() => "(?, ?, ?, ?, ?, ?, ?, ?)").join(", ")}
`;

const values = file.flatMap((product) => [
  product.id,
  product.name,
  product.details,
  product.price,     
  product.image,
  product.stock,
  product.category,
  product.currentprice,
]);
//console.log(values);


const [result] = await connection.execute(query, values);

      // Return success response
      return new Response(
        JSON.stringify({ message: 'Data inserted successfully', id: result.insertId }),
        { status: 200 }
      );
    } finally {
      connection.release(); // Release the connection back to the pool
    }
  } catch (error) {
    console.error('Error interacting with the database:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to save data to the database' }),
      { status: 500 }
    );
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
    id: 1,
    name: 'Rolex Submariner SS',
    details: 'Stainless Steel, Automatic Movement',
    price: '1000',
    image: 'https://watchingelegance.com/wp-content/uploads/2019/10/Rolex-Submariner-Date-40mm-116618LN.png',
    stock: 10,
    category: 'Analog',
    currentprice: '1000'
  },
  {
    id: 2,
    name: 'Omega Seamaster',
    details: 'Swiss Movement, Water Resistant',
    price: 95000,
    image: 'https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg',
    stock: 20,
    category: 'Analog',
    currentprice: 95000
  },
  {
    id: 3,
    name: 'Tag Heuer Carrera',
    details: 'Chronograph, Automatic, Luxury Watch',
    price: 88000,
    image: 'https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg',
    stock: 12,
    category: 'Analog',
    currentprice: 88000
  },
  {
    id: 4,
    name: 'Fossil Gen 5 Smartwatch',
    details: 'Smart Features, Bluetooth Enabled',
    price: 18995,
    image: 'https://cdna.lystit.com/photos/fossil/ffd82c48/fossil--Gen-5e-Smartwatch-Rose-Gold-tone-Stainless-Steel.jpeg',
    stock: 13,
    category: 'Digital',
    currentprice: 18995
  },
  {
    id: 5,
    name: 'Casio G-Shock',
    details: 'Shock Resistant, Digital Display',
    price: 6500,
    image: 'https://i5.walmartimages.com/asr/3e7b703b-5452-4849-b42c-c738eb9c5468_2.8dd3ec6f656ab0f05a474ad69534f72a.png',
    stock: 4,
    category: 'Analog',
    currentprice: 6500
  },
  {
    id: 6,
    name: 'Timex Weekender',
    details: 'Classic Design, Analog Display',
    price: 3999,
    image: 'https://watchingelegance.com/wp-content/uploads/2019/10/Rolex-Submariner-Date-40mm-116618LN.png',
    stock: 32,
    category: 'Analog',
    currentprice: 3999
  },
  {
    id: 7,
    name: 'Citizen Eco-Drive',
    details: 'Solar Powered, Analog Display',
    price: 15000,
    image: 'https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg',
    stock: 1,
    category: 'Analog',
    currentprice: 15000
  },
  {
    id: 8,
    name: 'Seiko 5 Automatic',
    details: 'Day-Date Feature, Stainless Steel',
    price: 12500,
    image: 'https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg',
    stock: 24,
    category: 'Analog',
    currentprice: 12500
  },
  {
    id: 9,
    name: 'Hamilton Khaki Field',
    details: 'Swiss Movement, Military Inspired',
    price: 35000,
    image: 'https://cdna.lystit.com/photos/fossil/ffd82c48/fossil--Gen-5e-Smartwatch-Rose-Gold-tone-Stainless-Steel.jpeg',
    stock: 6,
    category: 'Digital',
    currentprice: 35000
  },
  {
    id: 10,
    name: 'Tudor Black Bay',
    details: 'Dive Watch, Swiss Made',
    price: 72000,
    image: 'https://i5.walmartimages.com/asr/3e7b703b-5452-4849-b42c-c738eb9c5468_2.8dd3ec6f656ab0f05a474ad69534f72a.png',
    stock: 34,
    category: 'Analog',
    currentprice: 72000
  },
  {
    id: 11,
    name: 'Invicta Pro Diver',
    details: 'Waterproof, Analog Movement',
    price: 9999,
    image: 'https://watchingelegance.com/wp-content/uploads/2019/10/Rolex-Submariner-Date-40mm-116618LN.png',
    stock: 18,
    category: 'Analog',
    currentprice: 9999
  },
  {
    id: 12,
    name: 'Orient Star Retro-Future',
    details: 'Luxury Analog, Japanese Movement',
    price: 25000,
    image: 'https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg',
    stock: 61,
    category: 'Analog',
    currentprice: 25000
  },
  {
    id: 13,
    name: 'Michael Kors Runway',
    details: 'Fashion Watch, Gold Plated',
    price: 20000,
    image: 'https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg',
    stock: 11,
    category: 'Analog',
    currentprice: 20000
  },
  {
    id: 14,
    name: 'Bulova Precisionist',
    details: 'High Accuracy, Quartz Movement',
    price: 22000,
    image: 'https://cdna.lystit.com/photos/fossil/ffd82c48/fossil--Gen-5e-Smartwatch-Rose-Gold-tone-Stainless-Steel.jpeg',
    stock: 17,
    category: 'Digital',
    currentprice: 22000
  },
  {
    id: 15,
    name: 'Apple Watch Series 8',
    details: 'Smartwatch, Fitness Tracking',
    price: 49900,
    image: 'https://i5.walmartimages.com/asr/3e7b703b-5452-4849-b42c-c738eb9c5468_2.8dd3ec6f656ab0f05a474ad69534f72a.png',
    stock: 23,
    category: 'Analog',
    currentprice: 49900
  },
  {
    id: 16,
    name: 'Samsung Galaxy Watch 4',
    details: 'Smart Features, Bluetooth Enabled',
    price: 34999,
    image: 'https://watchingelegance.com/wp-content/uploads/2019/10/Rolex-Submariner-Date-40mm-116618LN.png',
    stock: 40,
    category: 'Analog',
    currentprice: 34999
  },
  {
    id: 17,
    name: 'Garmin Forerunner 245',
    details: 'GPS, Fitness Tracking, Waterproof',
    price: 27999,
    image: 'https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg',
    stock: 10,
    category: 'Analog',
    currentprice: 27999
  },
  {
    id: 18,
    name: 'Hugo Boss Signature',
    details: 'Luxury Analog Watch',
    price: 30000,
    image: 'https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg',
    stock: 7,
    category: 'Analog',
    currentprice: 30000
  },
  {
    id: 19,
    name: 'Skmei Digital Sports',
    details: 'Multi-Function Digital Display',
    price: 2999,
    image: 'https://cdna.lystit.com/photos/fossil/ffd82c48/fossil--Gen-5e-Smartwatch-Rose-Gold-tone-Stainless-Steel.jpeg',
    stock: 56,
    category: 'Digital',
    currentprice: 2999
  },
  {
    id: 20,
    name: 'Diesel Mega Chief',
    details: 'Chronograph, Bold Design',
    price: 19000,
    image: 'https://i5.walmartimages.com/asr/3e7b703b-5452-4849-b42c-c738eb9c5468_2.8dd3ec6f656ab0f05a474ad69534f72a.png',
    stock: 9,
    category: 'Analog',
    currentprice: 19000
  },
  {
    id: 21,
    name: 'Bulova Accutron',
    details: 'Swiss Movement, Elegant Design',
    price: 55000,
    image: 'https://watchingelegance.com/wp-content/uploads/2019/10/Rolex-Submariner-Date-40mm-116618LN.png',
    stock: 12,
    category: 'Analog',
    currentprice: 55000
  },
  {
    id: 22,
    name: 'Emporio Armani Classic',
    details: 'Fashion Watch, Analog Display',
    price: 35999,
    image: 'https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg',
    stock: 54,
    category: 'Analog',
    currentprice: 35999
  },
  {
    id: 23,
    name: 'Cartier Ballon Bleu',
    details: 'Iconic Swiss Luxury Watch',
    price: '36000',
    image: 'https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg',
    stock: 65,
    category: 'Analog',
    currentprice: '36000'
  },
  {
    id: 24,
    name: 'Longines Master Collection',
    details: 'Swiss Automatic, Elegant Design',
    price: 35999,
    image: 'https://cdna.lystit.com/photos/fossil/ffd82c48/fossil--Gen-5e-Smartwatch-Rose-Gold-tone-Stainless-Steel.jpeg',
    stock: 76,
    category: 'Digital',
    currentprice: 35999
  },
  {
    id: 25,
    name: 'Piaget Altiplano',
    details: 'Ultra-Thin Swiss Luxury Watch',
    price: 5000,
    image: 'https://i5.walmartimages.com/asr/3e7b703b-5452-4849-b42c-c738eb9c5468_2.8dd3ec6f656ab0f05a474ad69534f72a.png',
    stock: 45,
    category: 'Analog',
    currentprice: 5000
  },
  {
    id: 26,
    name: 'Titan Edge',
    details: 'Thin &Sleek Design, Quartz Movement',
    price: 9995,
    image: 'https://watchingelegance.com/wp-content/uploads/2019/10/Rolex-Submariner-Date-40mm-116618LN.png',
    stock: 18,
    category: 'Analog',
    currentprice: 9995
  },
  {
    id: 27,
    name: 'Titan Automatic Watch',
    details: 'Elegant Design, Stainless Steel',
    price: 12500,
    image: 'https://www.bestomegawatches.com/wp-content/uploads/2018/06/162.jpg',
    stock: 16,
    category: 'Analog',
    currentprice: 12500
  },
  {
    id: 28,
    name: 'Fastrack Analog Watch',
    details: 'Stylish, Casual Design',
    price: 2495,
    image: 'https://i5.walmartimages.com/asr/3e7b703b-5452-4849-b42c-c738eb9c5468_2.8dd3ec6f656ab0f05a474ad69534f72a.png',
    stock: 35,
    category: 'Analog',
    currentprice: 2495
  },
  {
    id: 29,
    name: 'Fastrack Digital Watch',
    details: 'Multi-Function, Sports Style',
    price: 2999,
    image: 'https://i5.walmartimages.com/asr/3e7b703b-5452-4849-b42c-c738eb9c5468_2.8dd3ec6f656ab0f05a474ad69534f72a.png',
    stock: 28,
    category: 'Analog',
    currentprice: 2999
  },
  {
    id: 30,
    name: 'Titan Neo Watch',
    details: 'Classic Analog Watch, Leather Strap',
    price: 6999,
    image: 'https://i5.walmartimages.com/asr/3e7b703b-5452-4849-b42c-c738eb9c5468_2.8dd3ec6f656ab0f05a474ad69534f72a.png',
    stock: 37,
    category: 'Analog',
    currentprice: 6999
  }
]
  