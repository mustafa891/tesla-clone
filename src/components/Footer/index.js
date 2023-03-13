import React from "react";
import {Wrapper, Content} from "./footer.style"

const Footer = ({bottom}) => {
  return <Wrapper bottom={bottom}>

    <Content>
    <div>
        <a target="_blank" href="https://github.com/mustafa891/tesla-clone/">
            Tesla-Clone &copy;
        </a>
    </div>

    <div>
        <a href="mailto:mustafa.fakher090@gmail.com" target='_blank'>Gmail</a>
        <a href="https://www.linkedin.com/in/mustafa-fakher-10b38124b/" target="_blank" >LinkedIn</a>
        <a href="https://github.com/chirag-23" target="_blank" >GitHub</a>
    </div>

    </Content>

  </Wrapper>
}

export default Footer;