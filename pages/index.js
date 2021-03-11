import Link from 'next/link'
import Layout from '../components/Layout'

const Index = () => (
<Layout title="Home">
    <Link href="/about">
        <a>Go to about</a>
        </Link>
    <p>Welcome</p>
</Layout>)
export default Index;