import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
