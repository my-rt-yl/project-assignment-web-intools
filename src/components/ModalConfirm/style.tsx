import { css } from "react-emotion";
export const cssModalConfirmWrapper = css({
  position: "absolute",
  width: 400,
  backgroundColor: "#fff",
  boxShadow:
    "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)",
  padding: 16,
  borderRadius: 8,
  top: "50%",
  left: "50%",
  transform: `translate(-50%, -50%)`,
  maxHeight: 500,
  overflowX: "scroll",
});

export const modalTitle = css({
  display: "flex",
  justifyContent: "center",
});
