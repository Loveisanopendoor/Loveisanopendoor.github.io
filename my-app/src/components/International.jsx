function International() {
  const items = [
    {
    title: 'Presidential Interpreter',
    org: 'ROK Presidential Security Service · Japan National Police Agency & MOFA',
    desc: 'Selected as accompanying interpreter for the ROK President during the Japan–Korea Summit in Nara.',
    year: '2026',
    },
    {
      title: 'President · Official International Exchange Organization B.S.P.',
      org: 'The University of Osaka',
      desc: 'Planned and organized exchange events connecting international and Japanese students. Expanded membership to 30 organizers and hosted welcome parties of 100+ attendees.',
      year: '2022 – 2025',
    },
    {
      title: 'Japanese Representative · 42nd Japan–China Student Conference (JCSC)',
      org: 'Japan–China Student Conference',
      desc: 'Participated in collaborative fieldwork and discussions between Japanese and Chinese students.',
      year: '2023',
    },
  ]

  return (
    <section className="intl" id="international">
      <h2>International Experience</h2>
      <div className="intl-list">
        {items.map((item, i) => (
          <div className="intl-item" key={i}>
            <div className="intl-left">
              <p className="intl-title">{item.title}</p>
              <p className="intl-org">{item.org}</p>
              <p className="intl-desc">{item.desc}</p>
            </div>
            <span className="intl-year">{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default International