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

export const fetchEventByID = async (eventID) => {
    try {
      const response = await axios.get(`http://localhost:9090/events/${eventID}`);
      return response.data[0];
    } catch (error) {
      console.error("There was an error fetching the event:", error);
      throw error;
    }
  };

  export const fetchUsers = async () => {
    try {
        const response = await axios.get(`http://localhost:9090/users`);
        return response.data;
      } catch (error) {
        console.error("There was an error fetching the users:", error);
        throw error;
      }
  }
  

  export const fetchUserByEmail = async (email) => {
    try {
        const response = await axios.get(`http://localhost:9090/users/${email}`);
        return response.data[0];
      } catch (error) {
        console.error("There was an error fetching the user:", error);
        throw error;
      }
  }

  export const loginUser = async (user) => {
    try {
      const response = await axios.post("http://localhost:9090/login", user);
      return response.data;
    } catch (error) {
      console.error("There was an error fetching the user:", error);
      throw error;
    }
  }

  export const updateStaff = async (email, property) => {
    try {
      const response = await axios.patch(`http://localhost:9090/users/${email}`, property);
      return response.data;
    } catch (error) {
      console.error("There was an error fetching the user:", error);
      throw error;
    }
  }

  export const addEvent = async (event) => {
    try {
      const response = await axios.post(`http://localhost:9090/event`, event);
      return response.data;
    } catch (error) {
      console.error("There was an error fetching the user:", error);
      throw error;
    }
  }
