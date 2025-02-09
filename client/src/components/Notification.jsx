import { useEffect, useState } from "react";

const Notification = ({ message }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity animate-fade-in">
      {message}
    </div>
  );
};

export default Notification;
