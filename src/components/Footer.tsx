import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {/* Footer content on the left */}
          <p>&copy; 2024 Your Company</p>
        </div>

        <div>
          {/* Footer content on the right */}
          <div className="flex items-center text-white text-[17px]" style={{ marginLeft: 'auto' }}>
            <button className="font-bold bg-white  text-black p-2  mr-3 rounded-full min-w-[9rem]">
              {" "}
       Sign up free
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
