import { Experience, Education, Project, Publication, SkillNode, SkillLink } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/kruuusher13",
  linkedin: "https://www.linkedin.com/in/romirmalik/",
  email: "romir.ds10@gmail.com",
  phone: "+31 (0) 836 849 2652"
};

export const EDUCATION: Education[] = [
  {
    id: "uu-msc",
    institution: "Utrecht University",
    degree: "MSc Applied Data Science",
    period: "Sep 2025 - Present",
    gpa: "In Progress",
    details: [
      "Honours Programme: Leadership Programme (10 EC)",
      "Coursework: Info Modelling with Data Engineering & ML, Database Systems, Advanced ML, Data Visualization, Data Ethics"
    ]
  },
  {
    id: "muj-btech",
    institution: "Manipal University Jaipur",
    degree: "B.Tech in Data Science and Engineering",
    period: "2020 - 2024",
    gpa: "7.58/10",
    details: [
      "Coursework: Multivariable Calculus, Linear Algebra, Machine Learning, Deep Learning, Big Data, Data Structures & Algorithms"
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "udsc-head",
    role: "Head of External Relations",
    company: "Utrecht Data Science Community",
    period: "Sep 2025 - Present",
    description: [
      "Leading external partnerships and community engagement initiatives to bridge academia and industry.",
      "Coordinating with industry professionals to organize symposiums, inhouse days, and networking events.",
      "Strengthening connections between students and professionals in the data science ecosystem."
    ]
  },
  {
    id: "nio-intern",
    role: "ML & Robotics Intern",
    company: "CSIR National Inst. of Oceanography",
    period: "Sep 2023 - May 2024",
    description: [
      "Enhanced Object Avoidance Capabilities in UUVs through Deep Learning based Object Detection.",
      "Developed framework for depth estimation with single pinhole camera using ZoeDepth and 3D reconstruction using Open3D.",
      "Improved autonomous navigation using Artificial Potential Fields method.",
      "Built simulation environment using Gazebo for underwater mapping and environmental monitoring."
    ]
  },
  {
    id: "isro-intern",
    role: "Research Intern",
    company: "ISRO Space Application Centre",
    period: "May 2023 - Aug 2023",
    description: [
      "Developed Software Stack to enable PS-PL communication and FPGA based acceleration of Deep Learning Models.",
      "Implemented Real-Time Object Detection on MPSoC leveraging FPGA fabric.",
      "Demonstrated feasibility of using MPSoC for real-time computer vision applications."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "amazon-detection",
    title: "Real-Time Amazon Product Detection",
    date: "Oct 2024",
    techStack: ["PyTorch", "YOLO", "Flask", "Next.js"],
    description: [
      "Few-Shot Object Detection system for Amazon products in Prime Video.",
      "Innovative augmentation strategies for small datasets (5-10 images/class)."
    ],
    link: "https://github.com/kruuusher13"
  },
  {
    id: "alzheimer-seg",
    title: "MRI Segmentation for Alzheimer's",
    date: "May 2024",
    techStack: ["TensorFlow", "MATLAB", "Python"],
    description: [
      "Optimized custom ResNet50 for 3D MRI slice processing.",
      "Achieved IOU of 0.85 and validation accuracy of 0.87 on ADNI dataset."
    ],
    link: "https://github.com/kruuusher13"
  },
  {
    id: "rope-control",
    title: "ROV Control & Path Following",
    date: "Jan 2024",
    techStack: ["Robotics", "OpenCV", "Control"],
    description: [
      "Vision-based rope augmented path following for underwater vehicles.",
      "Published in IEEE APSCON 2024."
    ],
    link: "https://github.com/kruuusher13"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "ieee-apscon",
    title: "Rope augmented path following and control of remotely operated underwater vehicle using vision for stilling basin surveillance",
    conference: "IEEE APSCON 2024",
    date: "Jan 2024",
    description: "Research focused on underwater robotics and computer vision based control systems. Proposed a novel rope-augmented path following algorithm.",
    paperLink: "https://ieeexplore.ieee.org/document/10466184", // Provided generic placeholder or user can update
    blogLink: "#" // Placeholder for blog
  }
];

// Data for Force Directed Graph
export const SKILL_NODES: SkillNode[] = [
  // Group 1: Programming Languages (White/Base)
  { id: "Python", group: 1, radius: 35 }, 
  { id: "R", group: 1, radius: 25 },
  { id: "SQL", group: 1, radius: 25 },
  { id: "C++", group: 1, radius: 28 },
  { id: "Java", group: 1, radius: 20 },
  { id: "JavaScript", group: 1, radius: 22 },
  { id: "Bash", group: 1, radius: 20 },

  // Group 2: Core Data Science & AI (Bright Green)
  { id: "Data Science", group: 2, radius: 32 },
  { id: "Machine Learning", group: 2, radius: 30 },
  { id: "Deep Learning", group: 2, radius: 30 },
  { id: "NLP", group: 2, radius: 26 },
  { id: "Computer Vision", group: 2, radius: 26 },
  { id: "LLMs", group: 2, radius: 26 },
  { id: "Generative AI", group: 2, radius: 24 },
  { id: "Transformers", group: 2, radius: 22 },
  { id: "Reinforcement Learning", group: 2, radius: 22 },
  { id: "Statistical Analysis", group: 2, radius: 24 },
  { id: "Data Wrangling", group: 2, radius: 22 },
  { id: "EDA", group: 2, radius: 22 },

  // Group 3: Frameworks, Libraries & Tools (Terminal Green)
  { id: "PyTorch", group: 3, radius: 24 },
  { id: "TensorFlow", group: 3, radius: 24 },
  { id: "Keras", group: 3, radius: 20 },
  { id: "Scikit-learn", group: 3, radius: 22 },
  { id: "Pandas", group: 3, radius: 22 },
  { id: "NumPy", group: 3, radius: 20 },
  { id: "Matplotlib", group: 3, radius: 18 },
  { id: "Seaborn", group: 3, radius: 18 },
  { id: "Docker", group: 3, radius: 20 },
  { id: "Git", group: 3, radius: 20 },
  { id: "React", group: 3, radius: 18 },
  { id: "Flask", group: 3, radius: 18 },
  { id: "OpenCV", group: 3, radius: 22 },

  // Group 4: Robotics & Engineering (Dark Green)
  { id: "Robotics", group: 4, radius: 28 },
  { id: "ROS", group: 4, radius: 25 },
  { id: "Gazebo", group: 4, radius: 20 },
  { id: "Spatial Data", group: 4, radius: 24 },
  { id: "QGIS", group: 4, radius: 20 },
  { id: "Embedded Systems", group: 4, radius: 22 },
  { id: "CUDA", group: 4, radius: 20 },
  { id: "MATLAB", group: 4, radius: 22 },
  { id: "Vivado", group: 4, radius: 18 },

  // Group 5: Soft Skills & Leadership (Pale/Tinted Green)
  { id: "Leadership", group: 5, radius: 26 },
  { id: "Public Speaking", group: 5, radius: 20 },
  { id: "Team Management", group: 5, radius: 20 },
  { id: "Strategic Planning", group: 5, radius: 20 },
  { id: "Mentoring", group: 5, radius: 18 },
  { id: "Communication", group: 5, radius: 22 },
  { id: "Problem Solving", group: 5, radius: 24 },
];

export const SKILL_LINKS: SkillLink[] = [
  // Programming Language Interconnections
  { source: "Python", target: "R", value: 2 },
  { source: "Python", target: "C++", value: 2 },
  { source: "Python", target: "SQL", value: 3 },
  { source: "Python", target: "Bash", value: 2 },
  { source: "C++", target: "Java", value: 1 },
  { source: "Java", target: "JavaScript", value: 1 },
  { source: "JavaScript", target: "React", value: 3 },

  // Python -> Data Science Stack
  { source: "Python", target: "Data Science", value: 5 },
  { source: "Python", target: "Machine Learning", value: 5 },
  { source: "Python", target: "PyTorch", value: 5 },
  { source: "Python", target: "TensorFlow", value: 4 },
  { source: "Python", target: "Scikit-learn", value: 5 },
  { source: "Python", target: "Pandas", value: 5 },
  { source: "Python", target: "NumPy", value: 5 },
  { source: "Python", target: "Flask", value: 4 },

  // Data Science Cluster
  { source: "Data Science", target: "Machine Learning", value: 5 },
  { source: "Data Science", target: "Statistical Analysis", value: 5 },
  { source: "Data Science", target: "Data Wrangling", value: 4 },
  { source: "Data Science", target: "EDA", value: 4 },
  { source: "Data Science", target: "Spatial Data", value: 3 },

  // Machine Learning Cluster
  { source: "Machine Learning", target: "Deep Learning", value: 5 },
  { source: "Machine Learning", target: "Reinforcement Learning", value: 3 },
  { source: "Machine Learning", target: "Scikit-learn", value: 4 },

  // Deep Learning Cluster
  { source: "Deep Learning", target: "Computer Vision", value: 4 },
  { source: "Deep Learning", target: "NLP", value: 4 },
  { source: "Deep Learning", target: "Generative AI", value: 4 },
  { source: "Deep Learning", target: "PyTorch", value: 5 },
  { source: "Deep Learning", target: "TensorFlow", value: 4 },
  { source: "Deep Learning", target: "Keras", value: 3 },

  // NLP & GenAI
  { source: "NLP", target: "LLMs", value: 5 },
  { source: "LLMs", target: "Transformers", value: 5 },
  { source: "Generative AI", target: "LLMs", value: 4 },

  // Computer Vision & Robotics
  { source: "Computer Vision", target: "Robotics", value: 4 },
  { source: "Computer Vision", target: "OpenCV", value: 5 },
  { source: "Computer Vision", target: "Deep Learning", value: 4 },

  // Robotics Cluster
  { source: "Robotics", target: "ROS", value: 5 },
  { source: "Robotics", target: "C++", value: 5 },
  { source: "Robotics", target: "Embedded Systems", value: 4 },
  { source: "Robotics", target: "MATLAB", value: 3 },
  { source: "ROS", target: "Gazebo", value: 4 },
  { source: "Embedded Systems", target: "CUDA", value: 3 },
  { source: "Embedded Systems", target: "Vivado", value: 3 },

  // Spatial Data
  { source: "Spatial Data", target: "QGIS", value: 5 },
  { source: "Spatial Data", target: "Python", value: 3 },

  // Soft Skills & Leadership
  { source: "Leadership", target: "Team Management", value: 4 },
  { source: "Leadership", target: "Strategic Planning", value: 4 },
  { source: "Leadership", target: "Mentoring", value: 4 },
  { source: "Leadership", target: "Public Speaking", value: 3 },
  { source: "Leadership", target: "Communication", value: 3 },
  { source: "Communication", target: "Problem Solving", value: 2 },

  // Misc Tools
  { source: "Python", target: "Git", value: 3 },
  { source: "Python", target: "Docker", value: 3 },
  { source: "EDA", target: "Matplotlib", value: 4 },
  { source: "EDA", target: "Seaborn", value: 4 },
];
