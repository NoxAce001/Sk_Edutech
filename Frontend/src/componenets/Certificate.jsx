import { useState } from "react";
import { FaFileSignature } from "react-icons/fa";

export default function CertificateVerification() {
  const [isOpen, setIsOpen] = useState(false);
  const [certificateId, setCertificateId] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock function to simulate API call
  const verifyCertificate = async () => {
    setLoading(true);
    
    try {
      // Replace with actual API call
      const response = await fetch(`/api/verify-certificate/${certificateId}`);
      const data = await response.json();
      
      if (data.valid) {
        setVerificationResult({ success: true, message: "Certificate is valid!" });
      } else {
        setVerificationResult({ success: false, message: "Certificate not found!" });
      }
    } catch (error) {
      setVerificationResult({ success: false, message: "Error verifying certificate!" });
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Button to Open Popup */}
      <div
        className="group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-6 py-8 flex items-center justify-center flex-col lg:flex-row gap-4 transition duration-500 hover:bg-sky-950 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <FaFileSignature className="text-[#003366] group-hover:text-white transition duration-300" size={50} />
        <div className="text-xl group-hover:text-white transition duration-300 text-center lg:text-left mt-2">
          Certificate <br /> Verification
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold text-[#003366]">Certificate Verification</h2>
            <input
              type="text"
              className="w-full border p-2 mt-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
              placeholder="Enter Certificate ID"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
            />
            <div className="flex justify-between mt-4">
              <button
                className="bg-[#003366] text-white px-4 py-2 rounded-lg hover:bg-sky-950"
                onClick={verifyCertificate}
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify"}
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                onClick={() => {
                  setIsOpen(false);
                  setVerificationResult(null);
                  setCertificateId("");
                }}
              >
                Close
              </button>
            </div>

            {/* Display Verification Result */}
            {verificationResult && (
              <div
                className={`mt-4 p-2 rounded-lg text-center ${
                  verificationResult.success ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
                }`}
              >
                {verificationResult.message}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
