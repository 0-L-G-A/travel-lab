export type StatusType = 'default' | 'error';

export interface IInputBox {
  children: React.ReactNode;
  id: string;
  label?: string;
  className?: string;
  errorMessage?: string;
}
