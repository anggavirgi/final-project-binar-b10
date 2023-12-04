import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Accordion } from "flowbite-react";

export const Payment = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/berhasil");
  };
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto p-6">
          <Link to="/detail" className="flex items-center text-black hover:underline">
            <FaArrowLeft className="mr-2" />
            <h2 className="font-bold">Kembali</h2>
          </Link>
        </div>
        <div className="flex justify-center">
          <h3 className="text-lg font-semibold mb-5 bg-[#FF0000] text-white w-1/2 h-12 rounded-lg flex items-center justify-center">Selesaikan Pembayaran sampai 10 Maret 2023 12:00</h3>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6 flex-grow">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Payment Methods */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="mb-6">
              <Accordion alwaysOpen={true}>
                <Accordion.Panel>
                  <Accordion.Title className="bg-[#3C3C3C] hover:bg-neutral-950 text-white font-semibold p-4 rounded-t-lg border-b border-gray-200">Bank Transfer</Accordion.Title>
                  <Accordion.Content className="bg-white p-4 rounded-b-lg border-l border-r border-b border-gray-200">
                    <div className="border rounded-lg p-6 shadow-md">
                      <h2 className="text-2xl font-semibold mb-4">Instruksi Bank Transfer</h2>
                      <div className="text-gray-700 space-y-4">
                        <p>Lakukan pembayaran ke salah satu rekening berikut:</p>
                        <ul className="list-disc list-inside">
                          <li>Bank ABC: XXXXXXXX</li>
                          <li>Bank XYZ: YYYYYYYY</li>
                        </ul>
                        <p>Silakan cantumkan nomor pesanan saat melakukan transfer.</p>
                        <p>Pastikan untuk menyelesaikan pembayaran sebelum batas waktu yang ditentukan.</p>
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title className="bg-[#6148FF] text-white font-semibold hover:bg-blue-800">Credit Card</Accordion.Title>
                  <Accordion.Content>
                    {/* Credit Card Form */}
                    <div className="flex justify-center w-full gap-2 mb-4">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/100px-Mastercard-logo.svg.png" alt="gambar mastercard" style={{ width: "60px", height: "45px", objectFit: "contain" }} />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/200px-Visa.svg.png" alt="gambar visa" style={{ width: "60px", height: "45px", objectFit: "contain" }} />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="american express" style={{ width: "60px", height: "45px", objectFit: "contain" }} />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png" alt="paypal" style={{ width: "60px", height: "45px", objectFit: "contain" }} />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="cardNumber" className="text-sm font-semibold">
                        Card number
                      </label>
                      <div className="flex items-center mt-1">
                        <input type="text" id="cardNumber" placeholder="4480 0000 0000 0000" className="w-full p-2 border rounded" />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="cardHolder" className="text-sm font-semibold">
                        Card holder name
                      </label>
                      <input type="text" id="cardHolder" placeholder="John Doe" className="w-full p-2 border rounded mt-1" />
                    </div>

                    <div className="flex justify-between mt-4">
                      <div>
                        <label htmlFor="cardCvv" className="text-sm font-semibold">
                          CVV
                        </label>
                        <input type="text" id="cardCvv" placeholder="000" className="w-full p-2 border rounded mt-1" />
                      </div>
                      <div>
                        <label htmlFor="expiryDate" className="text-sm font-semibold">
                          Expiry date
                        </label>
                        <input type="text" id="expiryDate" placeholder="07/24" className="w-full p-2 border rounded mt-1" />
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>

          {/* Payment Summary Card */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="p-4 border-2 rounded-xl border-[#6148FF]">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-3xl font-bold">Pembayaran Kelas</h3>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full shadow-xl rounded-3xl sm:w-full md:w-[47%] lg:w-[47%] xl:w-[80%] mb-4 overflow-hidden">
                  <div className="overflow-hidden">
                    <img className="w-full h-40 object-cover" src="https://via.placeholder.com/150" alt="Course thumbnail" />
                  </div>
                  <div className="px-4 py-5 bg-white rounded-b-3xl shadow-lg">
                    <div className="flex justify-between items-center pt-2">
                      <h4 className="text-lg font-bold text-[#6148FF]">UI/UX Design</h4>
                    </div>
                    <h1 className="font-bold text-lg">Belajar Web Designer dengan Figma</h1>
                    <p className="text-sm mb-2">by Angela Doe</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <table className="table-fixed w-[80%]">
                  <thead>
                    <tr>
                      <th className="w-1/3 text-left">Harga</th>
                      <th className="w-1/3 text-center">PPN 11%</th>
                      <th className="w-1/3 text-right">Total Bayar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-left">Rp 349,000</td>
                      <td className="text-center">Rp 38,930</td>
                      <td className="text-right text-[#6148FF] font-semibold">Rp 378,930</td>
                    </tr>
                    <tr>
                      <td className="text-left"> </td>
                      <td className="text-center"> </td>
                      <td className="text-right"></td>
                    </tr>
                    <tr>
                      <td className="text-left"> </td>
                      <td className="text-center"></td>
                      <td className="text-right"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="w-full flex justify-center">
                <button className="w-[80%] mt-4 h-14 bg-[#FF0000] text-white font-semibold rounded-full flex items-center justify-center hover:bg-red-600" onClick={handleClick}>
                  Bayar dan Ikuti Kelas Selamanya
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
