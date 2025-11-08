import { useState } from 'react';

export default function Calendar({ selectedDate, onDateChange, selectedTime, onTimeChange }) {
  // Mock data for opptatte tidspunkter - i virkeligheten ville dette komme fra en database
  const [bookedSlots] = useState({
    '2024-11-05': ['10:00', '14:00', '16:00'],
    '2024-11-06': ['12:00', '15:00', '18:00'],
    '2024-11-07': ['11:00', '13:00', '17:00'],
    '2024-11-08': ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'], // Fullt booket
    '2024-11-09': ['10:00', '14:00', '17:00'],
    '2024-11-10': ['16:00', '17:00', '18:00'],
    '2024-11-11': ['12:00', '13:00'],
    '2024-11-12': ['15:00', '19:00', '20:00'],
  });

  const timeSlots = [
    '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const getBookedSlots = (date) => {
    const dateStr = formatDate(date);
    return bookedSlots[dateStr] || [];
  };

  const isTimeSlotBooked = (time, date) => {
    const bookedTimes = getBookedSlots(date);
    return bookedTimes.includes(time);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading text-2xl text-brand-light mb-4">
          Velg dato
        </h3>
        <input
          type="date"
          value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
          onChange={(e) => onDateChange(new Date(e.target.value))}
          min={new Date().toISOString().split('T')[0]}
          className="w-full border border-brand/30 rounded-lg px-4 py-3 bg-neutral-800 text-white focus:border-brand focus:outline-none"
        />
      </div>

      {selectedDate && (
        <div>
          <h3 className="font-heading text-2xl text-brand-light mb-4">
            Velg tidspunkt - {selectedDate.toLocaleDateString('nb-NO')}
          </h3>
          
          {/* Forklaringer */}
          <div className="mb-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-brand rounded"></div>
              <span className="text-slate-300">Ledig</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-600 rounded"></div>
              <span className="text-slate-300">Opptatt</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-brand border-2 border-white rounded"></div>
              <span className="text-slate-300">Valgt</span>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {timeSlots.map((time) => {
              const isBooked = isTimeSlotBooked(time, selectedDate);
              const isSelected = selectedTime === time;
              
              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => !isBooked && onTimeChange(time)}
                  disabled={isBooked}
                  className={`p-3 rounded-lg border transition-all ${
                    isBooked
                      ? 'border-gray-600 bg-gray-700 text-gray-400 cursor-not-allowed opacity-50'
                      : isSelected
                      ? 'border-brand bg-brand text-black font-semibold'
                      : 'border-brand/30 text-white hover:border-brand hover:bg-brand/10'
                  }`}
                  title={isBooked ? 'Dette tidspunktet er opptatt' : 'Klikk for å velge'}
                >
                  {time}
                  {isBooked && (
                    <div className="text-xs mt-1 text-gray-500">Opptatt</div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Vis antall ledige tidspunkter */}
          <div className="mt-4 text-center">
            <p className="text-slate-400 text-sm">
              {timeSlots.length - getBookedSlots(selectedDate).length} av {timeSlots.length} tidspunkter ledige
            </p>
          </div>
        </div>
      )}
    </div>
  );
}