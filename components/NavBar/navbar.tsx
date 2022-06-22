import React from 'react';
import Container from '../Layout/Container';

const Navbar = () => {
  return (
    <Container>
      <nav>
        <div className="flex justify-between mx-auto">
          <div className="  w-1/2">
            <a>LOGO</a>
          </div>

          <div className="w-1/3  flex justify-between">
            <a>Home</a>
            <a>Video</a>

            <a>Blogs</a>

            <a>Contact</a>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
