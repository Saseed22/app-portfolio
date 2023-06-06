import { NextRequest, NextResponse } from "next/server";
const fs = require('fs');
const path = require('path');

export async function POST(request:NextRequest) {
  const data = await request.json();


//read DB-JSON file step one
const filePath = path.resolve(process.cwd(), 'app/data/submission');
let submissions:any = [];

try {
  const data = fs.readFileSync(filePath, 'utf8');
  submissions = JSON.parse(data);
} catch (error) {
  console.log('Error reading this file',error)
}


//parse the Json + add the new data + write in JSON file again step2 
  submissions.push(data);

try {
  const newData = JSON.stringify(submissions, null, 2)
  fs.writeFileSync(filePath,newData,'utf8')
} catch (error) {
  console.log('Error writing this file',error)
}



return NextResponse.json({
  data: data,
  message:'this message has been successfully sent!'
})
}

// export async function GET() {
//   return NextResponse.json({
//     message:"HI!",
//   })
// }