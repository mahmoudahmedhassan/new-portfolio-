/* eslint-disable react-refresh/only-export-components */

import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import Map from "./Map";
import ContactForm from "./ContactForm";
import { ToastContainer } from "react-toastify";
import { styles } from "../style";
import { SectionWrapper } from "../HOC";
const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <ContactForm />
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {/* <EarthCanvas /> */}
        <Map />
      </motion.div>
      <ToastContainer className="z-20" />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
