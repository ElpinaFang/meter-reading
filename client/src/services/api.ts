import axios from 'axios';

//const API_URL = 'http://localhost:5128/api/meterreadings'; // Adjust if your backend runs on a different port
const API_URL = 'http://3.25.109.95:5128/api/meterreadings';

export const getReadings = () => axios.get(API_URL);
export const postReading = (data: any) => axios.post(API_URL, data);
