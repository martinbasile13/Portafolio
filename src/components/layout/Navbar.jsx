import { ThemeToggle } from '../ui/ThemeToggle';

export function Navbar({ theme, onThemeChange }) {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        const navbarHeight = 64; // altura aproximada del navbar

        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 shadow-lg">
            <div className="flex-1">
                <a onClick={() => scrollToSection('home')} className="btn btn-ghost normal-case text-xl cursor-pointer">
                    Mi Portfolio
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a className="cursor-pointer" onClick={() => scrollToSection('projects')}>Proyectos</a>
                    </li>
                    <li>
                        <a className="cursor-pointer" onClick={() => scrollToSection('skills')}>Habilidades</a>
                    </li>
                    <li>
                        <a className="cursor-pointer" onClick={() => scrollToSection('about')}>Sobre mí</a>
                    </li>
                    <li>
                        <a className="cursor-pointer" onClick={() => scrollToSection('contact')}>Contacto</a>
                    </li>
                </ul>
                <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
            </div>
        </div>
    );
} 