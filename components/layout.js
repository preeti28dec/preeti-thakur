import Header from "../pages/header";
export default function Layout({ children }) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  )
  }