import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 text-center p-2  ">
      <p>All rights reserved || E-Books House || Developed by <Link target="_blank" to={"https://ariyanrahmananas.netlify.app/"}> Ariyan Rahman Anas</Link>  </p>
    </footer>
  )
}