import React from "react";

const sizes = {};

const Text = ({ children, className = "", as, size =" ", ...restProps }) => {
const Component = as ||"p";
return ( 
<Component className={`${className} ${sizes [size]}`} {...restProps}>

{children}

</Component>

);

};

export { Text };