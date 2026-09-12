declare module "payment/Payment" {
  interface PaymentData {
    cardNumber: string;
    cardName: string;
    expirationDate: string;
    cvv: string;
  }

  interface PaymentProps {
    onSubmit?: (data: PaymentData) => void;
  }

  const Payment: React.ComponentType<PaymentProps>;

  export default Payment;
}