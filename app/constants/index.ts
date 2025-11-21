export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Engineer",
    icon: "/backend.webp",
  },
  {
    title: "Microservices Architect",
    icon: "/web.webp",
  },
  {
    title: "Cloud & DevOps Specialist",
    icon: "/mobile.webp",
  },
  {
    title: "Backend Systems Expert",
    icon: "/creator.webp",
  },
];

// const technologies = [
//   {
//     name: "Javascript",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500",
//   },
//   {
//     name: "Python",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600",
//   },
//   {
//     name: "PHP",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500",
//   },
//   {
//     name: "C/C++/C#",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500",
//   },
//   {
//     name: "AWS",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500",
//   },
//   {
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500",
//     name: "Next.JS",
//   },
//   {
//     name: "Django",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-500",
//   },
//   {
//     name: "PostgreSQL",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-lime-500",
//   },
//   {
//     name: "Vue",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500",
//   },
//   {
//     name: "Docker",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600",
//   },
//   {
//     name: "GraphQL",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500",
//   },
//   {
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500",
//     name: "Java",
//   },
// ];

const skills = {
  backend: [
    "Python (Django, Flask, FastAPI)",
    "C# (.NET, ASP.NET Core)",
    "Node.js (TypeScript, JavaScript, Express.js)",
    "Java (Spring Boot)",
    "PHP (Laravel, CodeIgniter)",
    "Go (Golang)",
    "gRPC",
    "NestJS",
  ],
  frontend: [
    "React.js",
    "Next.js",
    "Angular",
    "Vue.js",
    "React Native",
    "Tailwind CSS",
    "MUI",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  cloud: [
    "AWS (EC2, Lambda, S3, CloudWatch, ECS, Fargate)",
    "Google Firebase",
    "Azure DevOps",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "CI/CD",
    "Terraform",
    "Helm",
  ],
  data: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "DynamoDB",
    "CassandraDB",
    "Elasticsearch",
    "Snowflake",
    "BigQuery",
  ],
  api: [
    "REST APIs",
    "GraphQL",
    "gRPC",
    "JWT/OAuth2 Authentication",
    "WebSockets",
    "OpenAPI",
    "Swagger",
  ],
};

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Codewave Digital",
    icon: "/company/hireplicity.png",
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Engineered a scalable microservices architecture using Python (Django, FastAPI, Flask) and TypeScript (Nest.js, Next.js) for government procurement workflows, achieving 99.99% uptime and processing 500+ daily requests.",
      "Built a GraphQL layer that allowed fine-grained queries over large sets of solicitation data and agency documents, reducing over-fetching and boosting performance by 30%.",
      "Implemented WebSocket-based alerts for newly published opportunities, approaching deadlines, and updates on proposal evaluations, providing users with instant, actionable insights.",
      "Centralized government contracting data by migrating 100,000+ records into MongoDB, and automated real-time updates from government sources via Apache Kafka, ensuring the system displayed the most current information.",
      "Established role-based access control (RBAC) utilizing OAuth2 and JWT authentication protocols; mitigated potential data breaches by 65% and ensured compliance with industry security standards.",
      "Implemented rate limiting and API throttling using Redis, supporting 50+ client applications concurrently while preventing denial-of-service attacks, improving overall system reliability and availability.",
      "Developed and maintained backend services using C# and ASP.NET, implementing RESTful APIs, authentication/authorization modules, and SQL Server integrations to support procurement workflows alongside microservices built in Python and Node.js.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Yondu Inc.",
    icon: "/company/brainforce.png",
    iconBg: "#383E56",
    date: "Previous",
    points: [
      "Pioneered high-throughput backend services in Java (Spring Boot) incorporating gRPC and Apache Kafka, processing 5,000+ transactions per second while shrinking average latency to 85ms.",
      "Optimized Java Spring Boot microservices, decreasing latency in critical transaction workflows to an average of 85ms while handling peak loads of 7,000 transactions per second.",
      "Integrated AWS Lambda serverless functions into application architecture, reducing infrastructure costs by 30% and decreasing average function execution time by 50ms.",
      "Integrated MongoDB and Oracle with read replicas for high-availability storage.",
      "Engineered real-time dashboards within Splunk that visualized system performance, pinpointing bottlenecks, and improved incident response times by 40% while monitoring 50+ transaction pipelines.",
      "Automated infrastructure provisioning with Terraform, reducing setup time by 60%. Fortified system security by enforcing role-based access control across 5 key applications and enabled AES-256 encryption, exceeding regulatory requirements for financial data protection and compliance.",
      "Spearheaded the creation of a fraud detection system using event sourcing that reduced false positives for customers flagged for fraud, decreasing manual review workload by 40 hours a week.",
      "Orchestrated the development of 10+ high-performance backend microservices using PHP (Laravel, Codeigniter), improving API response times by 30% and enabling support for 2 million concurrent users.",
      "Leveraged Apache Kafka and Redis to deliver real-time media updates and game data with sub-100ms latency.",
      "Refined scalable data infrastructure utilizing DynamoDB for efficient storage of media metadata and game states, achieving a 20% reduction in database query latency due to optimized schema.",
      "Orchestrated a global content delivery network utilizing AWS CloudFront, which decreased average media loading times by 60ms for international users and supported 2M+ concurrent streams globally.",
      "Orchestrated serverless media transformation pipelines via AWS Lambda, processing 5M+ images monthly with 99.99% uptime, enabling faster content delivery and improved user experience across platforms.",
      "Initiated centralized logging using the ELK stack, capturing 100% of application logs and reducing debugging time by 40% by providing visibility into application performance, exceeding team goals.",
      "Instituted a comprehensive disaster recovery strategy employing AWS Backup and cross-region replication, achieving a Recovery Time Objective of under 15 minutes.",
      "Orchestrated performance tuning strategies with tools like Prometheus, decreasing average game latency by 150ms during peak hours, resulting in a superior user experience and higher player retention.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "IBM Solution Delivery Inc.",
    icon: "/company/chromedia.png",
    iconBg: "#383E56",
    date: "Previous",
    points: [
      "Accelerated core API enhancements with Node.js (NestJS) following senior engineer guidance; elevated API test coverage scores by 40% and decreased server response times by 150ms, as measured by Datadog.",
      "Fashioned responsive UIs with Tailwind CSS, React and Next.js, resolving 80% of cross-browser compatibility issues and boosting average page load speed by 40% on mobile devices.",
      "Forged scalable data architecture using SQLite for local development environments and Snowflake for analytical workloads, enabling 10+ engineers to conduct efficient data analysis and reporting.",
      "Orchestrated microservice communication using Apache Kafka, achieving 99.99% uptime, and enhanced application responsiveness by optimizing Redis cache invalidation policies during peak traffic.",
      "Orchestrated infrastructure-as-code using Terraform, automating provisioning of 50+ virtual machines, and slashing deployment times by 60%, while ensuring adherence to security protocols and infrastructure compliance.",
      "Actively influenced in code reviews with senior developers and contributed to documentation and best practice sharing sessions.",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "Connect with me on LinkedIn to explore my professional journey, technical expertise, and industry insights in full-stack development and cloud architecture.",
    name: "LinkedIn Profile",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/dairon-jan-lamprea-rotelo/",
  },
];

const projects: {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web" | "Wordpress";
}[] = [
  {
    name: "AI-Enabled Government Contracting & Procurement System",
    description:
      "Scalable microservices architecture for government procurement workflows with GraphQL API, WebSocket alerts, and real-time data synchronization. Achieved 99.99% uptime processing 500+ daily requests with MongoDB and Apache Kafka integration.",
    tags: [
      {
        name: "Python",
        color: "orange-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Kafka",
        color: "green-text-gradient",
      },
    ],
    image: "/projectimg/healthtap.png",
    platform: "Web",
    deploy_link: "#",
  },
  {
    name: "High-Throughput Fintech Application",
    description:
      "Enterprise-grade financial transaction platform processing 7,000+ transactions per second with 85ms average latency. Built with Java Spring Boot, gRPC, and Apache Kafka, featuring fraud detection and real-time monitoring dashboards.",
    tags: [
      {
        name: "Java",
        color: "orange-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "gRPC",
        color: "blue-text-gradient",
      },
      {
        name: "Kafka",
        color: "pink-text-gradient",
      },
      {
        name: "AWS Lambda",
        color: "orange-text-gradient",
      },
    ],
    image: "/projectimg/etoro.png",
    platform: "Web",
    deploy_link: "#",
  },
  {
    name: "Cloud-Native Media Streaming & Game Service Platform",
    description:
      "Global streaming platform supporting 2M+ concurrent users with real-time media updates, game data synchronization, and serverless media transformation. Utilized AWS CloudFront CDN, DynamoDB, and ELK stack for comprehensive monitoring.",

    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "orange-text-gradient",
      },
      {
        name: "DynamoDB",
        color: "green-text-gradient",
      },
      {
        name: "AWS CloudFront",
        color: "pink-text-gradient",
      },
      {
        name: "Redis",
        color: "orange-text-gradient",
      },
    ],
    image: "/projectimg/sierra.png",
    platform: "Web",
    deploy_link: "#",
  },
  {
    name: "Cloud-Based Microservices Analytics Platform",
    description:
      "Scalable analytics platform with Node.js (NestJS) microservices, Snowflake data warehouse, and React/Next.js frontend. Achieved 40% improvement in API test coverage and 40% faster page load speeds on mobile devices.",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "NestJS",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "orange-text-gradient",
      },
      {
        name: "Snowflake",
        color: "pink-text-gradient",
      },
      {
        name: "Terraform",
        color: "green-text-gradient",
      },
    ],
    image: "/projectimg/chirayu.png",
    platform: "Web",
    deploy_link: "#",
  },
];

export { services, skills, experiences, testimonials, projects };
