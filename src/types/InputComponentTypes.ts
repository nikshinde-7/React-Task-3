import React from "react";

export type InputProps = {
  value?: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  type: string,
  labelText?: string
}

export type RadioProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export type SelectProps = {
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}
