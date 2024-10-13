const url = "https://api.github.com/users/surajverma2587";

const fetchData = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();
