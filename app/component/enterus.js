"use client"
import  { useState } from 'react';

export default function Enterus() {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({Name:"",email:"",phone:"",service:"",message:""})
  };

  return (
    <div>
      <div
        className="flex py-64  text-xl justify-center max-lg:flex-col gap-12"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/a5900995b445b514559a8e998647a9dc872a96cc4aac90e182628568cc843c4a?apiKey=3b2967c67f56459895810d8811fc470f&')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-1/3 text-2xl max-lg:w-full ">
          <h1 className="text-color-primary max-lg:mx-4">เข้าร่วมกับเรา</h1>
          <h3 className="text-white max-lg:mx-4">และเปลี่ยนแปลงวิธีการทำธุรกิจของคุณ ในยุคดิจิตอล</h3>
        </div>
        <div className="rounded-xl py-8 px-4 w-1/3 bg-white flex flex-col gap-4 max-lg:w-full  ">
          <h2 className="font-black bg text-2xl">ติดต่อ SUDOTECH</h2>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="Name"
              placeholder="ชื่อ"
              value={formData.Name}
              onChange={handleChange}
              className="bg-gray-100 py-2 px-2 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="อีเมล"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-100 py-2 px-2 rounded-lg"
            />
            <input
              type="number"
              name="phone"
              placeholder="เบอร์โทร"
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-100 py-2 px-2 rounded-lg"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="bg-gray-100 py-2 px-2 text-gray-400 rounded-lg"
            >
              <option disabled value="">
                บริการที่ท่านสนใจ
              </option>
              <option value="marketing">การตลาด</option>
              <option value="software">ซอฟต์แวร์</option>
            </select>
            <textarea
              name="message"
              placeholder="ข้อมูลเพิ่มเติม"
              value={formData.message}
              onChange={handleChange}
              className="bg-gray-100 py-2 px-2 rounded-lg h-24"
            />
            <button type="submit" className="text-white primary-color py-2 rounded-lg hover:bg-red-600">
              ติดต่อเรา
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
