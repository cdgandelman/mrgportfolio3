import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import resumePDF from "../assets/Resume.pdf"
import "./Resume.css"

export default function Resume(){
    return (
        <>
            <NavBar />
            <h1>My Resume</h1>
            <p>Here is my resume. Click the link below to download it:</p>
            <a href={resumePDF} download="resume.pdf">Download Resume</a>
            <embed src={resumePDF} type="application/pdf" width="100%" height="600px" />
            <Footer />
        </>
    )
}