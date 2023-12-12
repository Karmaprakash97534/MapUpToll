// components/Home.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MapComponent from './MapComponent';
import { fetchTollData, fetchTollDetails } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const [routePolyline, setRoutePolyline] = useState('');
  const tollDetails = useSelector((state) => state.tollDetails);

  useEffect(() => {
    const start = 'origin-coordinates'; // Replace with actual start coordinates
    const end = 'destination-coordinates'; // Replace with actual end coordinates

    // Assuming you have a function to fetch toll data and details from the TollGuru API
    dispatch(fetchTollData(start, end))
      .then((response) => {
        setRoutePolyline(response.routePolyline);
        // Fetch toll details using the route data
        return dispatch(fetchTollDetails(response.routeData));
      })
      .catch((error) => {
        console.error('Error fetching toll data:', error);
      });
  }, [dispatch]);

  return (
    <div>
      <h1>Toll Calculator</h1>
      <MapComponent routePolyline={routePolyline} tollDetails={tollDetails} />
    </div>
  );
};

export default Home;
