import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

export function Menu() {
  return (
    <Sheet >
      <SheetTrigger asChild className="md:hidden ">
        <Button variant="ghost" size="icon-lg">
        <MenuIcon/>
        </Button>
        </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription className="font-poppins">
        
          </SheetDescription>
        </SheetHeader>
        <nav className="px-4 text-black ">
          <ul className="space-y-7.5 ">
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#portfolio">Serviços</a>
            </li>
            <li>
              <a href="#skills">Contatos</a>
            </li>
            
          </ul>
        </nav>
          
      </SheetContent>
    </Sheet>
  );
}
