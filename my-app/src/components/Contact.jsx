import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'

function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('mathjm@g.ecc.u-tokyo.ac.jp')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>

      {copied && <div className="toast">Copied to clipboard!</div>}

      <div className="contact-info">
        <div className="contact-item" onClick={copyEmail}>
          <MdEmail size={20} />
          <span>mathjm@g.ecc.u-tokyo.ac.jp</span>
        </div>
        <a className="contact-item" href="https://linkedin.com/in/jaeminkim5050" target="_blank">
          <FaLinkedin size={20} />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  )
}

export default Contact