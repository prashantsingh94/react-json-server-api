import { Link } from "react-router-dom"



const ErrorPage = () => {
  return (
    <main className="Error">
    <p>Something Went Wrong!!</p>
    <p>Well, that's disapointing!</p>
    <p>
      <Link to="/">Visit Our Home Page.</Link>
    </p>
  </main>
  )
}

export default ErrorPage