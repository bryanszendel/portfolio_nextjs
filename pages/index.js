import Layout from '../components/MyLayout';
import Link from 'next/link';
import data from '../data/data.js'

const Index = props => (
  <Layout>
    <h1>Bryan Szendel</h1>
    <h4>{data.about.title}</h4>
    <ul>
      {data.projects.map(project => (
        <li key={project.id}>
          <Link href="/p/[id]" as={`/p/${project.id}`}>
            <a>{project.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default Index;