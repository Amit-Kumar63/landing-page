import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  

  return (
    <section className="px-7 flex flex-col flex-[4] w-full min-h-screen max-[950px]:px-3">
      <Header />
      <main className="flex-1">
      <Content />
      </main>
      <Footer/>
    </section>
  )
}

export default App
