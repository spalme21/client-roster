export const formatPhone = (phoneNumber) =>
  `(${phoneNumber.substring(0, 3)})${phoneNumber.substring(
    3,
    6
  )}-${phoneNumber.substring(6)}`;
