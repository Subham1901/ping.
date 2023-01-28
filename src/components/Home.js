import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Text,
  VStack,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { AiOutlineInstagram } from "react-icons/ai";
import validate from "validator";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import image from "./assets/dashboard.png";
//function goes here...
function Home() {
  const [email, setEmail] = useState(null);
  const [validateMail, setValidateEmail] = useState(true);
  const [message, setMessage] = useState(false);
  //validation
  useEffect(() => {
    if (!email) {
      setValidateEmail(true);
    } else {
      setMessage(false);
    }
  }, [email, message]);

  const validateEmail = (event) => {
    event.preventDefault();
    if (!email) {
      return setMessage(true);
    }
    if (email) {
      setValidateEmail(validate.isEmail(email));
    }
  };

  return (
    <VStack mt={12} alignItems="center" justifyContent="center">
      <Logo />
      <Box textAlign={"center"}>
        <HStack mt={6} alignItems={"center"} justifyContent={"center"}>
          <Text
            fontWeight={"normal"}
            color={"gray.500"}
            fontSize={["3xl", "3xl", "5xl"]}
          >
            We are launching
          </Text>
          <Text fontWeight={"bold"} fontSize={["3xl", "3xl", "5xl"]}>
            soon!
          </Text>
        </HStack>
        <Text
          fontWeight={"400"}
          color="gray.600"
          mt={2}
          fontSize={["md", "xl"]}
        >
          Subscribe and get notified
        </Text>
      </Box>
      <HStack
        margin={"2rem !important"}
        flexDirection={["column", "row"]}
        justifyContent={["center", "space-evenly"]}
      >
        <form onSubmit={validateEmail}>
          <FormControl isInvalid={!validateMail}>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              borderRadius={"full"}
              p={7}
              borderColor={!validateMail ? "red" : "gray.300"}
              mb={[!email ? 5 : 0, 5, 0]}
              type={"text"}
              width={["xs", "sm"]}
              placeholder="Your email address..."
            />

            {!validateMail && (
              <FormErrorMessage
                fontFamily={"cursive"}
                position={["relative", "relative", "absolute"]}
                ml={8}
                mb={["10", "10", "0"]}
              >
                Please provide a valid email address
              </FormErrorMessage>
            )}

            <Button
              shadow={"1px 3px 5px  #0e76a8 "}
              type="submit"
              ml={[0, 0, 8]}
              mt={[email ? 5 : 0, 0]}
              width={["full", "full", "52"]}
              p={7}
              colorScheme="blue"
              borderRadius={"full"}
            >
              Notify Me
            </Button>
          </FormControl>
        </form>
      </HStack>
      <Box justifyContent={"center"}>
        {message && (
          <Text textAlign={"center"} color={"red"} fontFamily={"cursive"}>
            Whoops! It looks like you forgot to add your email
          </Text>
        )}
      </Box>

      <Image mt={"10px !important"} src={image}></Image>
      <HStack mt={"5rem !important"}>
        <FaFacebookF
          style={{
            border: "1px solid #D3D3D3",
            borderRadius: "100%",
            padding: 10,
            margin: 8,
          }}
          color="#0e76a8"
          size={40}
          className="icons"
        />
        <FaTwitter
          className="icons"
          style={{
            border: "1px solid #D3D3D3",
            borderRadius: "100%",
            padding: 10,
            margin: 8,
          }}
          color="#0e76a8"
          size={40}
        />
        <AiOutlineInstagram
          className="icons"
          style={{
            border: "1px solid #D3D3D3",
            borderRadius: "100%",
            padding: 10,
          }}
          color="#0e76a8"
          size={40}
        />
      </HStack>
      <Text color={"gray.400"}>@Copyright Ping. All rights reserved.</Text>
    </VStack>
  );
}

export default Home;
