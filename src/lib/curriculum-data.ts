// ============================================================
// Data Science Curriculum Data
// Source: kurikulum_data_science.xlsx
// Total: 152 CP + 18 Extra across 8 semesters
// ============================================================

export interface Course {
  code?: string;
  name: string;
  credits: number;
  block?: string;
  skills?: string[];
}

export interface Semester {
  id: number;
  label: string;
  type: 'regular' | 'short' | 'mbkm' | 'capstone';
  totalCredits: number;
  courses: Course[];
  description: string;
}

export interface ConcentrationTrack {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  careers: string[];
  courses: Course[];
  tools: string[];
}

export const SEMESTERS: Semester[] = [
  {
    id: 1,
    label: 'Semester 1',
    type: 'regular',
    totalCredits: 20,
    description: 'Build your foundation in data science, mathematics, and computational thinking.',
    courses: [
      { name: 'Foundations of Data Science', credits: 3, block: 'IA', skills: ['data-literacy', 'python-basics'] },
      { name: 'Design Thinking', credits: 2, block: 'IA', skills: ['problem-solving', 'creativity'] },
      { name: 'Discrete Mathematics', credits: 3, block: 'IA', skills: ['logic', 'mathematical-thinking'] },
      { name: 'Human-Computer Interaction', credits: 3, block: 'IA', skills: ['ux-design', 'user-research'] },
      { name: 'Algorithms', credits: 3, block: 'IB', skills: ['algorithms', 'problem-solving'] },
      { name: 'Mathematical and Statistical Foundations', credits: 2, block: 'IB', skills: ['statistics', 'probability'] },
      { name: 'Networks', credits: 2, block: 'IB', skills: ['networking', 'systems'] },
      { name: 'Differential Calculus', credits: 2, block: 'IB', skills: ['calculus', 'mathematical-analysis'] },
    ],
  },
  {
    id: 2,
    label: 'Semester 2',
    type: 'regular',
    totalCredits: 20,
    description: 'Master programming, databases, and statistical thinking for data science.',
    courses: [
      { name: 'Object-Oriented Programming', credits: 3, skills: ['java', 'oop', 'programming'] },
      { name: 'Database Systems', credits: 3, skills: ['sql', 'database-design'] },
      { name: 'Data Structures', credits: 3, skills: ['data-structures', 'algorithms'] },
      { name: 'Data Wrangling', credits: 2, skills: ['pandas', 'data-cleaning'] },
      { name: 'Web Client Development', credits: 3, skills: ['html', 'css', 'javascript'] },
      { name: 'Communication Protocols', credits: 3, skills: ['networking', 'api'] },
      { name: 'Statistical Thinking', credits: 3, skills: ['statistics', 'hypothesis-testing'] },
    ],
  },
  {
    id: 3,
    label: 'Short Semester 1',
    type: 'short',
    totalCredits: 9,
    description: 'General education and elective exploration.',
    courses: [
      { name: 'Indonesian Way of Life / Pancasila', credits: 2, skills: ['civic'] },
      { name: 'Religions of the World', credits: 2, skills: ['humanities'] },
      { name: 'Elective Course', credits: 5, skills: ['specialization'] },
    ],
  },
  {
    id: 4,
    label: 'Semester 3',
    type: 'regular',
    totalCredits: 18,
    description: 'Advance into web applications, data visualization, and mathematical modeling.',
    courses: [
      { name: 'Web Application Development', credits: 3, block: 'IIIA', skills: ['fullstack', 'web-dev'] },
      { name: 'Advanced Database Systems', credits: 3, block: 'IIIA', skills: ['nosql', 'database-optimization'] },
      { name: 'Stochastic Modeling', credits: 2, block: 'IIIA', skills: ['probability', 'modeling'] },
      { name: 'Numerical Methods', credits: 2, block: 'IIIA', skills: ['numerical-computing', 'simulation'] },
      { name: 'Advanced Computational Mathematics', credits: 2, block: 'IIIB', skills: ['linear-algebra', 'optimization'] },
      { name: 'Data Visualization', credits: 3, block: 'IIIB', skills: ['visualization', 'storytelling'] },
      { name: 'Optimization Methods', credits: 3, block: 'IIIB', skills: ['optimization', 'operations-research'] },
    ],
  },
  {
    id: 5,
    label: 'Semester 4',
    type: 'regular',
    totalCredits: 18,
    description: 'Dive into text mining, big data analytics, and data privacy.',
    courses: [
      { name: 'Text Mining', credits: 3, block: 'IVA', skills: ['nlp', 'text-analysis'] },
      { name: 'Data Warehousing and Mining', credits: 3, block: 'IVA', skills: ['data-warehousing', 'data-mining'] },
      { name: 'Technical / Professional Writing', credits: 2, block: 'IVA', skills: ['communication', 'documentation'] },
      { name: 'Mobile Computing', credits: 3, block: 'IVA', skills: ['mobile-dev', 'cross-platform'] },
      { name: 'Big Data Analytics', credits: 2, block: 'IVB', skills: ['big-data', 'spark'] },
      { name: 'Advanced Methods for Data Analytics', credits: 3, block: 'IVB', skills: ['machine-learning', 'analytics'] },
      { name: 'Data Privacy and Security', credits: 2, block: 'IVB', skills: ['security', 'privacy', 'ethics'] },
    ],
  },
  {
    id: 6,
    label: 'Short Semester 2',
    type: 'short',
    totalCredits: 9,
    description: 'Independent study project or elective courses.',
    courses: [
      { name: 'Independent Study Project', credits: 9, skills: ['research', 'self-directed-learning'] },
    ],
  },
  {
    id: 7,
    label: 'Semester 5 — Concentration',
    type: 'regular',
    totalCredits: 18,
    description: 'Choose your specialization track and deepen expertise.',
    courses: [
      { name: 'Concentration Track Courses', credits: 16, skills: ['specialization'] },
      { name: 'Professional Ethics', credits: 2, skills: ['ethics', 'professional-development'] },
    ],
  },
  {
    id: 8,
    label: 'Semester 6 — MBKM I',
    type: 'mbkm',
    totalCredits: 24,
    description: 'Real-world experience through the Merdeka Belajar program.',
    courses: [
      { name: 'Data Science Project Management', credits: 4, skills: ['project-management', 'agile'] },
      { name: 'Advanced Data Processing and ETL', credits: 4, skills: ['etl', 'data-pipeline'] },
      { name: 'Data Wrangling and Preprocessing Techniques', credits: 4, skills: ['data-cleaning', 'feature-engineering'] },
      { name: 'Statistical Modeling and Inference', credits: 4, skills: ['statistical-modeling', 'inference'] },
      { name: 'Business Communication and Data Presentation', credits: 4, skills: ['communication', 'presentation'] },
      { name: 'Indonesian Way of Life / Pancasila', credits: 2, skills: ['civic'] },
      { name: 'Religions of the World', credits: 2, skills: ['humanities'] },
    ],
  },
  {
    id: 9,
    label: 'Semester 7 — MBKM II',
    type: 'mbkm',
    totalCredits: 24,
    description: 'Advanced industry experience and capstone preparation.',
    courses: [
      { name: 'Machine Learning Applications', credits: 4, skills: ['machine-learning', 'deployment'] },
      { name: 'Big Data Technologies and Cloud Integration', credits: 4, skills: ['cloud', 'big-data'] },
      { name: 'Predictive Analytics and Forecasting', credits: 4, skills: ['forecasting', 'time-series'] },
      { name: 'Data Ethics and Privacy', credits: 4, skills: ['ethics', 'governance'] },
      { name: 'Capstone Data Science Project', credits: 4, skills: ['capstone', 'portfolio'] },
      { name: 'Applied Indonesian Language', credits: 2, skills: ['communication'] },
      { name: 'Civic / Kewarganegaraan', credits: 2, skills: ['civic'] },
    ],
  },
  {
    id: 10,
    label: 'Semester 8 — Capstone',
    type: 'capstone',
    totalCredits: 10,
    description: 'Complete your journey with a capstone project and thesis.',
    courses: [
      { name: 'Capstone Project', credits: 6, skills: ['research', 'portfolio', 'thesis'] },
      { name: 'Academic Writing in English', credits: 2, skills: ['academic-writing', 'english'] },
      { name: 'Research Methodology', credits: 2, skills: ['research', 'methodology'] },
    ],
  },
];

export const CONCENTRATION_TRACKS: ConcentrationTrack[] = [
  {
    id: 'data-engineering',
    name: 'Data Engineering & Big Data Analytics',
    icon: '⚙️',
    color: '#3B82F6',
    description: 'Design and build the infrastructure that powers data-driven organizations. Master distributed systems, cloud computing, and data pipeline architecture.',
    careers: ['Data Engineer', 'Big Data Architect', 'Cloud Data Engineer', 'ETL Developer', 'Data Infrastructure Engineer', 'Platform Engineer'],
    tools: ['Apache Spark', 'Apache Kafka', 'Hadoop', 'AWS/GCP/Azure', 'Docker', 'Kubernetes', 'Airflow', 'dbt', 'Snowflake', 'Terraform'],
    courses: [
      { name: 'Big Data Infrastructure', credits: 2, skills: ['hadoop', 'spark', 'distributed-computing'] },
      { name: 'Distributed Systems', credits: 3, skills: ['distributed-systems', 'scalability'] },
      { name: 'Data Pipeline Development', credits: 3, skills: ['airflow', 'etl', 'data-pipeline'] },
      { name: 'Cloud Computing', credits: 2, skills: ['aws', 'gcp', 'azure'] },
      { name: 'ETL Processes', credits: 3, skills: ['etl', 'data-integration'] },
      { name: 'Data Lakes', credits: 3, skills: ['data-lake', 'storage', 'architecture'] },
    ],
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning Development',
    icon: '🤖',
    color: '#8B5CF6',
    description: 'Build intelligent systems using deep learning, NLP, and computer vision. Learn to develop, train, and deploy AI models at scale.',
    careers: ['Machine Learning Engineer', 'AI Research Scientist', 'NLP Engineer', 'Computer Vision Engineer', 'MLOps Engineer', 'AI Product Manager'],
    tools: ['TensorFlow', 'PyTorch', 'Hugging Face', 'OpenCV', 'scikit-learn', 'MLflow', 'Weights & Biases', 'CUDA', 'ONNX', 'FastAPI'],
    courses: [
      { name: 'Deep Learning', credits: 3, skills: ['neural-networks', 'tensorflow', 'pytorch'] },
      { name: 'Natural Language Processing (NLP)', credits: 3, skills: ['nlp', 'transformers', 'text-processing'] },
      { name: 'Computer Vision', credits: 3, skills: ['image-processing', 'cnn', 'object-detection'] },
      { name: 'Reinforcement Learning', credits: 3, skills: ['rl', 'agents', 'optimization'] },
      { name: 'AI-Planning and Search Strategies', credits: 2, skills: ['ai-planning', 'search-algorithms'] },
      { name: 'Model Deployment', credits: 2, skills: ['mlops', 'deployment', 'api'] },
    ],
  },
  {
    id: 'business-intelligence',
    name: 'Business Intelligence & Advanced Analytics',
    icon: '📊',
    color: '#06B6D4',
    description: 'Transform data into business insights. Master BI tools, predictive analytics, and customer analytics to drive strategic decisions.',
    careers: ['Business Intelligence Analyst', 'Data Analyst', 'Business Analyst', 'Analytics Consultant', 'Marketing Analyst', 'Supply Chain Analyst'],
    tools: ['Tableau', 'Power BI', 'Looker', 'Google Analytics', 'Excel Advanced', 'R', 'SPSS', 'SAP', 'Salesforce Analytics', 'Alteryx'],
    courses: [
      { name: 'Business Intelligence Tools', credits: 2, skills: ['tableau', 'power-bi', 'dashboards'] },
      { name: 'Statistical Modeling', credits: 2, skills: ['regression', 'classification', 'modeling'] },
      { name: 'Customer Analytics', credits: 3, skills: ['segmentation', 'churn', 'lifetime-value'] },
      { name: 'Predictive Analytics', credits: 3, skills: ['forecasting', 'prediction', 'modeling'] },
      { name: 'Business Intelligence and Reporting', credits: 3, skills: ['reporting', 'kpi', 'metrics'] },
      { name: 'Supply Chain Management Systems', credits: 3, skills: ['supply-chain', 'logistics', 'optimization'] },
    ],
  },
];

export const CAPSTONE_OUTPUTS = [
  'Collaborative Project',
  'Portfolio',
  'Product Prototype',
  'Scientific Publication',
  'Thesis',
];

export const PROGRAM_STATS = {
  totalCredits: 152,
  extraCredits: 18,
  totalSemesters: 8,
  shortSemesters: 2,
  concentrationTracks: 3,
  mbkmSemesters: 2,
};

export function getCurriculumSummary(): string {
  let summary = `DATA SCIENCE CURRICULUM (152 CP, 8 Semesters + 2 Short Semesters)\n\n`;

  for (const sem of SEMESTERS) {
    summary += `### ${sem.label} (${sem.totalCredits} CP)\n`;
    summary += `${sem.description}\n`;
    summary += `Courses:\n`;
    for (const course of sem.courses) {
      summary += `- ${course.name} (${course.credits} CP)\n`;
    }
    summary += `\n`;
  }

  summary += `\n### CONCENTRATION TRACKS (Semester 5 - Choose 1)\n\n`;

  for (const track of CONCENTRATION_TRACKS) {
    summary += `**${track.icon} ${track.name}**\n`;
    summary += `${track.description}\n`;
    summary += `Courses:\n`;
    for (const course of track.courses) {
      summary += `- ${course.name} (${course.credits} CP)\n`;
    }
    summary += `Career Paths: ${track.careers.join(', ')}\n`;
    summary += `Tools: ${track.tools.join(', ')}\n\n`;
  }

  summary += `### CAPSTONE (Semester 8)\n`;
  summary += `Outputs: ${CAPSTONE_OUTPUTS.join(', ')}\n`;

  return summary;
}
