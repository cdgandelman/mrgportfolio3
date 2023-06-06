import NavBar from "../components/Navbar"
import "./Home.css"
import videoBg from "../assets/video-1.mp4"
import Footer from "../components/Footer"


export default function AboutMe(){
    return (
        <>
            <NavBar />
            <div className="hero-container">
                <video src={videoBg} autoPlay loop muted  />
                <h1>About Me</h1>
                <p>My name is Chad Gandelman, and I am currently working as a High School Math Teacher. I have a passion for education and love helping students develop their mathematical skills. Teaching has been a rewarding experience, and I enjoy seeing my students succeed.

                Outside of my professional life, I am a proud parent of two wonderful children, a daughter, and a son. They bring immense joy to my life, and I cherish every moment spent with them.

                In my free time, I have a variety of hobbies that keep me engaged. I am fascinated by computers and technology, and I enjoy exploring new advancements in the field. Gaming is another interest of mine, as it allows me to unwind and immerse myself in different virtual worlds. Additionally, I have a keen interest in motorcycles and enjoy the thrill of riding.

                Education has always been a priority for me, and I hold a Master's degree in AI and ML (Artificial Intelligence and Machine Learning). I am passionate about these fields and continuously strive to expand my knowledge and skills in them. My future aspirations include applying my education in AI, ML, and Fullstack development to pursue a rewarding career in these areas.

                I am excited about the possibilities that lie ahead and look forward to making a positive impact through my expertise in AI, ML, and Fullstack development.</p>
                <img className="portrait" src={require("../assets/me.JPG")} alt="me"  />

            </div>
            <Footer />
        </>
    )
}
