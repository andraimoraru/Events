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
      console.error("There was an error fetching the events:", error);
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

  export const addUser = async (user) => {
    try {
      const response = await axios.post("http://localhost:9090/user", user);
      return response.data;
    } catch (error) {
      console.error("There was an error adding the user:", error);
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


// export const loginUser = async (email, password) => {
//     const { dispatch } = useUser();  // Use the dispatch from your User Context

//     try {
//         const response = await axios.post("http://localhost:9090/login", { email, password });
//         const { user, token } = response.data;

//         if (response.data.success) {
//             dispatch({
//                 type: 'LOGIN',
//                 payload: {
//                     user: {
//                         id: user._id,
//                         username: user.username,
//                         email: user.email
//                     },
//                     token
//                 }
//             });
//             return { success: true };
//         } else {
//             return { success: false, message: response.data.message || "Login failed" };
//         }
//     } catch (error) {
//         console.error("There was an error logging in the user:", error.response ? error.response.data.message : error.message);
//         return { success: false, message: error.response ? error.response.data.message : "Network error, please try again" };
//     }
// };