import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Done = () => {
  const [data, setData] = useState({});
  const [month, setMonth] = useState("");
  const params = useParams();
  // console.log(params.id);
  //   console.log(params.name, params.amount, params.due);
  const montharr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getpaymentdetail/${params.id}`)
      .then((res) => {
        setData(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  useEffect(() => {
    // console.log(data, "pallavi");
    const Due_Month =
      (Number(data?.student?.due) + Number(data?.feepaid)) / data?.student?.fee;

    const Came_Month_fee = data?.feepaid / data?.student?.fee;
    const TotalDueMonth = Due_Month - Came_Month_fee;
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    // console.log(montharr[currentMonth - TotalDueMonth]);

    setMonth(montharr[currentMonth - TotalDueMonth]);
  }, [data]);

  return (
    <Box>
      <Heading>Name:- {data?.student?.name} </Heading>
      <Text>Amount:- {data?.feepaid} </Text>
      <Text>Till Month:- {month}</Text>
      <Text>Due:- {data?.student?.due} </Text>
    </Box>
  );
};

export default Done;
