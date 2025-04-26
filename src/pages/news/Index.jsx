import { Flex } from "antd";
import CreateModal from "./components/CreateModal";
import NewsTable from "./components/NewsTable";

export default function News() {
  return (
    <div>
      <Flex justify="end" className="!my-5">
        <CreateModal />
      </Flex>
      <NewsTable />
    </div>
  );
}
