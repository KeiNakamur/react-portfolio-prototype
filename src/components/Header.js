import React from 'react';
import { Link } from 'react-router-dom';
//上記のLinkで動的にページを変更できる

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <h3>ポートフォリオ</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/blog">Blog</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>

            </ul>
        </nav>
    </header>
  )
};

export default Header;