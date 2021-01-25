export interface SubmitData {
  email: string;
  password: string;
  username: string;
}

export interface Props {
  submit: (data: SubmitData) => void
}
