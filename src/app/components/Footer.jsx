import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white text-center py-6 mt-10">
        <p>© {new Date().getFullYear()} My Movies App</p>
      </footer>
    </>
  );
}

export default Footer;
