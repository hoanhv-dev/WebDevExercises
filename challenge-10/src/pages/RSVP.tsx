import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { useSubmitRSVPMutation } from '../features/RSVP/storage/api/rsvpApi';
import { selectRSVPSuccess, selectRSVPLoading } from '../features/RSVP/storage/selectors/rsvpSelectors';
import { resetRsvpState } from '../features/RSVP/storage/slices/rsvpSlice';
import type { FormGuest } from '../storage/types';

// Helper function to create a new guest with the correct type
const createNewGuest = (id: number): FormGuest => ({
  id,
  name: '',
  attending: null,
});

export default function RSVP() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState<FormGuest[]>(() => [createNewGuest(1)]);
  const [statusMessage, setStatusMessage] = useState<{type: 'success' | 'error' | 'info', text: string} | null>(null);
  const [rsvpMessage, setRsvpMessage] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [submitRSVP, { isLoading: isSubmitting }] = useSubmitRSVPMutation();
  const success = useAppSelector(selectRSVPSuccess);
  const loading = useAppSelector(selectRSVPLoading) || isSubmitting;
  
  // Reset RSVP state when component unmounts
  useEffect(() => {
    return () => {
      dispatch(resetRsvpState());
    };
  }, [dispatch]);
  
  // Redirect on success
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  const handleGuestChange = (id: number, field: keyof FormGuest, value: string | boolean | null) => {
    setGuests(prevGuests => 
      prevGuests.map(guest => 
        guest.id === id 
          ? { ...guest, [field]: value } 
          : guest
      ) as FormGuest[]
    );
  };

  const addGuest = () => {
    setGuests(prevGuests => [
      ...prevGuests,
      createNewGuest(Date.now())
    ]);
  };

  const removeGuest = (id: number) => {
    if (guests.length > 1) {
      setGuests(prevGuests => prevGuests.filter(guest => guest.id !== id));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter out any empty guest entries
    const validGuests = guests.filter(guest => guest.name.trim() !== '' && guest.attending !== null);
    
    if (validGuests.length === 0) {
      setStatusMessage({type: 'error', text: 'Vui lòng thêm ít nhất một khách mời'});
      return;
    }
    
    try {
          // Prepare the RSVP data for submission
      const rsvpData = {
        name: name.trim(),
        email: email.trim(),
        guests: validGuests.map(({ name, attending }) => ({
          name: name.trim(),
          attending: attending as boolean // We know this is not null due to validation
        })),
        message: rsvpMessage.trim()
      };
      
      try {
        await submitRSVP(rsvpData).unwrap();
        setStatusMessage({type: 'success', text: 'Cảm ơn bạn đã xác nhận tham dự! Chúng tôi sẽ liên hệ với bạn sớm.'});
      } catch (error: unknown) {
        console.error('Failed to submit RSVP:', error);
        const errorMessage = error instanceof Error ? error.message : 'Đã có lỗi xảy ra. Vui lòng thử lại sau.';
        setStatusMessage({type: 'error', text: errorMessage});
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Đã có lỗi xảy ra. Vui lòng thử lại sau.';
      setStatusMessage({type: 'error', text: errorMessage});
      console.error('RSVP submission failed:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mt-24">
      <h1 className="text-3xl font-serif font-bold text-center mb-8">Xác nhận tham dự</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Thông tin của bạn</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                required
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Danh sách khách mời</h2>
          
          {guests.map((guest, index) => (
            <div key={guest.id} className="mb-6 last:mb-0 border-b border-gray-100 pb-6 last:border-0">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Khách mời {index + 1}</h3>
                {guests.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeGuest(guest.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Xóa
                  </button>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Họ và tên</label>
                  <input
                    type="text"
                    value={guest.name}
                    onChange={(e) => handleGuestChange(guest.id, 'name', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <span className="block text-sm text-gray-600 mb-1">Tham dự</span>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name={`attending-${guest.id}`}
                        checked={guest.attending === true}
                        onChange={() => handleGuestChange(guest.id, 'attending', true)}
                        className="text-rose-500 focus:ring-rose-300"
                        required={guest.attending === null}
                      />
                      <span className="ml-2">Có</span>
                    </label>
                    
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name={`attending-${guest.id}`}
                        checked={guest.attending === false}
                        onChange={() => handleGuestChange(guest.id, 'attending', false)}
                        className="text-rose-500 focus:ring-rose-300"
                        required={guest.attending === null}
                      />
                      <span className="ml-2">Không</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <button
            type="button"
            onClick={addGuest}
            className="mt-4 text-rose-600 hover:text-rose-700 text-sm font-medium flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Thêm khách mời
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Lời nhắn</h2>
          <textarea
            value={rsvpMessage}
            onChange={(e) => setRsvpMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-300 focus:border-transparent"
            placeholder="Gửi lời chúc đến cô dâu chú rể..."
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className={`px-8 py-3 rounded-md text-white font-medium ${
              loading 
                ? 'bg-rose-300 cursor-not-allowed' 
                : 'bg-rose-600 hover:bg-rose-700'
            } transition-colors`}
          >
            {loading ? 'Đang gửi...' : 'Gửi xác nhận'}
          </button>
          
          {statusMessage && (
            <div className={`p-4 mb-6 rounded-md ${
              statusMessage.type === 'success' 
                ? 'bg-green-100 text-green-800' 
                : statusMessage.type === 'error'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-blue-100 text-blue-800'
            }`}>
              {statusMessage.text}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
