import './page.scss'
import SvgWave from "@/components/svg-wave";

export default function Home() {
  return (
    <main className="home__container">
      <div className="home__content--fixed">
        <div className="home__content-wrapper">
            <h1>Multidisciplinary digital creator from Porto, Portugal.</h1>
            <p>Currently working as Product Owner at <a href="https://pixelmatters.com" target="_blank">Pixelmatters</a>.</p>
            <ul>
                <li>👨‍💻 <a href="https://github.com/tiagoqueiros" target="_blank">GitHub</a></li>
                <li>💼 <a href="https://www.linkedin.com/in/tiagofaqueiros" target="_blank">LinkedIn</a></li>
                <li>🐦 <a href="https://twitter.com/tiagofaqueiros" target="_blank">Twitter</a></li>
            </ul>
        </div>
      </div>
      <div className="home__content">
          <SvgWave />
      </div>
    </main>
  )
}
