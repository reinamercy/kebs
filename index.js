const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path'); 

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../frontend')));

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',      
    port: 3306, 
    user: 'root',          
    password: '1a,2b.3c,4d.',       
    database: 'help_center' // Your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL');
});

// API to Log Admin Actions
app.post('/log-action', (req, res) => {
    const { admin_id, action_type, entity_type, entity_id, description, status } = req.body;

    const query = `
        INSERT INTO admin_actions (admin_id, action_type, entity_type, entity_id, description, status)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    const values = [admin_id, action_type, entity_type, entity_id, description, status];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error logging action:', err);
            res.status(500).send('Error logging action');
            return;
        }
        res.status(200).send('Action logged successfully');
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html', 'admin_settings.html'));
});

// Start the Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
