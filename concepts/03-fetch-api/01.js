const getJSON = (response) => {
  if (!response.ok) {
    throw new Error("Failed to retrieve data");
  }

  return response.json();
};

const displayData = (data) => {
  console.log(data);
};

const displayError = (error) => {
  console.log(error.message);
};

const url = "https://api.github.com/users/surajverma2587";

fetch(url).then(getJSON).then(displayData).catch(displayError);
