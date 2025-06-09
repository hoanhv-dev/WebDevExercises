const Content = ({ children }) => {
  return (
    <main className="h-[calc(100%-4rem)] ml-[20%] p-8 bg-yellow-50 relative overflow-y-auto">
      { children }
    </main>
  )
}

export default Content;
