export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const projects = [
    {
      id: 1,
      frontImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/angular.png", // Angular
      description: "A pixel-style Angular project!",
      linkImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/coming-soon.png", // Coming Soon
      linkUrl: "/coming-soon",
    },
    {
      id: 2,
      frontImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/react-native.png", // React Native
      description: "A pixel-style React Native project!",
      linkImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/coming-soon.png", // Coming Soon
      linkUrl: "/coming-soon",
    },
    {
      id: 3,
      frontImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/vue.png", // Vue
      description: "A pixel-style Vue project!",
      linkImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/coming-soon.png", // Coming Soon
      linkUrl: "/coming-soon",
    },
    {
      id: 4,
      frontImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/web3.png", // web3
      description: "A pixel-style web3 project!",
      linkImage: "https://portfolio-szalontai-tibors-projects.vercel.app/images/coming-soon.png", // Coming Soon
      linkUrl: "/coming-soon",
    },
  ];

  res.status(200).json(projects);
}
