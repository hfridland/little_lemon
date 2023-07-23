import './Content.css'

import Title from "./title/Title"
import Subtitle from "./subtitle/Subtitle"
import Text from "./text/Text"
import Button from "./button/Button"

function Content() {
    return (
        <div className='content'>
            <Title/>
            <Subtitle/>
            <Text/>
            <Button/>
        </div>
    )
}

export default Content