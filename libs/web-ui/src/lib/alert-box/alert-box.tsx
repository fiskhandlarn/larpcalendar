import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertStatus,
} from '@chakra-ui/alert';
import { CloseButton } from '@chakra-ui/close-button';
import { FunctionComponent } from 'react-router/node_modules/@types/react';

export interface AlertBoxProps {
  status?: AlertStatus;
  center?: boolean;
  hideIcon?: boolean;
  title?: string;
  description?: string;
  onClose?(): void;
}

export const AlertBox: FunctionComponent<AlertBoxProps> = ({
  status = 'error',
  hideIcon = false,
  center = false,
  title,
  description,
  onClose,
}) => {
  return (
    <Alert status={status}>
      {!hideIcon && <AlertIcon />}
      {title && <AlertTitle mr={2}>{title}</AlertTitle>}
      {description && <AlertDescription>{description}</AlertDescription>}
      {onClose && (
        <CloseButton
          position="absolute"
          right="8px"
          top="8px"
          onClick={onClose}
        />
      )}
    </Alert>
  );
};

export default AlertBox;
