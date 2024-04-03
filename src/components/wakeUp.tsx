import { useEffect } from 'react';

const WakeUp = () => {

  const wakeUpBackend = async () => {
    try {
      const response = await fetch('/wakeup');
      console.log('Backend wake-up response:', response.statusText);
    } catch (error) {
      console.error('Error waking up backend:', error);
    }
  };

  useEffect(() => {
    wakeUpBackend();
  }, []);

  return null; // This component does not render anything
};

export default WakeUp;
