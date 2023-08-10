import { Link } from "react-router-dom";

const MissingPage = () => {
  return (
    <main className="Missing">
      <p>Page Not Found</p>
      <p>Well, that's disapointing!</p>
      <p>
        <Link to="/">Visit Our Home Page.</Link>
      </p>
    </main>
  )
}

export default MissingPage