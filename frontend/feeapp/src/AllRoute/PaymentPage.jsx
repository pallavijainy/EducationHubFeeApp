import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Button, Heading, Input } from "@chakra-ui/react";

const PaymentPage = () => {
  const params = useParams();

  const [paid, setPaid] = useState({});
  const [amount, setAmount] = useState(0);
  const [payment, setPayment] = useState(null);
  const [finaldue, setFinalDue] = useState(paid?.due);
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

  useEffect(() => {
    axios
      .patch(`http://localhost:8080/due/${params.id}`, { due: finaldue })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [finaldue]);

  const handleSubmit = (id) => {
    axios
      .post("http://localhost:8080/paid", { studentId: id, feepaid: amount })
      .then((res) => {
        // console.log(res.data, "daaaata");
        setPayment(res.data);
        setFinalDue(paid.due - amount);
        console.log(paid.due - amount);
        setAmount(0);
      })
      .then(() => {
        alert("payment successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(payment, "pay");

  if (payment) {
    return <Navigate to={`/done/${payment._id}`} />;
  }
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
