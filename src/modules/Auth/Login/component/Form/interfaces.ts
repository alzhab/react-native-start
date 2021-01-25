export interface SubmitData {
  email: string;
  password: string;
}

export interface Props {
  submit: (data: SubmitData) => void
}
