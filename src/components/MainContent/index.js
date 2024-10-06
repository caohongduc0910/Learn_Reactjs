import { AiFillGithub } from "react-icons/ai";

function MainContent() {
    var name = 'Cao Duc'
    return (
        <>
            <h1 className="box"> Xin chao {name} <AiFillGithub style={{fontSize: "32px"}}/> </h1>
        </>
    )
}

export default MainContent