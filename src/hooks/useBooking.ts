import { useState } from 'react';

export const useBooking = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return {
    isBookingOpen,
    openBooking,
    closeBooking
  };
};