import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";

const Popup = ({ name, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{name}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose One</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Link to={`/payment/${id}`}>
              <Button>Make Payments</Button>
            </Link>

            <Link to={`/receipt/${id}`}>
              <Button>See All Reciepts</Button>
            </Link>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Popup;
