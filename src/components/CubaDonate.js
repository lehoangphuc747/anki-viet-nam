import React, { useState, useEffect } from 'react';

// --- Component chính ---
export default function App() {
  // State để quản lý việc hiển thị popup
  const [showPopup, setShowPopup] = useState(false);
  // State để quản lý lựa chọn ghi nhớ của người dùng
  const [rememberChoice, setRememberChoice] = useState(false);

  // Kiểm tra localStorage khi component được mount lần đầu
  useEffect(() => {
    const hasBeenHidden = localStorage.getItem('hideAnkiVnPopup');
    if (!hasBeenHidden) {
      setShowPopup(true);
    }
  }, []);

  // Hàm xử lý sao chép nội dung
  const handleCopy = (textToCopy) => {
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      console.log(`${textToCopy} đã được sao chép!`);
    } catch (err) {
      console.error('Không thể sao chép: ', err);
    }
    document.body.removeChild(textArea);
  };
  
  // Hàm đóng popup và ghi nhớ lựa chọn nếu ô đã được tick
  const handleClose = () => {
      if (rememberChoice) {
          localStorage.setItem('hideAnkiVnPopup', 'true');
      }
      setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    // Lớp phủ nền cho popup, z-index rất cao và căn giữa
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999] p-4 font-sans transition-opacity duration-300">
      
      {/* Container của popup: có giới hạn chiều cao tối đa */}
      <div className="relative w-[90%] md:w-[60%] max-w-xl bg-white rounded-2xl shadow-lg transform transition-all duration-300 scale-100 flex flex-col max-h-[90vh]">
        
        {/* Nội dung có thể cuộn */}
        <div className="overflow-y-auto p-4 sm:p-5">
          {/* Tiêu đề thông báo */}
          <h1 className="text-lg md:text-xl font-bold text-gray-800 text-center mb-2">
            📢 Thông báo
          </h1>

          {/* Nội dung chính */}
          <p className="text-sm text-gray-600 text-center mb-3 leading-relaxed">
            Từ hôm nay đến hết 16/10/2025, AnkiVN.com sẽ thu phí sử dụng trang web.
            Mỗi người vui lòng đóng góp từ <strong className="font-semibold text-indigo-600">10.000đ</strong> trở lên để duy trì hoạt động.
          </p>

          {/* Khung thông tin chuyển khoản */}
          <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg p-3 mb-3">
            <h2 className="text-sm font-semibold text-gray-700 mb-2 text-center">
              📌 Thông tin chuyển khoản
            </h2>
            <div className="space-y-2 text-gray-700 text-sm">
              {/* Ngân hàng */}
              <div className="flex justify-between items-center">
                <span className="font-medium">Ngân hàng:</span>
                <span className="font-mono text-gray-800 text-right">Ngân hàng Quân đội (MB)</span>
              </div>
              <hr className="border-gray-100"/>
              {/* Số tài khoản */}
              <div className="flex justify-between items-center">
                <span className="font-medium">Số TK:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-blue-600 font-bold text-base">2022</span>
                  <button onClick={() => handleCopy('2022')} className="text-xs font-semibold text-gray-600 hover:text-gray-800 bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-md transition-colors duration-200" title="Sao chép số tài khoản">
                    Copy
                  </button>
                </div>
              </div>
               <hr className="border-gray-100"/>
              {/* Chủ tài khoản */}
              <div className="flex justify-between items-start text-right">
                <span className="font-medium whitespace-nowrap mr-2">Chủ TK:</span>
                <span className="font-mono text-gray-800">TW HỘI CHỮ THẬP ĐỎ VIỆT NAM</span>
              </div>
               <hr className="border-gray-100"/>
              {/* Nội dung chuyển khoản */}
              <div className="flex justify-between items-center">
                <span className="font-medium">Nội dung:</span>
                 <div className="flex items-center gap-2">
                  <span className="font-mono text-red-600 bg-red-100 px-2 py-1 rounded font-bold">CUBA</span>
                   <button onClick={() => handleCopy('CUBA')} className="text-xs font-semibold text-gray-600 hover:text-gray-800 bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-md transition-colors duration-200" title="Sao chép nội dung">
                    Copy
                   </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Checkbox ghi nhớ lựa chọn */}
          <div className="flex items-center justify-center mb-3">
            <input
                type="checkbox"
                id="remember-choice"
                checked={rememberChoice}
                onChange={(e) => setRememberChoice(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
            />
            <label htmlFor="remember-choice" className="ml-2 block text-sm text-gray-700 cursor-pointer select-none">
                Không hiển thị lại
            </label>
          </div>

          {/* Nút Đóng/Xác nhận */}
          <button 
              onClick={handleClose}
              className="w-full bg-indigo-600 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 ease-in-out text-sm"
          >
              Đóng thông báo
          </button>
        </div>
      </div>
    </div>
  );
}