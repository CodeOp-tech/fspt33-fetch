const displayData = (response) => {
  console.log(response.data);
};

const displayError = (error) => {
  console.log(error.message);
};

const url = "https://api.github.com/users/surajverma2587";

axios.get(url).then(displayData).catch(displayError);
