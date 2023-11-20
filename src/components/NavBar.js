import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const allNavs = links.map((link)=>{
    return <a href={`#${link}`} key={link}>{link}</a>
  })

  return (
  <nav>
    {allNavs}
  </nav>
    )
}

export default NavBar;
