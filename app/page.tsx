import SvgWave from "@/components/svg-wave";

export default function Home() {
  return (
    <main className="w-screen	h-screen flex items-center justify-center p-5">
      <div
        className="absolute max-w-full md:max-w-md lg:max-w-xl xl:max-w-3xl 2xl:max-w-7xl p-10 z-10 grid gap-2 2xl:gap-8 grid-cols-1">
        <h1>Hi, I&apos;m Tiago Queirós 👋</h1>
        <p>
          Currently working as a <b>Product Owner at <a href="https://pixelmatters.com" target="_blank"><b>Pixelmatters</b></a></b>.
        </p>

        <p>
          👉 <b>3 Years of Product Management</b> experience in EMEA & US.<br/>👉 <b>10+ Years</b> of engineering experience.<br/>🚀 <b>5 Years</b> working remotely (EMEA & US).<br/>💡 Fluent in <b>English, French, and Portuguese.</b><br/>✅ Excelling in <b>fast-paced</b> teams.</p>
        <p>
          Feel free to reach me at 👇
        </p>
        <ul>
          <li>💼 <a href="https://www.linkedin.com/in/tiagofaqueiros" target="_blank">LinkedIn</a></li>
          <li>👨‍💻 <a href="https://github.com/tiagoqueiros" target="_blank">GitHub</a></li>
        </ul>
      </div>
      <div className="relative top-0 left-0 z-0 h-full rounded-2xl overflow-hidden">
        <SvgWave />
      </div>
    </main>
  );
}
