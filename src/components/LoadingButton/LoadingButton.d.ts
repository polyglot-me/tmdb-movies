export interface LoadingButtonProps {
  text: string;
  size?: "sm" | "lg" | undefined;
  type?: string;
  block: boolean;
  variant: string;
  disabled?: boolean;
  isLoading?: boolean | undefined;
  loadingText: string;
  isFormDirty?: boolean;
  onClick?: any;
}
