export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const projects = [
    {
      id: 1,
      frontImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/angular.png", // Angular
      description: "An Angular project descripton",
      linkImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/coming-soon.png", // Coming Soon
      linkUrl: "/coming-soon",
    },
    {
      id: 2,
      frontImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/nextjs.png", // Next.js
      description: "A Next.js project description!",
      linkImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/coming-soon.png", // Coming Soon
      linkUrl: "/coming-soon",
    },
    {
      id: 3,
      frontImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/vue.png", // Vue
      description: "A Vue project descripton!",
      linkImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/coming-soon.png", // Coming Soon
      linkUrl: "/coming-soon",
    },
    {
      id: 4,
      frontImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/web3.png", // web3
      description: "A Web3 project descripton!",
      linkImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/coming-soon.png", // Coming Soon
      linkUrl: "/coming-soon",
    },
  ];

  res.status(200).json(projects);
}
