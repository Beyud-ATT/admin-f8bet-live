import { Flex } from "antd";
import LogoImg from "../assets/logo.webp";

export default function Logo() {
  return (
    <Flex justify="center" className="!my-5">
      <img src={LogoImg} alt="logo" className="w-42" />
    </Flex>
  );
}
