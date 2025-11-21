"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="xs:w-[250px] w-full"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <Image
              src={icon}
              width={64}
              height={64}
              alt={title}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
      >
        <ul className="space-y-4 list-disc list-inside">
          <li className="text-justify">
            Innovative and results-driven <span className="font-semibold text-white">Senior Full Stack Engineer</span> with extensive experience architecting scalable, secure, and high-performance systems across multiple technology stacks including
            <span className="font-semibold"> Python (Django, FastAPI, Flask), C# (ASP.NET), Node.js, Java (Spring Boot), PHP (Laravel), and Go</span>.
          </li>
          <li className="text-justify">
            Specialized in building <span className="font-semibold">microservices architectures</span> for government procurement systems, <span className="font-semibold">high-throughput fintech applications</span> processing 7,000+ transactions per second, and <span className="font-semibold">cloud-native media streaming platforms</span> supporting 2M+ concurrent users with real-time data synchronization.
          </li>
          <li className="text-justify">
            Expert in <span className="font-semibold">cloud infrastructure and DevOps</span> with hands-on experience in AWS (EC2, Lambda, S3, CloudWatch, ECS, Fargate), Docker, Kubernetes, Terraform, and CI/CD pipelines. Proven track record of reducing infrastructure costs by 30% and deployment times by 60%.
          </li>
          <li className="text-justify">
            Passionate about <span className="font-semibold">optimizing system performance</span>, implementing robust security measures (RBAC, OAuth2, JWT), and leveraging modern technologies like GraphQL, gRPC, WebSockets, and Apache Kafka to deliver exceptional user experiences and business value.
          </li>
        </ul>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
