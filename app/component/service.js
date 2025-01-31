export default function Service() {
    const myService = [
      {
        url: "/s1.png",
        header: "บริการทำการตลาด",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d117eb2736d5d088bd4b5c995c69fe12722bec78a22b954c642532debd9f8056?apiKey=3b2967c67f56459895810d8811fc470f&",
        main: "ให้บริการเนื้อหาดิจิตอล เว็บไซต์ โปรแกรมมือถือ รับเป็นที่ปรึกษาด้าน การตลาดและโฆษณาวางแผนและให้คำแนะนำการทำกลยุทธ์เพื่อสร้าง แผนการตลาดที่เหมาะสม",
      },
      {
        url: "/s2.png",
        header: "บริการทำซอฟแวร์",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/03dec4479a84c37c59d626f2dc1ca618aed5e10cfa0701121d96820ee5c3f89b?apiKey=3b2967c67f56459895810d8811fc470f&",
        main: "ให้บริการจัดทำซอฟต์แวร์สำเร็จรูป (ยกเว้นซอฟต์แวร์เกมสำเร็จรูป) มุ่งเน้นให้ได้ซอฟต์แวร์ที่มีประสิทธิภาพและตอบสนองต่อความต้อง การของลูกค้า",
      },
    ];
  
    return (
      <div>
        <div className="flex text-4xl mt-16 justify-center font-black ">
          <p>บริการของ</p>
          <p className="text-orange-600">SUDOTECH</p>
        </div>
        <div className="grid grid-cols-2 gap-4 place-items-center max-lg:grid-cols-1 ">
          {myService.map((ourServices, index) => (
            <div key={index} className="flex flex-col justify-between h-full ">
              <img src={ourServices.url} className="rounded-lg w-full" />
              <div className="text-4xl px-4 py-4 rounded-lg shadow-lg flex flex-col justify-between h-full">
                <div className="flex items-center">
                  <img src={ourServices.icon} className="w-[70px]" />
                  <h1 className="font-black">{ourServices.header}</h1>
                </div>
                <h2 className="text-xl pr-2 break-words">{ourServices.main}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  