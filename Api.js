const urlMySql = "http://44.202.35.41:8080/items";
const url2 = "https://aws.amazon.com/redshift/";
let url = urlMySql;
var formData = new FormData();

export const fetchQueryData = async (query) => {
  formData.append("query", query);
  var requestOptions = {
    method: "POST",
    body: formData,
  };

  try {
    const response = await fetch(url, requestOptions);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error.message);
  }
};

export const setURL = (flag) => {
  if (flag) {
    url = url2;
  } else {
    url = urlMySql;
  }
};
