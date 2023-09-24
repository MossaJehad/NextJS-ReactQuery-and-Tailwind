import Link from "next/link";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { Menu } from 'lucide-react';
import { ModeToggle } from "./ThemeChanger"; 
import ProfileButton from "./ProfileButton";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
const routes = [
    {
        href: '/',
        label: 'Movies'
    },
    {
        href: '/',
        label: 'Categories'
    },
    {
        href: '/',
        label: 'Newest'
    },
]


const Header = () => {
    return ( 
        <header className="sm:flex sm:justify-between py-3 px-4 border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
                    <div className="flex items-center">
                        <Sheet>
                            <SheetTrigger>
                            <Menu size={28} strokeWidth={2.5} className="h-6 w-6 md:hidden" />
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col m-5 p-2 gap-4">
                        {routes.map((route, id) => (
                                <Button key={id} variant="ghost"> 
                                    <Link
                                        key={id}
                                        href={route.href}
                                        className="px-2"
                                    >
                                    {route.label}
                                    </Link>
                                </Button>
                            ))}
                    </nav>
                            </SheetContent>
                        </Sheet>
                        <Link href="/" className="ml-4 lg:ml-0">
                            <h1 className="text-xl font-bold">
                                Movie
                            </h1>
                        </Link>
                    </div>
                    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
                        {routes.map((route, id) => (
                                <Button key={id} variant="ghost">
                                    <Link
                                        key={id}
                                        href={route.href}
                                    >
                                    {route.label}
                                    </Link>
                                </Button>
                            ))}
                    </nav>
                    <div className="flex items-center">
                        <div className="mx-2">
                            <ModeToggle/>
                        </div>
                        <div className="mx-2">
                            <ProfileButton/>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
     );
}
 
export default Header;