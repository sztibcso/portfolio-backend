export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const projects = [
    {
      id: 1,
      frontImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/sql-playground.png", // SQL Playground
      description: "Real PostgreSQL in the browser: a ticketing data model with PK/FK constraints, joins and window functions you can run and break yourself.",
      linkImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/open.png", // Coming Soon
      linkUrl: "/sql-playground",
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
