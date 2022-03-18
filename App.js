import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  textarea: {
    marginTop: 20,
    width: "500px",
    height: "250px",
    borderRadius: "8px",
    backgroundColor: "#e6e6ff",
    border: "2px",
  },
  button: {
    margin: 10,
    width: "100px",
    height: "25px",
    borderRadius: "8px",
    color: "#9999ff",
    backgroundColor: "#cce6ff",
  },
  textinput: {
    marginTop: 20,
    width: "500px",
    height: "25px",
    borderRadius: "8px",
    backgroundColor: "#e6e6ff",
    border: "5px",
  },
});

const TextArea = (props) => {
  const { text } = props.text;
  return (
    <textarea
      id="searchResult"
      name="searchResult"
      rows="10"
      cols="50"
      disabled
      style={props.style}
    >
      {text}
    </textarea>
  );
};

const searchResult = {
  text: "This is the amazon result",
};

const App = () => {
  return (
    <ScrollView style={{ background: "#f1f5f8", color: "#222" }}>
      <View
        style={[
          {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
          { flexDirection: "column" },
        ]}
      >
        <TextInput
          defaultValue=""
          style={{
            marginTop: 20,
            width: "500px",
            height: "25px",
            borderRadius: "4px",
            backgroundColor: "#e6e6ff",
            border: "5px",
          }}
        />
        <Button></Button>
        <TextArea
          text={searchResult}
          style={{
            marginTop: 20,
            width: "500px",
            height: "250px",
            borderRadius: "8px",
            backgroundColor: "#e6e6ff",
            border: "2px",
          }}
        ></TextArea>
      </View>
    </ScrollView>
  );
};

const Button = (props) => {
  return (
    <button
      style={{
        margin: 10,
        width: "100px",
        height: "25px",
        borderRadius: "8px",
        color: "#9999ff",
        borderColor: "#9998ff",
      }}
    >
      Search
    </button>
  );
};

export default App;
