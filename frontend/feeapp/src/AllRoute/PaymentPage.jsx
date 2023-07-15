import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Button, Heading, Input } from "@chakra-ui/react";

const PaymentPage = () => {
  const params = useParams();
  const [paid, setPaid] = useState({});
  const [amount, setAmount] = useState(0);
  //   console.log(params.id);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/payment/${params.id}`)
      .then((res) => {
        setPaid(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSubmit = (id) => {
    axios
      .post("http://localhost:8080/paid", { studentId: id, feepaid: amount })
      .then((res) => {
        alert("payment successfully");
        setAmount(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Box>
        <Heading>Student Name:- {paid.name}</Heading>
        <Heading>Fees Taken:- {paid.fee}</Heading>
        <Heading>Due:- {paid.due}</Heading>
        <Input
          placeholder="paid amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button onClick={() => handleSubmit(paid._id)}>Paid</Button>
      </Box>
    </>
  );
};

export default PaymentPage;
