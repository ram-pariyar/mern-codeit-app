"use client";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useSelector } from "react-redux";

const ProductDescription = ({ description }) => {
  const { theme } = useSelector((state) => state.preferences);

  return (
    <MarkdownPreview
      wrapperElement={{
        "data-color-mode": theme,
      }}
      source={description}
      style={{ padding: 16, background: "#0000" }}
    />
  );
};

export default ProductDescription;
