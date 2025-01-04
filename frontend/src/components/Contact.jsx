const Contact = () => {
  return (
    <div
      id="contact"
      className="font-serif  pt-10 bg-stone-800 h-2/3 w-screen flex flex-col gap-5 min-h-screen"
    >
      <h2 className="text-4xl md:text-5xl font-cursive text-red-700 font-bold text-center">
        Contact{" "}
      </h2>
      <div className="flex flex-col gap-5 items-center">
        <p className="text-white ">
          <strong>Phone</strong> : +251 911 11 11 11
        </p>
        <p className="text-white ">
          <strong>Email</strong> : awaze-restaurant@gmail.com
        </p>
        <p className="text-white ">
          <strong>Address</strong>: 22 Mazoria <span className="text-sm">ዚግዛግ ሆቴል እና ስፓ 7ኛ ፎቅ</span> 
        </p>
      </div>
      <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5711952177494!2d38.780565800000005!3d9.011544699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b851b9f16b243%3A0x4d015b99935736b7!2zQXdhemUgUmVzdGF1cmFudCB8IEhheWEgSHVsZXQgfCDhiqDhi4vhi5wg4Yis4Yi14Ym24Yir4YqV4Ym1IHwg4YiD4YurIOGIgeGIiOGJtQ!5e0!3m2!1sen!2set!4v1736022417949!5m2!1sen!2set"
        width=""
        height=""
        style={{ border: 0 , width: "100%" , height: "450px"}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      </div>
    </div>
  );
};

export default Contact;
