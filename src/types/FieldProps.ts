export interface FieldProps {
  name: string;
  value: string;
  label: string;
  errors?: string;
  touched: boolean;
  placeholder?: string;
  required: boolean;
  onChange: (event: any) => any;
  onBlur: (event: any) => any;
}
