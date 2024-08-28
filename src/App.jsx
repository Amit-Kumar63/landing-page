import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  

  return (
    <section className="px-7 w-full min-h-screen max-[950px]:px-3 font-poppins">
      <Header />
      <Content />
      <Footer/>
    </section>
  )
}

export default App
