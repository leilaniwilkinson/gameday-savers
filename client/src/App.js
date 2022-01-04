import "./App.css";
import "./styles/AdminPage.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Maps from './pages/Maps';
import FAQ from './pages/FAQ';
import Forums from './pages/Forums';
import AdminPage from "./pages/AdminPage";
import Footer from './components/Footer';
import AccessibilityButton from "./components/AccessibilityButton";
import { Card, CardContent, Grid, TextField, Button, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

let authorizedUser = false; //for access to button page. 

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('bool') === "true");
  console.log("first", isLoggedIn);
  
  return <div className="App">
    <Router>
      <Navbar />
      <Routes>
        {/* Routes for everyone */}
        <Route path='/' element={<Home/>} />
        <Route path='/Maps' element={<Maps/>} />
        <Route path='/FAQ' element={<FAQ/>} />
        <Route path='/Forums' element={<Forums/>} />
        <Route
          path="/Admin"
          element={
            <Authentication isLoggedIn={isLoggedIn} onLoginUpdate={setIsLoggedIn} />
          }
        ></Route>

        {/* Routes before Login */}
        <Route
          path="/Login"
          element={<Login onLoginUpdate={setIsLoggedIn} />}
        ></Route>

        {/* Routes after login */}
        {isLoggedIn && (
          <>
            <Route
              path="/Admin"
              element={<Admin onLoginUpdate={setIsLoggedIn} />}
            ></Route>
          </>
        )}

        <Route path="/:pageName" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
    <AccessibilityButton />
  </div>;
}

function Authentication({ isLoggedIn, onLoginUpdate }) {
  return (
    <>
      {isLoggedIn ? <Admin onLoginUpdate={onLoginUpdate}></Admin> : <Login onLoginUpdate={onLoginUpdate} />}
    </>
  );
}

function Login({ onLoginUpdate }) {
  const navigate = useNavigate();

  const[userName, setuserName] = useState('')
  const[password, setpassword] = useState('')

  const getAuthorization = async (e) => {

    //e.preventDefault()

    if(userName && password){
      console.log(userName, password)
      await axios.get(`http://localhost:5000/autho/${userName}/${password}`)
      .then(resp => {

        console.log(resp.data);

        if(resp.data.length === 0){
          localStorage.setItem('bool', 'false');
          authorizedUser = (localStorage.getItem('bool') === "true");
          console.log(authorizedUser)
        }
        else{
          localStorage.setItem('bool', resp.data[0].authorized);
          authorizedUser = (localStorage.getItem('bool') === "true");
          console.log(authorizedUser);
        }

        // return authorizedUser;
      });
    }

  }

  return (
    <div>
      <Card elevation={10} style={{padding:20, height:'60vh', maxWidth:280, margin:"20px auto"}}>
        <CardContent>
            <Grid align='center' justify='center' sx={{ my: 10 }}>
                <Avatar sx={{ my: -1 }} style={{backgroundColor:'#5100009c'}}><LockOutlinedIcon /></Avatar>
                <h2 sx={{ my: -1 }}>Sign In</h2>
                <TextField onChange = {(e) => setuserName(e.target.value)} sx={{ my: 0.5 }} label="Username" placeholder="Enter username" variant="standard" fullWidth required/>
                <TextField onChange = {(e) => setpassword(e.target.value)} sx={{ my: 0.5 }} label="Password" placeholder="Enter password" variant="standard" type="password" fullWidth required/>
                <Button sx={{ my: 1 }} variant="contained" fullWidth
                  onClick={async () => {
                    await getAuthorization();
                    onLoginUpdate(localStorage.getItem('bool') === "true");
                    navigate("/Admin");
                  }}
                >
                  Sign in
                </Button>
            </Grid>
        </CardContent>
      </Card>
      </div>
  );
}

function Admin({ onLoginUpdate }) {
  const navigate = useNavigate();
  return (
      <div className="AdminPage">
          <AdminPage />
          <Logout onLoginUpdate={onLoginUpdate}/>
      </div>
  )
}

function Logout({ onLoginUpdate }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        localStorage.setItem('bool', "false")
        authorizedUser = (localStorage.getItem('bool') === "true");
        onLoginUpdate(authorizedUser);
        navigate("/");
      }}
    >
      Logout
    </button>
  );
}

function PageNotFound() {
  const params = useParams();
  let message = `"${params.pageName}" page not found!`;

  return <p>{message}</p>;
}

export default App;