const express =  require("express");

const app = express();

app.get("/", (req, res)=>{
    res.json([
        {
            id: 1,
            name: "Sanjay",
            age: 42
        },
        {
            id: 2,
            name: "Sonu",
            age: 32
        },
        {
            id: 3,
            name: "Manish",
            age: 22
        },
        {
            id: 4,
            name: "Ramesh",
            age: 12
        },
    ])
});

app.listen(5500, '0.0.0.0', () => {
    console.log('Server running on port 5500');
});
