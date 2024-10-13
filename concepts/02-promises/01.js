const displayData = (response) => {
  console.log(response);
};

const displayError = (error) => {
  console.log(error);
};

const url = "https://api.github.com/users/surajverma2587";

const getDataFromServer1 = fetch(url);

getDataFromServer1.then(displayData).catch(displayError);

console.log("End of app");
