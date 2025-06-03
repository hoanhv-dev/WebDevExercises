import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Content from '../components/Content'

const MainLayout = ({ children }) => {
  return (
    <div className='relative h-screen'>
      <Header />
      <SideBar />
      <Content> {children} </Content> 
    </div>
  )
}

export default MainLayout
