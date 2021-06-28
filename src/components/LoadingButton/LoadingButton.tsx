import React from "react";
import { Button } from "react-bootstrap";
import { LoadingButtonProps } from "./LoadingButton.d";

const LoadingButton = (props: LoadingButtonProps) => (
  <Button
    variant={props.variant}
    disabled={props.disabled}
    block={props.block}
    size={props.size}
    type="submit"
  >
    {(props.isLoading && (
      <span>
        {props.loadingText} &nbsp;
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      </span>
    )) || <span>{props.text}</span>}
  </Button>
);

export default LoadingButton;
