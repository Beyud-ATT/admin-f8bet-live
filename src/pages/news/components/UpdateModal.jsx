import { Flex, Form, Input, Typography, Upload } from "antd";
import { CompoundModal, useModal } from "../../../components/CompoundModal";
import { LuPenLine } from "react-icons/lu";
import { useState } from "react";
import useNewsUpdate from "../../../hooks/useNewsUpdate";
import { FaCamera } from "react-icons/fa";
import { toast } from "react-toastify";

function UpdateForm({ record }) {
  const [form] = Form.useForm();
  const { id } = record || {};
  const { closeModal } = useModal();
  const [image, setImage] = useState("");
  const { mutate: updateNews } = useNewsUpdate();

  function handleFinish(values) {
    const data = {
      ...values,
      file: image,
      newInfoId: id,
    };
    updateNews(data, {
      onSuccess: () => {
        closeModal();
        form.resetFields();
        setImage("");
        toast.success("Cập nhật tin tức thành công!");
      },
    });
  }

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={handleFinish}
      className="!p-8"
    >
      <Form.Item>
        <Typography.Title
          level={3}
          className="!text-[var(--color-brand-primary)]"
        >
          Tạo tin tức mới
        </Typography.Title>
      </Form.Item>
      <Form.Item name="content" label="Nội dung">
        <Input.TextArea autoSize={{ minRows: 5, maxRows: 5 }} />
      </Form.Item>
      <Form.Item name="order" label="Thứ tự ưu tiên">
        <Input type="number" />
      </Form.Item>
      <Form.Item label={"Hình ảnh"}>
        <Upload
          listType="picture-card"
          maxCount={1}
          beforeUpload={(file) => {
            setImage(file);
            return false;
          }}
          showUploadList={{ showPreviewIcon: false }}
        >
          <Flex
            justify="center"
            align="center"
            className="gap-2 hover:text-[var(--color-brand-primary)]"
          >
            <FaCamera className="h-full w-full !text-lg text-[var(--color-brand-primary)]" />
            <span className="text-lg text-white">Thêm</span>
          </Flex>
        </Upload>
      </Form.Item>
      <Form.Item className="flex justify-end">
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-[var(--color-brand-primary)] px-3 py-1 text-white"
        >
          Lưu
        </button>
      </Form.Item>
    </Form>
  );
}

export default function UpdateModal({ record }) {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <button
            onClick={openModal}
            className="flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-blue-500 px-2 py-1 text-white"
          >
            <LuPenLine className="text-lg" />
            <p>Cập nhật</p>
          </button>
        )}
      />
      <CompoundModal.Content
        classNames={{
          content: "gradient-bg !border-2 !border-[var(--color-brand-primary)]",
        }}
      >
        <UpdateForm record={record} />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
