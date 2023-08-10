
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-copy-section">Copyright &copy;. All Right Reserved.{` ${currentYear}`}</p>
    </footer>
  )
}

export default Footer