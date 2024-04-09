import axios from 'axios';


export const fetchEvents = async () => {
  try {
    const response = await axios.get("http://localhost:9090/events");
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the events:", error);
    throw error;
  }
};