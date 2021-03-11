import Link from 'next/link'
import Layout from '../components/Layout'

const About = () => (
    <Layout title="About">
        <Link href="/">
        <a>Home</a>
        </Link>
        <p>A Javascript programmer</p>
        <img src="/static/javascript-logo.png" alt="Javascript" height="200px"/>
    </Layout>
)

export default About;