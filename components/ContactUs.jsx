import Image from "next/image";
import QR from "../public/images/qr.webp";
import Form from "./Form";
const ContactUs = ({id}) => {
  return (
    <div id={id} className="w-full py-20">
      <div className="w-[75%] h-full mx-auto flex gap-12">
        <div className="flex-[6]">
          <div className="w-[85%]">
            <h4 className="text-[20px] mb-2 text-[#3D5348]">
              Let’s Bring Your <span className="font-bold">Floral</span> Vision
              to Life
            </h4>
            <p className="w-full text-[12px] text-[#0D281A]">
              Every great floral story starts with a conversation. Whether
              you’re planning your wedding, a private celebration, or simply
              want to explore what we can create together — we invite you to
              book a personal appointment with our design team.
            </p>
          </div>
          <div className="w-[85%] mt-7">
            <Form/>
          </div>
        </div>
        <div className="flex-[4] bg-[#E7EAE8] py-10 px-5 flex flex-col gap-5 items-center text-center">
          <Image src={QR} alt="qr" className="w-[90%] mx-auto" />
          <div className="text-[#3D5348] text-[14px]">
            <p>
              Chat With Us <span className="font-bold">Instantly</span>
            </p>
            <p>
              Scan to Start a <span className="font-bold">WhatsApp</span>{" "}
              Conversation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
