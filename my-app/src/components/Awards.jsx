function Awards() {
  const awards = [
    { title: '1st Prize · Urban Engineering GIS Competition, Kyoto University — Presented in New York', year: '2024' },
    { title: '2nd Prize · Japan–China–Korea Speech Contest, Trilateral Cooperation Secretariat (TCS)', year: '2025' },
    { title: '2nd Prize · Japan–Korea Student Cultural Forum, Consulate General of the Republic of Korea in Osaka', year: '2024' },
    { title: 'Excellent Presentation Award · Global Leadership Program, The University of Osaka', year: '2024' },
  ]

  const honors = [
    { title: 'Japanese Government (MEXT) Undergraduate Scholarship', year: '2021 –' },
    { title: 'Mathematics & Data Science Program Completion · The University of Osaka', year: '2025' },
    { title: 'GCI Program Completion · The University of Tokyo', year: '2024' },
  ]

  const renderList = (items) => items.map((item, i) => (
    <div className="award-item" key={i}>
      <span className="award-title">{item.title}</span>
      <span className="award-year">{item.year}</span>
    </div>
  ))

  return (
    <section className="awards" id="awards">
      <h2>Awards & Honors</h2>
      <p className="awards-sub">Awards</p>
      <div className="awards-list">{renderList(awards)}</div>
      <p className="awards-sub">Honors</p>
      <div className="awards-list">{renderList(honors)}</div>
    </section>
  )
}

export default Awards