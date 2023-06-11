import SvgWave from "@/components/svg-wave";

export default function Home() {
  return (
    <main className="w-screen	h-screen flex items-center justify-center p-5">
      <div className="absolute max-w-full md:max-w-md lg:max-w-xl xl:max-w-3xl 2xl:max-w-7xl p-10 z-10 grid gap-2 2xl:gap-8 grid-cols-1">
        <h1>Hi, I&apos;m Tiago Queirós 👋</h1>
        <p>A results-driven Product Owner with a strong background in software and web engineering, and know-how in digital product design - with more than 8 years in the industry.</p>
        <p>Currently working as Product Owner at <a href='https://pixelmatters.com' target='_blank'>Pixelmatters</a>.</p>
        <ul>
          <li>👨‍💻 <a href="https://github.com/tiagoqueiros" target="_blank">GitHub</a></li>
          <li>💼 <a href="https://www.linkedin.com/in/tiagofaqueiros" target="_blank">LinkedIn</a></li>
          <li>🐦 <a href="https://twitter.com/tiagofaqueiros" target="_blank">Twitter</a></li>
        </ul>
      </div>
      <div className="relative top-0 left-0 z-0 h-full rounded-2xl overflow-hidden">
          <SvgWave />
      </div>
    </main>
  )
}
