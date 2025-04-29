export default function handler(req, res) {
    const projects = [
      {
        id: 1,
        frontImage: "https://via.placeholder.com/300x450",
        description: "Ez az első projekt backendből!",
        linkImage: "https://via.placeholder.com/50",
        linkUrl: "https://example.com/project1",
      },
      {
        id: 2,
        frontImage: "https://via.placeholder.com/300x450",
        description: "Második projekt backendből!",
        linkImage: "https://via.placeholder.com/50",
        linkUrl: "https://example.com/project2",
      },
    ];
  
    res.status(200).json(projects);
  }
  