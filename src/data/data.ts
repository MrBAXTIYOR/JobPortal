export const recentPosts = [
  {
    id: 1,
    title: 'Integer volutpat fringilla ipsum, nec tempor risus facilisis eget.',
    date: 'Nov 12, 2021',
    comments: 25,
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    title: 'Integer volutpat fringilla ipsum, nec tempor risus facilisis eget.',
    date: 'Nov 12, 2021',
    comments: 25,
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 3,
    title: 'Integer volutpat fringilla ipsum, nec tempor risus facilisis eget.',
    date: 'Nov 12, 2021',
    comments: 25,
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
];

export const galleryImages = [
  'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
];

export const portfolioItems = [
  {
    id: 1,
    title: 'The picture book about Big Data for kids & adults',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: "Your designer's favourite web developer",
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'This is Norway.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'WE CAPTURE ALL THE FIELD',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export const blogDetailCommet = [
  {
    id: 1,
    author: 'Cody Fisher',
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop',
    content: 'Amet minim mollit non deserunt.',
    time: '1 min ago',
  },
  {
    id: 2,
    author: 'Bessie Cooper',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content:
      'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    time: '10 min ago',
    replies: [
      {
        id: 3,
        author: 'Bessie Cooper',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        content:
          'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        time: '15 min ago',
      },
    ],
  },
];


interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
}


export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Donec accumsan volutpat interdum. Nunc tellus enim.",
    description: "Sed sed sollicitudin lacus, nulla ut risus luctus, lobortis lorem vitae, cursus erat. Sed sit amet faucibus ipsum, ut consequat sem.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop"
  },
  {
    id: 2,
    title: "Praesent tristique sagittis malesuada. Nulla vulputate pretium",
    description: "Donec purus ante, eleget vehicula risus nec, consectetur eleifend nisi. Etiam libero eros, sollicitudin eu pharetra et, eleifend in urna.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop"
  },
  {
    id: 3,
    title: "Pharetra vel sapien vel, sagittis pulvinar orci. Pellentesque.",
    description: "Nunc vel ipsum justo. Curabitur et eleifend neque. In hac habitasse platea dictumst. Pellentesque sapien ante, pulvinar eget magna id.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop"
  }
];

interface Job {
  id: number;
  company: string;
  logo: string;
  position: string;
  type: string;
  location: string;
  salary: string;
  date: string;
  status: 'Active' | 'Pending' | 'Rejected';
}

export const jobs: Job[] = [
  {
    id: 1,
    company: 'Upwork',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Upwork-logo.svg',
    position: 'Networking Engineer',
    type: 'Remote',
    location: 'Washington',
    salary: '$50k-80k/month',
    date: 'Feb 2, 2019 19:28',
    status: 'Active',
  },
  {
    id: 2,
    company: 'Dribbble',
    logo: 'https://cdn.dribbble.com/assets/dribbble-ball-192-ec064e49e6f63d9a5fa911518781bee0c90688d052a038f8876ef0824f65eaf2.png',
    position: 'Product Designer',
    type: 'Full Time',
    location: 'Dhaka',
    salary: '$50k-80k/month',
    date: 'Dec 7, 2019 23:26',
    status: 'Active',
  },
];

interface FovoriteJob {
  id: number;
  title: string;
  company: {
    name: string;
    logo: string;
  };
  location: string;
  salary: string;
  type: string;
  deadline: string;
  isExpired: boolean;
}

export const favoritejobs: FovoriteJob[] = [
  {
    id: 1,
    title: "Technical Support Specialist",
    company: {
      name: "Google",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=50&h=50&fit=crop"
    },
    location: "Idaho, USA",
    salary: "$15K-$20K",
    type: "Full Time",
    deadline: "Job Expire",
    isExpired: true
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: {
      name: "YouTube",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=50&h=50&fit=crop"
    },
    location: "Minnesota, USA",
    salary: "$10K-$15K",
    type: "Full Time",
    deadline: "4 Days Remaining",
    isExpired: false
  },
  {
    id: 3,
    title: "Senior UX Designer",
    company: {
      name: "Dribbble",
      logo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=50&h=50&fit=crop"
    },
    location: "United Kingdom of Great Britain",
    salary: "$30K-$35K",
    type: "Full Time",
    deadline: "4 Days Remaining",
    isExpired: false
  },
  {
    id: 4,
    title: "Junior Graphic Designer",
    company: {
      name: "Facebook",
      logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=50&h=50&fit=crop"
    },
    location: "Mymensingh, Bangladesh",
    salary: "$40K-$50K",
    type: "Full Time",
    deadline: "4 Days Remaining",
    isExpired: false
  },
  {
    id: 5,
    title: "Product Designer",
    company: {
      name: "Twitter",
      logo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=50&h=50&fit=crop"
    },
    location: "Sivas, Turkey",
    salary: "$50K-$70K",
    type: "Full Time",
    deadline: "4 Days Remaining",
    isExpired: false
  },
  {
    id: 6,
    title: "Project Manager",
    company: {
      name: "Unsplash",
      logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=50&h=50&fit=crop"
    },
    location: "Ohio, USA",
    salary: "$50K-$80K",
    type: "Full Time",
    deadline: "4 Days Remaining",
    isExpired: false
  },
  {
    id: 7,
    title: "Marketing Manager",
    company: {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=50&h=50&fit=crop"
    },
    location: "Konya, Turkey",
    salary: "$20K-$25K",
    type: "Temporary",
    deadline: "4 Days Remaining",
    isExpired: false
  }
];
