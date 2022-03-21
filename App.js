import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import { Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Select, MenuItem } from "@material-ui/core";
import { fetchQueryData } from "./Api";
import { useState, useEffect } from "react";

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
const RadioForm = () => {
  const [values, setValues] = useState({
    type: "",
  });

  const handleChangeForm = (event) => {
    setValues({ ...values, type: event.target.value });
    console.log(values.type);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="" name="SQL" onChange={handleChangeForm} row>
        <FormControlLabel
          id="MySql"
          value="RedShift"
          control={<Radio />}
          label="MySql"
        />
        <FormControlLabel
          id="RedShift"
          value="MySql"
          control={<Radio />}
          label="RedShift"
        />
      </RadioGroup>
    </FormControl>
  );
};

// const DenseTable = (props) => {
//   const data = props.data;

//   return (
//     <TableContainer>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row) => (
//             <TableRow key={row.Employee}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );

const searchResult = {
  text: "This is the amazon result",
};

const SelectDataBase = () => {
  return (
    <select name="db" id="db">
      <option value="1">Instacart</option>
      <option value="2"></option>
    </select>
  );
};

const App = () => {
  const [values, setValues] = useState({
    query: "",
    result: {},
  });

  const handleChangeForm = (event) => {
    setValues({ ...values, query: event.target.value });
    console.log(values);
  };

  let handleSearch = () => {
    console.log("I'm here");
    let data = fetchQueryData(values.query);
    console.log(data);
    setValues({ ...values, query: data });
  };

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
        <SelectDataBase></SelectDataBase>
        <RadioForm></RadioForm>
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
          onChange={handleChangeForm}
        />
        <Button color="primary" OnClick={handleSearch}>
          Search
        </Button>
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

export default App;
