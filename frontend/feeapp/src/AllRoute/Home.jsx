import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Button,
} from "@chakra-ui/react";

import { format } from "date-fns";
import { Link } from "react-router-dom";
import Popup from "./../component/Popup";
const Home = () => {
  const [isStudent, setIsStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((res) => {
        setIsStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleName = () => {};
  return (
    <>
      <Heading>Student Data</Heading>
      <Button>
        <Link to={"/addnew"}>New Admission</Link>
      </Button>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>S.No.</Th>
              <Th>Name</Th>
              <Th>Joining Date</Th>
              <Th>Class</Th>
              <Th>School</Th>
              <Th>Fee</Th>
              <Th>Mobile</Th>
              <Th>Parent Name</Th>
              <Th>Due</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isStudent.map((el, i) => (
              <Tr>
                <Td>{i + 1}.</Td>

                <Td>
                  <Popup name={el.name} id={el._id} />
                </Td>

                <Td>{format(new Date(el.createdAt), "MMMM dd, yyyy")}</Td>
                <Td>{el.class}</Td>
                <Td>{el.school}</Td>
                <Td>{el.fee}</Td>
                <Td>{el.mobile}</Td>
                <Td>{el.parentname}</Td>
                <Td>500</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
