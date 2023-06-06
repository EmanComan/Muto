const express = require("express");
const cors = require("cors");

// router pages
const roleRoute = require('./Routes/RoleRoutes');
const userRoutes = require('./Routes/UserRoutes');
const patientRoutes = require('./Routes/PatientRoutes');


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/roles',roleRoute);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/patients',patientRoutes);


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
