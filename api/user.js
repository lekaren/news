import axios from "axios";
export const getUsers = async () => {
  const res = await axios.get("http://10.0.2.2:4000/users");
  try {
    return res.data;
  } catch (err) {
    throw err;
  }
};