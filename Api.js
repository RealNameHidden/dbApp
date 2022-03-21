const url = "http://44.202.35.41:8080/items";
var formData = new FormData();

export const fetchQueryData = async (query) => {
  formData.append("query", query);
  var requestOptions = {
    mode: "no-cors",
    method: "POST",
    body: formData,
  };

  try {
    let response = await fetch(url, requestOptions);
    console.log("I'm here");
    // console.log(response.body);
    return response;

    // try {
    //   let result = await axios(`${url}`, formData, {
    //     method: "POST",
    //     mode: "no-cors",
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //       "Content-Type": "application/json",
    //     },
    //   });
  } catch (error) {
    console.log(error.message);
  }
};
