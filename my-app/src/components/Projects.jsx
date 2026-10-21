function Projects() {
  const items = [
    {
      tags: ['#JavaScript', '#TypeScript', '#Python', '#HTML', '#CSS'],
      year: '2026',
      title: 'UTokyo iii Exhibition — Full-Stack Web Development',
      desc: 'Built the website for The University of Tokyo’s iii Exhibition, taking ownership of UI design, frontend implementation, and backend development. Combined design and development to deliver a complete web experience.',
      link: 'https://iiiexhibition.com/',
    },
    {
      tags: ['Design', 'Art'],
      year: '2025',
      title: 'RE:WIRE — Industrial Bonsai Art · Expo 2025 Osaka',
      desc: 'Designed upcycled sculptures from discarded factory wires shaped as bonsai. Exhibited at Panasonic Pavilion Day, Expo 2025 Osaka.',
      link: 'https://www.facebook.com/TheUniversityofOsaka/posts/pfbid0hrSn7DWkwvLTad1FXxaEgQqEpf7eoa5x8S96iSpuhm3qeZVAyY4rX6npNGqmmPN6l?rdid=XYvtQOCuXZicf9Nh#',
    },
    {
      tags: ['GIS', 'Data Visualization'],
      year: '2024',
      title: 'Urban Engineering GIS Competition, Kyoto University — 1st Prize',
      desc: 'Analyzed host cities of world expos and developed a GIS-based visualization of urban impacts using Re:Earth. Presented in New York.',
      link: 'https://www.qetohare.com/tecnologymeetsbeauty2024/',
    },
    {
      tags: ['Startup', 'Research'],
      year: '2024',
      title: 'Internship, The University of Osaka Venture Capital',
      desc: 'Analyzed startup ecosystems in Japan and South Korea.',
      link: 'https://blog.ouvc.co.jp/topics/240809-0',
    },
  ]

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      {items.map((item, i) => (
        <div className="project-card" key={i}>
          <div className="project-header">
            <div className="project-tags">
              {item.tags.map((tag, j) => (
                <span className="tag" key={j}>{tag}</span>
              ))}
            </div>
            <span className="project-year">{item.year}</span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          {item.link && (
            <a className="project-link" href={item.link} target="_blank">View Project →</a>
          )}
        </div>
      ))}
    </section>
  )
}

export default Projects