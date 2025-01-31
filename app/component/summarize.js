export default function Summarize() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/d1b4e1d7d3e33475c4f7fc487d77e85fa5959e9643d3c03bbfca3f38f7080f03?apiKey=3b2967c67f56459895810d8811fc470f&')`,
        }}
        className="h-[400px] bg-cover bg-center"
      >
        <h1 className="text-4xl font-black my-16 flex justify-center">ผลการประกอบการ</h1>
        <div className="flex w-full gap-16 justify-center max-lg:flex-col">
          <div className="bg-white w-1/3 rounded-xl max-lg:w-full text-2xl py-8 px-6">
            <h2 className="text-color-primary">การทำการตลาด</h2>
            <h3 className="text-lg">
              ระบบบริหารจัดการเนื้อหา (CMS) ระบบการวิเคราะห์และรายงาน (Analytics
              and Reporting) การปรับปรุงเว็บไซต์สำหรับ SEO
              การจัดการและสร้างแคมเปญโฆษณา การบริหารจัดการช่องทาง Social Media
            </h3>
          </div>
          <div className="primary-color text-white w-1/3 rounded-xl max-lg:w-full px-8 py-6 text-2xl">
          <div className="flex">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f56b0888865c7ba20cac99616f69dfdbd83e29f5cd1058f619aea3f865ec36e?apiKey=3b2967c67f56459895810d8811fc470f&"></img>
          <h3>ยอดคลิกเพิ่มขึ้นใน 6 เดือน</h3>
          </div>
           <h2>45%</h2>
           <div className="flex">
           <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f56b0888865c7ba20cac99616f69dfdbd83e29f5cd1058f619aea3f865ec36e?apiKey=3b2967c67f56459895810d8811fc470f&"></img>
           <h3>ยอดการเติบโตสูงสุด</h3>
           </div>
           <h2>10M</h2>
           <div className="flex">
           <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f56b0888865c7ba20cac99616f69dfdbd83e29f5cd1058f619aea3f865ec36e?apiKey=3b2967c67f56459895810d8811fc470f&"></img>
           <h3>จำนวนผู้ใช้งานเฉลี่ยเพิ่มขึ้น</h3>
           </div>
           <h2>10,000</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
