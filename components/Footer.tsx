import Container from "./ui/container";
import { Laugh } from 'lucide-react'

const Footer = () => {
    return ( 
        <header className="sm:flex sm:justify-between mt-5 px-4 border-t">
            <Container>
                <div className="flex h-12 w-full justify-center items-center">
                    <span className="text-xl font-bold m-2">Enjoy </span><Laugh/>
                </div>
            </Container>
        </header>
     );
}
 
export default Footer;