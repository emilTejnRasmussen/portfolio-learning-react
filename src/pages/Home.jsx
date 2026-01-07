import AboutTeaser from "../components/AboutTeaser"
import ContactCTA from "../components/ContactCTA"
import FeaturedProjects from "../components/FeaturedProjects"
import Hero from "../components/Hero"
import SkillsSnapshot from "../components/SkillsSnapshot"

function Home() {

    return(
        <>
            <Hero />
            <AboutTeaser />
            <FeaturedProjects />
            <SkillsSnapshot />
            <ContactCTA />
        </>
    )
}

export default Home