import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddnewStudent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:8080/newstudentadd", data).then((res) => {
      console.log(res.data);
      alert("new student added");
    });
  };

  return (
    <>
      <Heading style={{ textAlign: "center", color: "Red" }}>
        New Admission 2023 - 2024
      </Heading>
      <Box maxWidth="400px" mx="auto" mt="4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired>
            <FormLabel>Student Name</FormLabel>
            <Input placeholder="Student Name" id="name" {...register("name")} />
          </FormControl>
          <FormControl isRequired mt="4">
            <FormLabel>Class</FormLabel>
            <Input placeholder="Class" {...register("class")} />
          </FormControl>
          <FormControl isRequired mt="4">
            <FormLabel>School</FormLabel>
            <Input placeholder="School" {...register("school")} />
          </FormControl>
          <FormControl isRequired mt="4">
            <FormLabel>Fee</FormLabel>
            <Input placeholder="Fee" {...register("fee")} />
          </FormControl>
          <FormControl isRequired mt="4">
            <FormLabel>Mobile</FormLabel>
            <Input placeholder="Mobile" {...register("mobile")} />
          </FormControl>
          <FormControl isRequired mt="4">
            <FormLabel>Parent Name</FormLabel>
            <Input placeholder="Parent Name" {...register("parentname")} />
          </FormControl>
          <FormControl isRequired mt="4">
            <FormLabel>Due Amount</FormLabel>
            <Input placeholder="Due Amount" {...register("due")} />
          </FormControl>
          <Button type="submit" colorScheme="teal" mt="4">
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddnewStudent;
