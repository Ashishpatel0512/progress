import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import ActivityPage from "./models/activityPage.model.js"; // (optional use later)

const app = express();
const port = 3000;



app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB

connectDB();

   const gridData = [
  {
    ProductID: 1,
    ProductName: 'Chai',
    UnitPrice: 18,
    Category: { CategoryID: 1, CategoryName: 'Beverages' }
  },
  {
    ProductID: 2,
    ProductName: 'Chang',
    UnitPrice: 19,
    Category: { CategoryID: 1, CategoryName: 'Beverages' }
  },
  {
    ProductID: 3,
    ProductName: 'Aniseed Syrup',
    UnitPrice: 10,
    Category: { CategoryID: 2, CategoryName: 'Condiments' }
  },
  {
    ProductID: 4,
    ProductName: 'Chef Anton’s Cajun Seasoning',
    UnitPrice: 22,
    Category: { CategoryID: 2, CategoryName: 'Condiments' }
  },
  {
    ProductID: 5,
    ProductName: 'Chef Anton’s Gumbo Mix',
    UnitPrice: 21.35,
    Category: { CategoryID: 2, CategoryName: 'Condiments' }
  },
  {
    ProductID: 6,
    ProductName: 'Grandma’s Boysenberry Spread',
    UnitPrice: 25,
    Category: { CategoryID: 2, CategoryName: 'Condiments' }
  },
  {
    ProductID: 7,
    ProductName: 'Uncle Bob’s Organic Dried Pears',
    UnitPrice: 30,
    Category: { CategoryID: 3, CategoryName: 'Produce' }
  },
  {
    ProductID: 8,
    ProductName: 'Northwoods Cranberry Sauce',
    UnitPrice: 40,
    Category: { CategoryID: 2, CategoryName: 'Condiments' }
  },
  {
    ProductID: 9,
    ProductName: 'Mishi Kobe Niku',
    UnitPrice: 97,
    Category: { CategoryID: 4, CategoryName: 'Meat/Poultry' }
  },
  {
    ProductID: 10,
    ProductName: 'Ikura',
    UnitPrice: 31,
    Category: { CategoryID: 5, CategoryName: 'Seafood' }
  },
  {
    ProductID: 11,
    ProductName: 'Queso Cabrales',
    UnitPrice: 21,
    Category: { CategoryID: 6, CategoryName: 'Dairy Products' }
  },
  {
    ProductID: 12,
    ProductName: 'Queso Manchego La Pastora',
    UnitPrice: 38,
    Category: { CategoryID: 6, CategoryName: 'Dairy Products' }
  },
  {
    ProductID: 13,
    ProductName: 'Konbu',
    UnitPrice: 6,
    Category: { CategoryID: 5, CategoryName: 'Seafood' }
  },
  {
    ProductID: 14,
    ProductName: 'Tofu',
    UnitPrice: 23.25,
    Category: { CategoryID: 7, CategoryName: 'Produce' }
  },
  {
    ProductID: 15,
    ProductName: 'Genen Shouyu',
    UnitPrice: 15.5,
    Category: { CategoryID: 2, CategoryName: 'Condiments' }
  },
  {
    ProductID: 16,
    ProductName: 'Pavlova',
    UnitPrice: 17.45,
    Category: { CategoryID: 8, CategoryName: 'Confections' }
  },
  {
    ProductID: 17,
    ProductName: 'Alice Mutton',
    UnitPrice: 39,
    Category: { CategoryID: 4, CategoryName: 'Meat/Poultry' }
  },
  {
    ProductID: 18,
    ProductName: 'Carnarvon Tigers',
    UnitPrice: 62.5,
    Category: { CategoryID: 5, CategoryName: 'Seafood' }
  },
  {
    ProductID: 19,
    ProductName: 'Teatime Chocolate Biscuits',
    UnitPrice: 9.2,
    Category: { CategoryID: 8, CategoryName: 'Confections' }
  },
  {
    ProductID: 20,
    ProductName: 'Sir Rodney’s Scones',
    UnitPrice: 10,
    Category: { CategoryID: 8, CategoryName: 'Confections' }
    }
]; 

const progress=[
  {
    "id": 1,
    "ActivityPageID": 0,
    "pageName": "Intro",
    "Percent": 0,
    "status": 0
  },
  {
    "id": 2,
    "ActivityPageID": 1,
    "pageName": "Info 1: legal name",
    "Percent": 5,
    "status": 0
  },
  {
    "id": 3,
    "ActivityPageID": 2,
    "pageName": "Info 2: address",
    "Percent": 23,
    "status": 0
  },
  {
    "id": 4,
    "ActivityPageID": 3,
    "pageName": "Info 3: do you own your home",
    "Percent": 41,
    "status": 0
  },
  {
    "id": 5,
    "ActivityPageID": 4,
    "pageName": "Info 4: date of birth",
    "Percent": 59,
    "status": 0
  },
  {
    "id": 6,
    "ActivityPageID": 5,
    "pageName": "Info 5: contact information",
    "Percent": 77,
    "status": 1
  },
  {
    "id": 7,
    "ActivityPageID": 6,
    "pageName": "Review / Summary",
    "Percent": 95,
    "status": 0
  },
  {
    "id": 8,
    "ActivityPageID": 7,
    "pageName": "Outro / Confirmation",
    "Percent": 100,
    "status": 0
  }
]
// Endpoint to get progress data
app.put("/progress", async (req, res) => {
  try {
    const { pageid, status } = req.query;

    // Find document by ActivityPageID
    const page = await ActivityPage.findOne({ ActivityPageID: pageid });
    console.log(page);

    if (!page) {
      return res.status(404).json({ success: false, message: "Page not found" });
    }

    // Update status
    page.status = status;
    await page.save();

    res.json({
      success: true,
      message: "Progress updated successfully",
      page,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

// ✅ GET endpoint to get all progress
app.get("/progress", async (req, res) => {
  try {
    const progress = await ActivityPage.find();
    res.json(progress);
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch data" });
  }
});

  
  





app.post('/users', (req, res) => {

    // const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    
    const ids = req.body.ids;
    
    console.log(ids);
    
    // Simulate fetching user data based on the provided IDs

    const data = gridData.filter(user => ids.includes(user.ProductID));
   
    
    console.log(data);


    res.json(data);
});

app.post('/login', (req, res) => {
  const { email, password, role } = req.body.data;
  console.log('Received login request:', req.body);
  console.log('Login attempt:', email, password, role);
  if (email === 'admin@gmail.com' && password === 'password') {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

