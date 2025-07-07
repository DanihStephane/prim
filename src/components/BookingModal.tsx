import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, Building } from 'lucide-react';
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
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto modal-content">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900 fade-in visible">
            {translate('booking.title')}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 hover-scale"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600 fade-in visible">
              {translate('booking.step')} {step} {translate('booking.of')} 3
            </span>
            <span className="text-sm text-gray-500 fade-in visible" style={{ transitionDelay: '100ms' }}>
              {step === 1 && translate('booking.step1.title')}
              {step === 2 && translate('booking.step2.title')}
              {step === 3 && translate('booking.step3.title')}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-teal-500 h-2 rounded-full progress-bar"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Date Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center fade-in visible">
                <Calendar className="mx-auto mb-4 text-teal-500 hover-scale" size={48} />
                <h3 className="text-xl font-semibold mb-2">{translate('booking.step1.title')}</h3>
                <p className="text-gray-600">{translate('booking.step1.subtitle')}</p>
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {generateCalendarDays().map((date, index) => {
                  const dateStr = date.toISOString().split('T')[0];
                  const isSelected = selectedDate === dateStr;
                  
                  return (
                    <button
                      key={dateStr}
                      type="button"
                      onClick={() => setSelectedDate(dateStr)}
                      className={`p-3 rounded-lg border text-center transition-all duration-300 calendar-day hover-lift stagger-item visible ${
                        isSelected
                          ? 'bg-teal-500 text-white border-teal-500 selected'
                          : 'border-gray-300 hover:border-teal-500 hover:bg-teal-50'
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <div className="text-sm font-medium">
                        {date.toLocaleDateString('fr-FR', { weekday: 'short' })}
                      </div>
                      <div className="text-lg font-bold">
                        {date.getDate()}
                      </div>
                      <div className="text-xs">
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
              <div className="text-center fade-in visible">
                <Clock className="mx-auto mb-4 text-teal-500 hover-scale" size={48} />
                <h3 className="text-xl font-semibold mb-2">{translate('booking.step2.title')}</h3>
                <p className="text-gray-600">
                  {translate('booking.step2.subtitle')} {new Date(selectedDate).toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((time, index) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`p-4 rounded-lg border text-center transition-all duration-300 hover-lift stagger-item visible ${
                      selectedTime === time
                        ? 'bg-teal-500 text-white border-teal-500'
                        : 'border-gray-300 hover:border-teal-500 hover:bg-teal-50'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="font-semibold">{time}</div>
                    <div className="text-sm text-gray-500">
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
              <div className="text-center fade-in visible">
                <User className="mx-auto mb-4 text-teal-500 hover-scale" size={48} />
                <h3 className="text-xl font-semibold mb-2">{translate('booking.step3.title')}</h3>
                <p className="text-gray-600">{translate('booking.step3.subtitle')}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="stagger-item visible" style={{ transitionDelay: '100ms' }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {translate('booking.firstName')} *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent form-input"
                  />
                </div>
                
                <div className="stagger-item visible" style={{ transitionDelay: '200ms' }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {translate('booking.lastName')} *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent form-input"
                  />
                </div>
              </div>

              <div className="stagger-item visible" style={{ transitionDelay: '300ms' }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline mr-2" size={16} />
                  {translate('booking.email')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent form-input"
                />
              </div>

              <div className="stagger-item visible" style={{ transitionDelay: '400ms' }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline mr-2" size={16} />
                  {translate('booking.phone')} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent form-input"
                />
              </div>

              <div className="stagger-item visible" style={{ transitionDelay: '500ms' }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="inline mr-2" size={16} />
                  {translate('booking.company')}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent form-input"
                />
              </div>

              <div className="stagger-item visible" style={{ transitionDelay: '600ms' }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translate('booking.challenge')}
                </label>
                <textarea
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent form-input"
                  placeholder={translate('booking.challengePlaceholder')}
                />
              </div>

              <div className="stagger-item visible" style={{ transitionDelay: '700ms' }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translate('booking.goal')}
                </label>
                <textarea
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent form-input"
                  placeholder={translate('booking.goalPlaceholder')}
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={step === 1 ? onClose : prevStep}
              className="px-6 py-3 border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 hover-scale"
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
                className="px-6 py-3 bg-teal-500 text-white rounded-full font-medium hover:bg-teal-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover-scale"
              >
                {translate('booking.next')}
              </button>
            ) : (
              <button
                type="submit"
                disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                className="px-6 py-3 bg-teal-500 text-white rounded-full font-medium hover:bg-teal-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover-scale"
              >
                {translate('booking.confirm')}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;