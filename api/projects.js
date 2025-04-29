export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
  
    const projects = [
      {
        id: 1,
        frontImage: "https://picsum.photos/300/450",
        description: "Ez az első projekt backendből!",
        linkImage: "https://picsum.photos/300/450",
        linkUrl: "https://picsum.photos/300/450",
      },
      {
        id: 2,
        frontImage: "https://picsum.photos/300/450",
        description: "Második projekt backendből!",
        linkImage: "https://picsum.photos/300/450",
        linkUrl: "https://picsum.photos/300/450",
      },
    ];
  
    res.status(200).json(projects);
  }
  