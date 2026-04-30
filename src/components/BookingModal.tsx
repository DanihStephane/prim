import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, Building, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { translate } = useTranslation();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    challenge: '',
    goal: ''
  });

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', { selectedDate, selectedTime, ...formData });
    alert(translate('booking.success'));
    onClose();
    setStep(1);
    setSelectedDate('');
    setSelectedTime('');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      challenge: '',
      goal: ''
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const generateCalendarDays = () => {
    const today = new Date();
    const days = [];

    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      if (date.getDay() !== 0 && date.getDay() !== 6) {
        days.push(date);
      }
    }

    return days.slice(0, 20);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-white rounded-[35px] max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-all duration-500 shadow-2xl ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-12'}`}>
        {/* Header */}
        <div className="flex justify-between items-center p-8 border-b">
          <h2 className="text-2xl font-bold text-gray-900">
            {translate('booking.title')}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-gray-600">
              {translate('booking.step')} {step} {translate('booking.of')} 3
            </span>
            <span className="text-sm font-medium text-gray-500">
              {step === 1 && translate('booking.step1.title')}
              {step === 2 && translate('booking.step2.title')}
              {step === 3 && translate('booking.step3.title')}
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-[#00c2a9] h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 pt-2">
          {/* Step 1: Date Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <Calendar className="mx-auto mb-4 text-[#00c2a9] transition-all hover:scale-110" size={56} />
                <h3 className="text-2xl font-bold mb-2">{translate('booking.step1.title')}</h3>
                <p className="text-gray-600">{translate('booking.step1.subtitle')}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {generateCalendarDays().map((date, index) => {
                  const dateStr = date.toISOString().split('T')[0];
                  const isSelected = selectedDate === dateStr;

                  return (
                    <button
                      key={dateStr}
                      type="button"
                      onClick={() => setSelectedDate(dateStr)}
                      className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 hover:-translate-y-1 ${isSelected
                        ? 'bg-[#00c2a9] text-white border-[#00c2a9] shadow-lg'
                        : 'border-gray-100 bg-gray-50 hover:border-[#00c2a9] hover:bg-white'
                        }`}
                    >
                      <div className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">
                        {date.toLocaleDateString('fr-FR', { weekday: 'short' })}
                      </div>
                      <div className="text-xl font-black">
                        {date.getDate()}
                      </div>
                      <div className="text-xs font-medium opacity-70">
                        {date.toLocaleDateString('fr-FR', { month: 'short' })}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Time Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <Clock className="mx-auto mb-4 text-[#00c2a9] transition-all hover:scale-110" size={56} />
                <h3 className="text-2xl font-bold mb-2">{translate('booking.step2.title')}</h3>
                <p className="text-gray-600">
                  {translate('booking.step2.subtitle')} {new Date(selectedDate).toLocaleDateString('fr-FR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {timeSlots.map((time, index) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`p-5 rounded-2xl border-2 text-center transition-all duration-300 hover:-translate-y-1 ${selectedTime === time
                      ? 'bg-[#00c2a9] text-white border-[#00c2a9] shadow-lg'
                      : 'border-gray-100 bg-gray-50 hover:border-[#00c2a9] hover:bg-white'
                      }`}
                  >
                    <div className="text-lg font-black mb-1">{time}</div>
                    <div className={`text-xs font-medium ${selectedTime === time ? 'text-white/80' : 'text-gray-400'}`}>
                      {selectedTime === time ? translate('booking.selected') : translate('booking.available')}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Contact Information */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <User className="mx-auto mb-4 text-[#00c2a9] transition-all hover:scale-110" size={56} />
                <h3 className="text-2xl font-bold mb-2">{translate('booking.step3.title')}</h3>
                <p className="text-gray-600">{translate('booking.step3.subtitle')}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">
                    {translate('booking.firstName')} *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#00c2a9] focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">
                    {translate('booking.lastName')} *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#00c2a9] focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">
                  <Mail className="inline mr-2" size={16} />
                  {translate('booking.email')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#00c2a9] focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">
                  <Phone className="inline mr-2" size={16} />
                  {translate('booking.phone')} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#00c2a9] focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">
                  <Building className="inline mr-2" size={16} />
                  {translate('booking.company')}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#00c2a9] focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">
                  {translate('booking.challenge')}
                </label>
                <textarea
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#00c2a9] focus:outline-none transition-all duration-300 resize-none"
                  placeholder={translate('booking.challengePlaceholder')}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">
                  {translate('booking.goal')}
                </label>
                <textarea
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-5 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#00c2a9] focus:outline-none transition-all duration-300 resize-none"
                  placeholder={translate('booking.goalPlaceholder')}
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between mt-10 gap-4 pt-8 border-t">
            <button
              type="button"
              onClick={step === 1 ? onClose : prevStep}
              className="px-8 py-4 border-2 border-gray-100 rounded-full font-bold text-gray-600 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 hover:scale-105"
            >
              {step === 1 ? translate('booking.cancel') : translate('booking.previous')}
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={
                  (step === 1 && !selectedDate) ||
                  (step === 2 && !selectedTime)
                }
                className="group flex items-center justify-center px-8 py-4 bg-[#00c2a9] text-white rounded-full font-bold transition-all duration-300 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed hover:bg-[#00a693] hover:scale-105 hover:shadow-lg shadow-[#00c2a9]/20"
              >
                {translate('booking.next')}
                <ArrowRight className="ml-2 transition-all group-hover:translate-x-1" size={18} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                className="group flex items-center justify-center px-8 py-4 bg-[#00c2a9] text-white rounded-full font-bold transition-all duration-300 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed hover:bg-[#00a693] hover:scale-105 hover:shadow-lg shadow-[#00c2a9]/20"
              >
                {translate('booking.confirm')}
                <ArrowRight className="ml-2 transition-all group-hover:translate-x-1" size={18} />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;