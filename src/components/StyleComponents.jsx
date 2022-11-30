import { motion } from "framer-motion";

export const Title = ({ children, color }) => (
  <motion.h1
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className={`font-poppins sm:text-4xl text-2xl  font-bold sm:leading-[50px]
            leading-[35px] ${color ? color : "text-black"}`}
  >
    {children}
  </motion.h1>
);

export const Paragraph = ({ children, color }) => (
  <motion.p
    initial={{ translateX: 50, opacity: 0 }}
    whileInView={{ translateX: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    className={`font-montserrat text-[#A1A3B8] sm:text-lg text-sm ${
      color ? color : "text-black"
    }`}
  >
    {children}
  </motion.p>
);

export const Container = ({ children, bg }) => (
  <div className={`lg:px-[40px] md:py-[100px] sm:py-[50px] py-[40px] ${bg}`}>
    {children}
  </div>
);

export const SubTitle = ({ children }) => (
  <motion.h1
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="sm:text-2xl text-xl font-poppins font-bold text-black text-center"
  >
    {children}
  </motion.h1>
);

export const Paragraph2 = ({ children }) => (
  <motion.p
    initial={{ translateY: 50, opacity: 0 }}
    whileInView={{ translateY: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    className="sm:text-base text-sm text-center font-montserrat text-[#94A9C1]"
  >
    {children}
  </motion.p>
);

export const Header = ({ children }) => (
  <h6 className="px-4 py-2 bg-[#DBEAFE] font-montserrat text-[#2567EC] rounded-full text-sm font-semibold">
    {children}
  </h6>
);

export const InputRadio = ({ name }) => (
  <>
    <input
      id={name.toLowerCase()}
      type="radio"
      className="w-4 h-4 accent-[#1D4ED8]"
      value={name}
      name="radio_btn"
    />
    <label
      htmlFor={name.toLowerCase()}
      className=" font-montserrat text-sm mr-5"
    >
      {name}
    </label>
  </>
);

export const Input = ({ placeholder }) => (
  <input
    type="text"
    className="w-full h-[50px] sm:px-4 px-2 bg-[#F8FAFC] shadow-sm text-black font-montserrat font-semibold
              sm:text-sm text-xs rounded-md border-none outline-none"
    placeholder={placeholder}
  />
);

export const InputTextArea = () => (
  <textarea
    className="w-full sm:p-4 py-4 px-2 bg-[#F8FAFC] shadow-sm text-black font-montserrat font-semibold
              sm:text-sm text-xs rounded-md border-none outline-none"
    id=""
    rows="5"
    placeholder="Message..."
  ></textarea>
);

export const InputFile = () => (
  <div className=" w-full h-[50px] relative ">
    <input
      type="file"
      className="w-10/12 h-full bg-[#F8FAFC] opacity-0"
      id="fileInput"
    />
    <label
      htmlFor="fileInput"
      className="w-full h-full absolute top-0 left-0 z-10 bg-[#F8FAFC] shadow-sm font-montserrat font-semibold 
      sm:text-sm text-xs flex items-center justify-between text-[#a1a1aa] pl-4"
    >
      Choose File
      <label
        className="w-[100px] bg-[#475569] h-full flex justify-center items-center
    text-white rounded-md cursor-pointer opacity-80 hover:opacity-100"
        htmlFor="fileInput"
      >
        Browser
      </label>
    </label>
  </div>
);

export const InputSubmit = () => (
  <div className="flex w-full h-[50px] mt-3 justify-between items-center">
    <div className="flex gap-2 items-center">
      <input
        id="inputCheckbox"
        type="checkbox"
        className=" accent-[#1D4ED8] w-4 h-4"
      />
      <label
        htmlFor="inputCheckbox"
        className=" font-montserrat font-semibold text-black sm:text-sm text-xs"
      >
        I agree to terms and conditions.
      </label>
    </div>
    <button
      className="w-[110px] h-[50px] flex justify-center items-center font-montserrat text-white
  font-semibold bg-[#1D4ED8] opacity-80 hover:opacity-100 rounded-md sm:text-base text-sm"
    >
      Submit
    </button>
  </div>
);
