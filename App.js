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
import { fetchQueryData, setURL } from "./Api";
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
      <RadioGroup aria-label="" name="SQL" row>
        <FormControlLabel
          id="MySql"
          value="1"
          control={<Radio value="1" />}
          label="MySql"
        />
        <FormControlLabel
          id="RedShift"
          value="0"
          control={<Radio value="0" />}
          label="RedShift"
        />
      </RadioGroup>
    </FormControl>
  );
};

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
  let json1;
  const [values, setValues] = useState({
    query: "",
    result: [],
  });

  const handleChangeForm = (event) => {
    setValues({ ...values, query: event.target.value });
  };

  let handleSearch = async () => {
    console.log("I'm here");
    json1 = await fetchQueryData(values.query);
    await setValues({ ...values, result: json1 });
  };

  let handleClear = () => {
    location.reload();
  };

  let column;
  let tableData = [];
  if (values.result.length > 0) {
    tableData = values.result;
    console.log("This is the output:" + JSON.stringify(values.result));
    column = Object.keys(tableData[0]);
  }

  const ThData = () => {
    if (column != undefined) {
      return column.map((data) => {
        // <TableCell align="right">{data}</TableCell>;
        return (
          <th
            style={{ border: "1px solid #dddddd", padding: "8px" }}
            key={data}
          >
            {data}
          </th>
        );
      });
    }
  };

  const tdData = () => {
    const [rows, setRows] = useState([]);
    useEffect(() => {
      return rows + 1;
    }, [rows]);
    if (tableData.length > 0) {
      return tableData.map((data) => {
        return (
          <tr style={{ border: "1px #dddddd", padding: "8px" }}>
            {column.map((v) => {
              return <td>{data[v]}</td>;
            })}
          </tr>
          // <TableRow>
          //   {column.map((v) => {
          //     return <TableCell align="right">{data[v]}</TableCell>;
          //   })}
          // </TableRow>
        );
      });
    }
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
        <Button color="primary" onClick={handleClear}>
          Clear
        </Button>
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
        <Button color="primary" onClick={handleSearch}>
          Search
        </Button>
        <table className="table">
          <thead>
            <tr>{ThData()}</tr>
          </thead>
          <tbody>{tdData()}</tbody>
        </table>
        {/* <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>{ThData()}</TableRow>
            </TableHead>
            <TableBody>{tdData()}</TableBody>
          </Table>
        </TableContainer> */}
      </View>
    </ScrollView>
  );
};

export default App;
