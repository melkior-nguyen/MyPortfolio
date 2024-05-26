import SendIcon from "../../SVGs/SendIcon";
import AppButton from "../../components/AppButton/AppButton";
import ContentLayout from "../../components/ContentLayout/ContentLayout";
import { motion } from "framer-motion";
import Avatar from "../../assets/darkAvatar.png";

const letters: { char: string }[] = [
  { char: "N" },
  { char: "G" },
  { char: "U" },
  { char: "Y" },
  { char: "E" },
  { char: "N" },
  { char: " " },
  { char: "M" },
  { char: "I" },
  { char: "N" },
  { char: "H" },
  { char: " " },
  { char: "H" },
  { char: "I" },
  { char: "E" },
  { char: "U" },
];

const waveAnimation = {
  initial: {
    y: 0,
    opacity: 0,
  },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 2 + i * 0.05,
    },
  }),
};

const Home = () => {
  return (
    <ContentLayout>
      <div className="flex h-[80%] w-[80%] gap-3">
        {/* Welcome */}
        <motion.div
          className="flex flex-[3] flex-col items-start justify-center h-[80%]"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 1,
              ease: "easeOut",
            },
          }}
          viewport={{ once: true }}
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="text-xl font-light dark:text-gray-400"
          >
            Hello! I'm{" "}
          </motion.h3>
          <div
            style={{
              WebkitBoxReflect:
                "below -10px linear-gradient(transparent, rgba(0,0,0,0.3))",
            }}
          >
            {letters.map((item: { char: string }, i: number) => {
              return (
                <motion.span
                  data-i={i + 1}
                  className="text-4xl font-medium text-midnightBlue dark:text-white"
                  key={i}
                  custom={i}
                  variants={waveAnimation}
                  initial="initial"
                  animate="show"
                >
                  {item.char}
                </motion.span>
              );
            })}
          </div>
          <h3 className="mt-12 font-light text-gray-500 dark:text-gray-400">
            "A creative Front End Developer with a passion for crafting
            intuitive and visually stunning web experiences.
            <br /> With expertise in HTML, CSS, and ReactJS... I transform
            innovative ideas into seamless digital realities. <br /> Let's
            collaborate to bring your vision to life!"
          </h3>
          <AppButton
            label="Get In Touch"
            type="variant"
            style={{ marginTop: "24px" }}
            icon={<SendIcon />}
          />
        </motion.div>
        {/* Avatar */}
        <motion.div
          className="flex flex-[2] items-start justify-end"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 1,
              ease: "easeOut",
            },
          }}
          viewport={{ once: true }}
        >
          <img src={Avatar} alt="" className="w-[100%] object-cover" />
        </motion.div>
      </div>
    </ContentLayout>
  );
};

export default Home;
