import React from "react";

export type SelectProps = {
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}
