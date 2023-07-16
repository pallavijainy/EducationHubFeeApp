import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

const Reciept = () => {
  const [isrec, setIsRec] = useState([]);

  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/reciept/${params.id}`)
      .then((res) => {
        setIsRec(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);
  return (
    <Box>
      {isrec.map((el) => (
        <Box>
          <Heading>Student Name:- {el.student.name}</Heading>
          <Heading>paid amount:- {el.feepaid}</Heading>
          <Text>Date:- {format(new Date(el.createdAt), "MMMM dd, yyyy")}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Reciept;
