import React, { useEffect, useState } from "react";
import { GoPencil, GoGear } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { LayoutUser } from "../../../Layout/LayoutUser";
import { SidebarProfil } from "../../../components/Sidebar/SidebarProfil";
import { useGetDataUser } from "../../../services/User Profile/get_user";
import { useUpdateUser } from "../../../services/User Profile/update_user";
import { useLocation } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { data: dataUser } = useGetDataUser();
  console.log(dataUser);

  const updateUserMutation = useUpdateUser();
  
  const isMobile = window.innerWidth <= 768;  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isEdit = searchParams.get('edit') === 'true';

  useEffect(() => {
    if (dataUser) {
      setName(dataUser.nama);
      setEmail(dataUser.email);
      setPhone(dataUser.no_telp);
      setCountry(dataUser.negara);
      setCity(dataUser.kota);

      if (dataUser.url_image) {
        setImageUrl(dataUser.url_image);
      }
    }
  }, [dataUser]);

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    setter(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserMutation.mutateAsync({
        account_id: dataUser.account_id,
        nama: name,
        email: email,
        no_telp: phone,
        negara: country,
        kota: city,
        url_image: imageUrl,
      });
      alert("Profile saved!");
    } catch (error) {
      alert("Failed to update profile");
    }
  };

  return (
    <>
      <LayoutUser>
        <div className={`mx-auto ${(isMobile && isEdit) ? 'w-full' : 'w-4/5 bg-primary rounded-xl border border-primary'} ${(isMobile && !isEdit) && 'w-4/5 bg-white rounded-xl border border-primary mt-20'}`}>
          {!isMobile && (
            <div className="flex flex-col items-center mt-5 mb-6">
              <div className="text-white text-xl font-bold">Akun</div>
            </div>
          )}
          {(isMobile && isEdit) && (
            <Link
              className="block py-2 px-4 cursor-pointer"
              to={"/profil"}
            >
              <FaArrowLeft className="w-6 h-6 inline-block" />
            </Link>
          )}
        
          <div className={`flex ${isMobile ? 'rounded-xl' : 'bg-white shadow-md'}`}>
            {/* Left Side - Menu */}
            {(!isEdit || !isMobile ) && (
              <SidebarProfil />
            )}

            {/* Right Side - Profile Form */}
            {(!isMobile || (isMobile && isEdit)) && (
            <div className={`p-4 ${isMobile ? 'w-full':'w-2/3'}`}>
              <div className="flex flex-col items-center mb-6">
                <label htmlFor="upload" className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-2" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                  <input
                    type="file"
                    id="upload"
                    accept="image/*" // Hanya menerima jenis gambar
                    style={{ display: "none" }}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                          setImageUrl(e.target.result);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  {/* Placeholder untuk gambar profil */}
                </label>
                <button className="text-sm font-semibold text-indigo-600" onClick={() => document.getElementById("upload").click()}>
                  Ubah Foto Profil
                </button>
              </div>

              <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="mb-4">
                  <p className="text-black-300">Nama</p>
                  <input
                    type="text"
                    value={name}
                    onChange={handleInputChange(setName)}
                    placeholder="Nama"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <p className="text-black-300">Email</p>
                  <input
                    type="email"
                    value={email}
                    onChange={handleInputChange(setEmail)}
                    placeholder="Email"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <p className="text-black-300">Nomor Telepon</p>
                  <input
                    type="tel"
                    value={phone}
                    onChange={handleInputChange(setPhone)}
                    placeholder="Nomor Telepon"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <p className="text-black-300">Negara</p>
                  <input
                    type="text"
                    value={country}
                    onChange={handleInputChange(setCountry)}
                    placeholder="Negara"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <p className="text-black-300">Kota</p>
                  <input
                    type="text"
                    value={city}
                    onChange={handleInputChange(setCity)}
                    placeholder="Kota"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex justify-center mb-5">
                  <br></br>
                  <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full rounded-3xl">
                    Simpan Profil Saya
                  </button>
                </div>
              </form>
            </div>
            )}
          </div>
        </div>
      </LayoutUser>
    </>
  );
};
