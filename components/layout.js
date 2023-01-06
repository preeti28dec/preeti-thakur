import Header from "../pages/header";
export default function Layout({ childern }) {
  return (
    <>
      <Header/>
      <main>{childern}</main>
    </>
  )
  }