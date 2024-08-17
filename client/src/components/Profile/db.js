import mongoose from "mongoose";
mongoose.connect('mongodb+srv://lakshitsinghmail:luckyshot%401@cluster0.tu2mo75.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

.then(()=>{
    console.log("<<<----connected --->>>")
})
.catch(()=>{
    console.log("<<<--- failed connection --->>> ")
})

const profilew = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    TypeofCargo:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    completeAdd:{
        type:String,
        required:true
    }


})


const Profile = mongoose.model('Profile', profilew);

const dummyData = [
  { userName: 'Alice Johnson', email: 'alice@example.com', TypeofCargo: 'Electronics', place: 'New York', completeAdd: '123 Main St, New York, NY' },
  { userName: 'Bob Smith', email: 'bob@example.com', TypeofCargo: 'Furniture', place: 'Los Angeles', completeAdd: '456 Elm St, Los Angeles, CA' },
  { userName: 'Charlie Brown', email: 'charlie@example.com', TypeofCargo: 'Clothing', place: 'Chicago', completeAdd: '789 Oak St, Chicago, IL' },
  { userName: 'David Wilson', email: 'david@example.com', TypeofCargo: 'Books', place: 'Houston', completeAdd: '101 Pine St, Houston, TX' },
  { userName: 'Eva Green', email: 'eva@example.com', TypeofCargo: 'Toys', place: 'Phoenix', completeAdd: '202 Maple St, Phoenix, AZ' },
  { userName: 'Frank White', email: 'frank@example.com', TypeofCargo: 'Groceries', place: 'Philadelphia', completeAdd: '303 Cedar St, Philadelphia, PA' },
  { userName: 'Grace Lee', email: 'grace@example.com', TypeofCargo: 'Electronics', place: 'San Antonio', completeAdd: '404 Birch St, San Antonio, TX' },
  { userName: 'Henry Adams', email: 'henry@example.com', TypeofCargo: 'Furniture', place: 'San Diego', completeAdd: '505 Spruce St, San Diego, CA' },
  { userName: 'Ivy Clark', email: 'ivy@example.com', TypeofCargo: 'Clothing', place: 'Dallas', completeAdd: '606 Willow St, Dallas, TX' },
  { userName: 'Jack Davis', email: 'jack@example.com', TypeofCargo: 'Books', place: 'San Jose', completeAdd: '707 Fir St, San Jose, CA' },
  { userName: 'Karen Martinez', email: 'karen@example.com', TypeofCargo: 'Toys', place: 'Austin', completeAdd: '808 Redwood St, Austin, TX' },
  { userName: 'Leo Harris', email: 'leo@example.com', TypeofCargo: 'Groceries', place: 'Jacksonville', completeAdd: '909 Cypress St, Jacksonville, FL' },
  { userName: 'Mia Lewis', email: 'mia@example.com', TypeofCargo: 'Electronics', place: 'Fort Worth', completeAdd: '1010 Palm St, Fort Worth, TX' },
  { userName: 'Noah Walker', email: 'noah@example.com', TypeofCargo: 'Furniture', place: 'Columbus', completeAdd: '1111 Pine St, Columbus, OH' },
  { userName: 'Olivia Young', email: 'olivia@example.com', TypeofCargo: 'Clothing', place: 'Charlotte', completeAdd: '1212 Maple St, Charlotte, NC' },
  { userName: 'Paul King', email: 'paul@example.com', TypeofCargo: 'Books', place: 'San Francisco', completeAdd: '1313 Oak St, San Francisco, CA' },
  { userName: 'Quinn Scott', email: 'quinn@example.com', TypeofCargo: 'Toys', place: 'Indianapolis', completeAdd: '1414 Elm St, Indianapolis, IN' },
  { userName: 'Rachel Hall', email: 'rachel@example.com', TypeofCargo: 'Groceries', place: 'Seattle', completeAdd: '1515 Cedar St, Seattle, WA' },
  { userName: 'Sam Turner', email: 'sam@example.com', TypeofCargo: 'Electronics', place: 'Denver', completeAdd: '1616 Birch St, Denver, CO' },
  { userName: 'Tina Baker', email: 'tina@example.com', TypeofCargo: 'Furniture', place: 'Washington', completeAdd: '1717 Spruce St, Washington, DC' }
];

Profile.insertMany(dummyData)
  .then(() => console.log('Dummy data inserted!'))
  .catch(err => console.error('Error inserting dummy data:', err));

