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
      "Coursework: Data Wrangling, Text and Media Analysis, Transformers, Spatial Data and Simulation Modeling, Data Ethics"
    ]
  },
  {
    id: "muj-btech",
    institution: "Manipal University Jaipur",
    degree: "B.Tech in Data Science and Engineering",
    period: "2020 - 2024",
    gpa: "7.58/10",
    details: [
      "Coursework: Multivariable Calculus, Linear Algebra, Statistics, Machine Learning, Deep Learning, Big Data, Data Structures & Algorithms"
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
      "Spearheaded strategic partnerships with 10+ industry stakeholders to bridge the academia-industry gap, resulting in a 25% increase in student-professional mentorship engagements.",
      "Orchestrated the end-to-end execution of large-scale symposiums and in-house days, managing cross-functional teams to boost attendee participation by 40% year-over-year.",
      "Established a robust networking pipeline connecting 500+ data science students with corporate recruiters, directly facilitating internship placements and knowledge transfer."
    ],
    link: "#projects"
  },
  {
    id: "nio-intern",
    role: "ML & Robotics Intern",
    company: "CSIR National Inst. of Oceanography",
    period: "Sep 2023 - May 2024",
    description: [
      "Engineered a Deep Learning-based object detection pipeline for Unmanned Underwater Vehicles (UUVs), reducing collision risks by 95% in simulated cluttered environments.",
      "Architected a monocular visual SLAM framework integrating ZoeDepth and ORB-SLAM3, achieving sub-5cm mapping accuracy for underwater 3D reconstruction.",
      "Optimized autonomous navigation logic using Artificial Potential Fields (APF) algorithms, decreasing path-planning latency by 30% during obstacle avoidance maneuvers.",
      "Deployed a high-fidelity Gazebo/ROS simulation environment to validate sensor fusion algorithms across 50+ test scenarios, accelerating the deployment cycle for physical research vessels."
    ],
    link: "#projects"
  },
  {
    id: "isro-intern",
    role: "Researcher",
    company: "Indian Space Research Organisation (ISRO) - Space Application Centre (SAC)",
    period: "May 2023 - Aug 2023",
    description: [
      "Developed a high-performance software stack for PS-PL (Processing System-Programmable Logic) communication on Xilinx Zynq MPSoC, accelerating Deep Learning inference speeds by 4x compared to CPU execution.",
      "Implemented hardware-accelerated Real-Time Object Detection on FPGA fabric, achieving 60+ FPS throughput for low-latency onboard vision applications.",
      "Benchmarked MPSoC power-performance metrics, delivering a feasibility report adopted by senior SAC scientists for future satellite edge-computing architectures."
    ],
    link: "#projects"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "amazon-detection",
    title: "Few-Shot Product Detection for Video Streaming Contexts",
    date: "Oct 2024",
    techStack: ["PyTorch", "YOLOv8", "Flask", "Next.js", "Data Augmentation"],
    description: [
      "Built a Few-Shot Object Detection model to identify Amazon retail products within Prime Video streams, achieving viable detection rates with only 5-10 training samples per class.",
      "Devised a synthetic data augmentation strategy (geometric transformations and occlusion modeling) to prevent overfitting on extremely small datasets.",
      "Deployed the inference engine via a Flask API connected to a Next.js dashboard, enabling real-time product tagging for interactive media applications."
    ],
    link: "https://github.com/kruuusher13",
    media: "/Portfolio/media/amazon-detection.png"
  },
  {
    id: "Object Avoidance UUV",
    title: "Deep Learning-Based Obstacle Avoidance for Autonomous Underwater Vehicles",
    date: "May 2024",
    techStack: ["BlueROV", "PyTorch", "YOLOv8", "ZoeDepth", "ORBSLAM3", "Gazebo", "ROS2"],
    description: [
      "Architected a monocular vision pipeline integrating ZoeDepth for depth estimation and ORB-SLAM3 for sparse 3D reconstruction, enabling navigation in GPS-denied environments.",
      "Engineered a robust multi-object tracking system using YOLOv8 and DeepSORT to identify dynamic obstacles in turbid water conditions with 90%+ detection accuracy.",
      "Implemented Artificial Potential Fields (APF) algorithms to generate real-time collision-free trajectories, reducing path-planning latency by 40% in simulated harbor scenarios."
    ],
    link: "https://github.com/kruuusher13/BlueRov-Object-Avoidance",
    media: "/Portfolio/media/object-avoidance-uuv.gif"
  },
  {
    id: "Maya UUV",
    title: "Naval-Grade UUV Simulation Environment for Bathymetric Surveying",
    date: "Feb 2024",
    techStack: ["Gazebo", "ROS2", "AutoCAD", "Blender", "Python", "C++", "URDF"],
    description: [
      "Collaborated with Indian Navy stakeholders to develop a high-fidelity Gazebo simulation for a mid-sized UUV, reducing physical prototyping risks by validating hydrodynamics virtually.",
      "Modeled and integrated Triton MK3 Sonar and LiDAR sensors via URDF/SDF, enabling precise synthetic data generation for underwater mapping algorithm validation.",
      "Executed end-to-end bathymetric survey missions in simulation, verifying navigation stacks and sensor data flow prior to physical deployment."
    ],
    link: "https://github.com/kruuusher13/Maya_AUV",
    media: "/Portfolio/media/MAYA-AUV.png"
  },
  {
    id: "rope-control",
    title: "Rope-Augmented Visual Control for Dam Infrastructure Inspection",
    date: "Jan 2024",
    techStack: ["Robotics", "OpenCV", "Control Theory", "ROS Noetic", "Gazebo Ignition"],
    description: [
      "Designed a hybrid control system combining rope dynamics and computer vision to stabilize BlueROV2 robots against underwater currents, improving station-keeping stability by 35%.",
      "Automated the inspection of hydroelectric stilling basins using real-time erosion detection models, directly addressing safety concerns for critical dam infrastructure.",
      "Published findings in IEEE, demonstrating a novel methodology that reduces reliance on hazardous human diver operations for structural maintenance."
    ],
    link: "https://ieeexplore.ieee.org/document/10465897",
    media: "/Portfolio/media/rope-control.webp"
  },
  {
    id: "fpga-acceleration",
    title: "Hardware-Accelerated Real-Time Object Detection on MPSoC",
    date: "Aug 2023",
    techStack: ["Xilinx Zynq MPSoC", "FPGA", "Verilog/VHDL", "C++", "Deep Learning"],
    description: [
      "Developed a heterogenous computing pipeline on Xilinx Zynq MPSoC, offloading heavy convolution operations to the FPGA fabric to alleviate CPU bottlenecks.",
      "Achieved sub-15ms inference latency for object detection tasks by optimizing data transfer between the Processing System (PS) and Programmable Logic (PL).",
      "Benchmarked power-to-performance ratios against standard GPU implementations, demonstrating a 3x efficiency gain for edge-deployment in satellite systems."
    ],
    link: "#projects",
    media: "/Portfolio/media/fpga-acceleration.jpg"
  },
  {
    id: "alzheimer-seg",
    title: "3D MRI Segmentation for Early Alzheimer's Diagnosis",
    date: "May 2023",
    techStack: ["TensorFlow", "MATLAB", "Python", "ResNet50"],
    description: [
      "Optimized a custom ResNet50 architecture for volumetric 3D MRI data, focusing on the precise segmentation of hippocampal atrophy patterns.",
      "Attained a Validation Accuracy of 0.87 and an Intersection over Union (IoU) of 0.85 on the ADNI dataset, surpassing baseline benchmarks for automated diagnosis.",
      "Implemented pre-processing pipelines in MATLAB to normalize diverse MRI slice formats, ensuring consistent input data for the deep learning model."
    ],
    link: "https://github.com/kruuusher13",
    media: "/Portfolio/media/alzheimer-seg.webp"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "ieee-apscon",
    title: "Rope augmented path following and control of remotely operated underwater vehicle using vision for stilling basin surveillance",
    conference: "IEEE APSCON 2024",
    date: "Jan 2024",
    description: "Research focused on underwater robotics and computer vision based control systems. Proposed a novel rope-augmented path following algorithm.",
    paperLink: "https://ieeexplore.ieee.org/document/10465897", // Provided generic placeholder or user can update
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
