import React from "react";

const Header = ({titulo}) =>{
    return (
        <nav>
            <nav class="navbar navbar-dark bg-primary">
                <h1 class="h1">{titulo}</h1>
            </nav>
        </nav>
    )
}



export default Header;
