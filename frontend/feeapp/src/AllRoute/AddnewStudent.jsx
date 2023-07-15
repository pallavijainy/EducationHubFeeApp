import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
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
      alert("new student added");
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired>
        <FormLabel>Student Name</FormLabel>
        <Input placeholder="Student Name" id="name" {...register("name")} />
        <FormLabel>Class</FormLabel>
        <Input placeholder="Class" {...register("class")} />
        <FormLabel>School</FormLabel>
        <Input placeholder="school" {...register("school")} />
        <FormLabel>Fee</FormLabel>
        <Input placeholder="Fee" {...register("fee")} />
        <FormLabel>Mobile</FormLabel>
        <Input placeholder="Mobile" {...register("mobile")} />
        <FormLabel>Parent Name</FormLabel>
        <Input placeholder="Parent Name" {...register("parentname")} />
        <Input type="submit" />
      </FormControl>
    </form>
  );
};

export default AddnewStudent;
