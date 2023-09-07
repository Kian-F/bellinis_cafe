import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}
      <Hero
        heading="Bellini's Cafe and Restaurant"
        message="Welcome to Bellini's Cafe, where passion for coffee meets Italian inspiration"
      />

      {/* </div> */}
    </main>
  )
}
