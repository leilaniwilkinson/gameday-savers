import React, { useState, useEffect} from "react";
//import axios from 'axios'

const Notes = ({ data }) => {
    return (
      <div>
        <table>
          <tr>List of Parking Lots</tr>
          {data && data.map((item, index) => <tr key={index}>
            <td>{item.Parking_Lot}</td>
            <td>{"Space Available: " + item.space_available}</td>
            <td>{"Availability: " + item.Availability}</td>
            <td>{"Total Parking Space: " + item.Total_Parking_Space}</td>
          </tr>)}
        </table>
      </div>
    );
};



const API = process.env.NODE_ENV === 'production' ? 'https://mern-version1.herokuapp.com' : 'http://localhost:5000';
const ParkingList = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const fetchData = () => {
      fetch(API + '/api/parkings', { method: 'GET' })//http://localhost:5000
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setIsLoading(false);
          setNotes(data);
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(true);
          console.log(error);
        });
    };
    useEffect(() => {
      fetchData();
    }, []);
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        
        <div>
          {notes && <Notes data={notes} />}
          {isError && <div>Error fetching data.</div>}
        </div>
      </div>
    );
  };
export default ParkingList